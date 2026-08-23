// import { Link } from "react-router-dom";

import "../css/Navbar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="" className="navbar-logo-link">
          <img className="navbar-logo" src="/logo.svg" alt="" />
        </a>
      </div>
      <div className="navbar-links"></div>
    </nav>
  );
}

export default NavBar;
