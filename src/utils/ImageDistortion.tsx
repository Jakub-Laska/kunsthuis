import * as THREE from "three";

type DistortionPreset = {
  gridSize: number;
  mouseRadius: number;
  strength: number;
  relaxation: number;
  displacement: number;
  aberration: number;
};

const PRESETS: Record<string, DistortionPreset> = {
  small: {
    gridSize: 6,
    mouseRadius: 0.06,
    strength: 0.05,
    relaxation: 0.999,
    displacement: 0.05,
    aberration: 0.45,
  },
  normal: {
    gridSize: 12,
    mouseRadius: 0.09,
    strength: 0.07,
    relaxation: 0.995,
    displacement: 0.07,
    aberration: 0.4,
  },

  big: {
    gridSize: 32,
    mouseRadius: 0.12,
    strength: 0.08,
    relaxation: 0.99,
    displacement: 0.08,
    aberration: 0.35,
  },

  heavy: {
    gridSize: 128,
    mouseRadius: 0.15,
    strength: 0.09,
    relaxation: 0.95,
    displacement: 0.09,
    aberration: 0.3,
  },

  glitch: {
    gridSize: 28,
    mouseRadius: 0.14,
    strength: 0.13,
    relaxation: 0.985,
    displacement: 0.075,
    aberration: 0.6,
  },
};

function initImageDistortion(image: HTMLImageElement) {
  const parent = image.parentElement;

  if (!parent) return () => {};

  const presetName = image.classList.contains("distorted-small")
    ? "small"
    : image.classList.contains("distorted-big")
      ? "big"
      : image.classList.contains("distorted-heavy")
        ? "heavy"
        : image.classList.contains("distorted-glitch")
          ? "glitch"
          : "normal";

  const {
    gridSize,
    mouseRadius,
    strength,
    relaxation,
    displacement,
    aberration,
  } = PRESETS[presetName];

  let width = image.offsetWidth;
  let height = image.offsetHeight;

  if (!width || !height) return () => {};

  let gridX = gridSize;
  let gridY = gridSize;

  const mouse = {
    x: 0,
    y: 0,
    prevX: 0,
    prevY: 0,
    vX: 0,
    vY: 0,
  };

  const scene = new THREE.Scene();

  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);

  camera.position.z = 1;

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
  });

  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  renderer.domElement.classList.add("image-canvas");

  parent.appendChild(renderer.domElement);

  const imageTexture = new THREE.TextureLoader().load(image.src);

  imageTexture.minFilter = THREE.LinearFilter;
  imageTexture.magFilter = THREE.LinearFilter;
  imageTexture.generateMipmaps = false;

  image.style.opacity = "0";

  function createDataTexture(): THREE.DataTexture {
    const aspect = width / height;

    gridX = aspect >= 1 ? Math.round(gridSize * aspect) : gridSize;

    gridY = aspect >= 1 ? gridSize : Math.round(gridSize / aspect);

    const data = new Float32Array(gridX * gridY * 4);

    const texture = new THREE.DataTexture(
      data,
      gridX,
      gridY,
      THREE.RGBAFormat,
      THREE.FloatType,
    );

    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.NearestFilter;
    texture.needsUpdate = true;

    return texture;
  }

  let dataTexture = createDataTexture();

  const material = new THREE.ShaderMaterial({
    uniforms: {
      uTexture: {
        value: imageTexture,
      },

      uDataTexture: {
        value: dataTexture,
      },
    },

    vertexShader: `
      varying vec2 vUv;

      void main() {
        vUv = uv;

        gl_Position =
          projectionMatrix *
          modelViewMatrix *
          vec4(position, 1.0);
      }
    `,

    fragmentShader: `
      precision mediump float;

      uniform sampler2D uTexture;
      uniform sampler2D uDataTexture;

      varying vec2 vUv;

      void main() {
        vec4 offset =
          texture2D(uDataTexture, vUv);

vec2 shift =
  ${displacement} * offset.rg;

vec2 split =
  shift * ${aberration};

        float r =
          texture2D(
            uTexture,
            vUv - shift - split
          ).r;

        float g =
          texture2D(
            uTexture,
            vUv - shift
          ).g;

        float b =
          texture2D(
            uTexture,
            vUv - shift + split
          ).b;

        gl_FragColor =
          vec4(r, g, b, 1.0);
      }
    `,
  });

  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);

  scene.add(mesh);

  const handleMouseMove = (event: MouseEvent) => {
    const rect = renderer.domElement.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    mouse.vX = x - mouse.x;
    mouse.vY = y - mouse.y;

    mouse.prevX = mouse.x;
    mouse.prevY = mouse.y;

    mouse.x = x;
    mouse.y = y;
  };

  const updateDataTexture = () => {
    const data = dataTexture.image.data as Float32Array;

    for (let i = 0; i < data.length; i += 4) {
      data[i] *= relaxation;
      data[i + 1] *= relaxation;
    }

    const gridMouseX = gridX * mouse.x;
    const gridMouseY = gridY * (1 - mouse.y);

    for (let i = 0; i < gridX; i++) {
      for (let j = 0; j < gridY; j++) {
        const dx = (gridMouseX - i) / gridX;
        const dy = (gridMouseY - j) / gridY;

        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance >= mouseRadius) {
          continue;
        }

        const index = 4 * (i + gridX * j);

        const power = Math.min(100, mouseRadius / Math.max(distance, 0.001));

        data[index] += strength * 100 * mouse.vX * power;
        data[index + 1] -= strength * 100 * mouse.vY * power;
      }
    }

    mouse.vX *= 0.9;
    mouse.vY *= 0.9;

    dataTexture.needsUpdate = true;
  };

  const handleResize = () => {
    width = image.offsetWidth;
    height = image.offsetHeight;

    if (!width || !height) return;

    dataTexture.dispose();

    dataTexture = createDataTexture();

    material.uniforms.uDataTexture.value = dataTexture;

    renderer.setSize(width, height);
  };

  renderer.domElement.addEventListener("mousemove", handleMouseMove);

  window.addEventListener("resize", handleResize);

  renderer.setAnimationLoop(() => {
    updateDataTexture();
    renderer.render(scene, camera);
  });

  return () => {
    renderer.domElement.removeEventListener("mousemove", handleMouseMove);

    window.removeEventListener("resize", handleResize);

    renderer.setAnimationLoop(null);

    mesh.geometry.dispose();
    material.dispose();
    imageTexture.dispose();
    dataTexture.dispose();
    renderer.dispose();

    renderer.domElement.remove();

    image.style.opacity = "";
  };
}

export function initImageDistortions() {
  const images = document.querySelectorAll<HTMLImageElement>("img.distorted");

  const cleanups = Array.from(images).map((image) =>
    initImageDistortion(image),
  );

  return () => {
    cleanups.forEach((cleanup) => cleanup());
  };
}
