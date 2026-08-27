import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/Navbar.css";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className={`nav-curtain ${menuOpen ? "active" : ""}`}>
        <div className="curtain-container">
          <Link
            to="/"
            className="nav-btn curtain-btn kunsthuis-btn"
            onClick={() => setMenuOpen(false)}
          >
            kunsthuis
          </Link>

          <Link
            to="/events"
            className="nav-btn curtain-btn"
            onClick={() => setMenuOpen(false)}
          >
            evenementen
          </Link>

          <Link
            to="/artists"
            className="nav-btn curtain-btn"
            onClick={() => setMenuOpen(false)}
          >
            kunstenaars
          </Link>

          <Link
            to="/gallery"
            className="nav-btn curtain-btn"
            onClick={() => setMenuOpen(false)}
          >
            galerie
          </Link>

          <Link
            to="/rules"
            className="nav-btn curtain-btn"
            onClick={() => setMenuOpen(false)}
          >
            huisregels
          </Link>

          <button className="nav-exit nav-toggle" onClick={handleClick}>
            <img src="/nav/exit.svg" alt="" />
          </button>
        </div>
      </div>

      <div className="nav-container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-logo-link">
            <img className="navbar-logo" src="/nav/logo.svg" alt="" />
          </Link>
        </div>

        <div className="navbar-links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-btn kunsthuis-btn hover-animation ${isActive ? "active" : ""}`
            }
          >
            kunsthuis
          </NavLink>

          <NavLink
            to="/events"
            className={({ isActive }) =>
              `nav-btn hover-animation ${isActive ? "active" : ""}`
            }
          >
            evenementen
          </NavLink>

          <NavLink
            to="/artists"
            className={({ isActive }) =>
              `nav-btn hover-animation ${isActive ? "active" : ""}`
            }
          >
            kunstenaars
          </NavLink>

          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `nav-btn hover-animation ${isActive ? "active" : ""}`
            }
          >
            galerie
          </NavLink>

          <button className="nav-burger nav-toggle" onClick={handleClick}>
            <img src="/nav/burger.svg" alt="" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
