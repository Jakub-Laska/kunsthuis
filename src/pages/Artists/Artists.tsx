import { Link } from "react-router-dom";
import "../../css/Artists.css";

const artists = [
  {
    name: "Rineke Dijkstra",
    slug: "Rineke",
    image: "/artists/rineke.jpg",
    className: "rineke",
  },
  {
    name: "Piet Mondriaan",
    slug: "piet",
    image: "/artists/piet.jpg",
    className: "piet",
  },
  {
    name: "Vincent van Gogh",
    slug: "vincent",
    image: "/artists/vincent.jpg",
    className: "",
  },
  {
    name: "Marlene Dumas",
    slug: "marlene",
    image: "/artists/marlene.jpeg",
    className: "",
  },
  {
    name: "Hieronymus Bosch",
    slug: "hieronymus",
    image: "/artists/hieronymus.jpg",
    className: "hieronymus",
  },
  {
    name: "René Magritte",
    slug: "rene",
    image: "/artists/rene.webp",
    className: "",
  },
  {
    name: "James Ensor",
    slug: "james",
    image: "/artists/james.jpg",
    className: "james",
  },
  {
    name: "Michaël Borremans",
    slug: "michael",
    image: "/artists/michael.jpg",
    className: "",
  },
  {
    name: "Wim Delvoye",
    slug: "wim",
    image: "/artists/wim.webp",
    className: "",
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
