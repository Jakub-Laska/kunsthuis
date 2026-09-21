import { Link } from "react-router-dom";
import { useEffect } from "react";

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
    slug: "rineke",
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

interface ArtistsGridProps {
  currentSlug?: string;
  small?: boolean;
}

function ArtistsGrid({ currentSlug, small = false }: ArtistsGridProps) {
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

  const handleArtistClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  return (
    <div
      className={`grid-container-artists ${
        small ? "grid-container-artists-small" : ""
      }`}
    >
      {artists.map((artist) => {
        const isCurrent = artist.slug === currentSlug;

        return (
          <Link
            key={artist.slug}
            onClick={handleArtistClick}
            to={`/artists/${artist.slug}`}
            className={`grid-element-artists grunge-effect ${
              isCurrent ? "diagonal-two" : ""
            }`}
          >
            <p>{artist.name}</p>

            <img
              className={`artist-img ${
                !isCurrent
                  ? `distorted ${small ? "distorted-small" : "distorted-normal"}`
                  : ""
              } ${artist.className}`}
              src={artist.image}
              alt={artist.name}
            />
          </Link>
        );
      })}
    </div>
  );
}

export { ArtistsGrid };
