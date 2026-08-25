import { useState } from "react";
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
          <a href="" className="nav-btn curtain-btn kunsthuis-btn">
            kunsthuis
          </a>
          <a className="nav-btn curtain-btn event-btn">evenementen</a>
          <a className="nav-btn curtain-btn">kunstenaars</a>
          <a className="nav-btn curtain-btn">galerie</a>
          <a className="nav-btn curtain-btn">huisregels</a>

          <button className="nav-exit nav-toggle" onClick={handleClick}>
            <img src="/nav/exit.svg" alt="" />
          </button>
        </div>
      </div>

      <div className="nav-container">
        <div className="navbar-brand">
          <a href="" className="navbar-logo-link">
            <img className="navbar-logo" src="/nav/logo.svg" alt="" />
          </a>
        </div>
        <div className="navbar-links">
          <a href="" className="nav-btn kunsthuis-btn">
            kunsthuis
          </a>
          <a className="nav-btn">evenementen</a>
          <a className="nav-btn">kunstenaars</a>
          <a className="nav-btn">galerie</a>

          <button className="nav-burger nav-toggle" onClick={handleClick}>
            <img src="/nav/burger.svg" alt="" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
