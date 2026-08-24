// import { Link } from "react-router-dom";

import "../css/Navbar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="navbar-brand">
          <a href="" className="navbar-logo-link">
            <img className="navbar-logo" src="/nav/logo.svg" alt="" />
          </a>
        </div>
        <div className="navbar-links">
          <a className="nav-btn kunsthuis-btn">kunsthuis</a>
          <a className="nav-btn">events</a>
          <a className="nav-btn">artists</a>
          <a className="nav-btn">gallery</a>
          <button className="nav-burger">
            <img src="/nav/burger.svg" alt="" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
