import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../../css/Artists.css";

const artists = [
  {
    name: "Hieronymus Bosch",
    slug: "hieronymus",
    image: "/artists/main/hieronymus.webp",
    className: "hieronymus",
  },
  {
    name: "Michaël Borremans",
    slug: "michael",
    image: "/artists/main/michael.webp",
    className: "michael",
  },
  {
    name: "René Magritte",
    slug: "rene",
    image: "/artists/main/rene.webp",
    className: "rene",
  },
  {
    name: "James Ensor",
    slug: "james",
    image: "/artists/main/james.webp",
    className: "james",
  },
  {
    name: "Piet Mondriaan",
    slug: "piet",
    image: "/artists/main/piet.webp",
    className: "piet",
  },
  {
    name: "Vincent van Gogh",
    slug: "vincent",
    image: "/artists/main/vincent.webp",
    className: "vincent",
  },
  {
    name: "Marlene Dumas",
    slug: "marlene",
    image: "/artists/main/marlene.webp",
    className: "marlene",
  },
  {
    name: "Rineke Dijkstra",
    slug: "Rineke",
    image: "/artists/main/rineke.webp",
    className: "rineke",
  },
  {
    name: "Johannes Vermeer",
    slug: "johannes",
    image: "/artists/main/johannes.webp",
    className: "johannes",
  },
];

function Artists() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(
      ".grid-element-artists",
    );

    const handlers = Array.from(elements).map((element) => {
      const image = element.querySelector<HTMLImageElement>(".artist-img");

      if (!image) return null;

      const enter = () => {
        image.classList.add("active");
      };

      const leave = () => {
        image.classList.remove("active");
      };

      element.addEventListener("mouseenter", enter);
      element.addEventListener("mouseleave", leave);

      return { element, enter, leave };
    });

    return () => {
      handlers.forEach((handler) => {
        if (!handler) return;

        handler.element.removeEventListener("mouseenter", handler.enter);
        handler.element.removeEventListener("mouseleave", handler.leave);
      });
    };
  }, []);

  return (
    <div className="home">
      <div className="grid-container-artists">
        {artists.map((artist) => (
          <Link
            key={artist.slug}
            to={`./artists/${artist.slug}`}
            className="grid-element-artists grunge-effect"
          >
            <p>{artist.name}</p>

            <img
              className={`distorted distorted-normal artist-img  ${artist.className}`}
              src={artist.image}
              alt={artist.name}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Artists;
