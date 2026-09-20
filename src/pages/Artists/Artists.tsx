import { Link } from "react-router-dom";
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
  return (
    <div className="home">
      <div className="grid-container-artists">
        {artists.map((artist) => (
          <Link
            key={artist.slug}
            to={`./artists/${artist.slug}`}
            className="grid-element-artists"
          >
            <p>{artist.name}</p>

            <img
              className={`grunge-effect ${artist.className}`}
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
