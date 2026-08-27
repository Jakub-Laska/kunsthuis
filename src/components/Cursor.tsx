import { useEffect, useRef, useState } from "react";
import "../css/Cursor.css";
export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const circleX = useRef(0);
  const circleY = useRef(0);

  const rafId = useRef<number | null>(null);
  const isRunning = useRef(false);

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(false);

    requestAnimationFrame(() => {
      setClicked(true);

      setTimeout(() => {
        setClicked(false);
      }, 250);
    });
  };

  useEffect(() => {
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button");

      if (interactive) {
        cursorRef.current?.classList.add("fade");
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button");

      if (interactive) {
        cursorRef.current?.classList.remove("fade");
      }
    };

    const handleWindowMouseOut = (e: MouseEvent) => {
      if (!e.relatedTarget) {
        cursorRef.current?.classList.add("fade");
      }
    };

    const handleWindowMouseOver = (e: MouseEvent) => {
      if (!e.relatedTarget) {
        cursorRef.current?.classList.remove("fade");
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    window.addEventListener("mouseout", handleWindowMouseOut);
    window.addEventListener("mouseover", handleWindowMouseOver);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);

      window.removeEventListener("mouseout", handleWindowMouseOut);
      window.removeEventListener("mouseover", handleWindowMouseOver);
    };
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor) return;

    const mq = window.matchMedia("(max-width: 768px)");

    let isMobile = mq.matches;

    const handleMediaChange = (e: MediaQueryListEvent) => {
      isMobile = e.matches;

      if (isMobile && isRunning.current) {
        cancelAnimationFrame(rafId.current!);

        cursor.classList.remove("visible");
        isRunning.current = false;
      } else if (!isMobile) {
        enableCursor();
      }
    };

    mq.addEventListener("change", handleMediaChange);

    const updateMousePosition = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    const followCursor = () => {
      circleX.current += (mouseX.current - circleX.current) * 0.2;

      circleY.current += (mouseY.current - circleY.current) * 0.2;

      cursor.style.setProperty("--cursorX", `${Math.round(circleX.current)}px`);

      cursor.style.setProperty("--cursorY", `${Math.round(circleY.current)}px`);

      rafId.current = requestAnimationFrame(followCursor);
    };

    const enableCursor = () => {
      if (isMobile || isRunning.current) return;

      const setInitialPosition = (e: MouseEvent) => {
        mouseX.current = e.clientX;
        mouseY.current = e.clientY;

        circleX.current = e.clientX;
        circleY.current = e.clientY;

        cursor.classList.add("visible");

        document.addEventListener("mousemove", updateMousePosition);

        isRunning.current = true;
        rafId.current = requestAnimationFrame(followCursor);
      };

      document.addEventListener("mousemove", setInitialPosition, {
        once: true,
      });
    };

    enableCursor();

    return () => {
      mq.removeEventListener("change", handleMediaChange);

      document.removeEventListener("mousemove", updateMousePosition);

      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return (
    <div ref={cursorRef} className="cursor">
      <div className={`cursor-circle ${clicked ? "click" : ""}`} />
    </div>
  );
}
