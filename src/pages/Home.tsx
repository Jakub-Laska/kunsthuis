import "../css/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="grid-container">
        <div className="grid-left grid-column">
          <div className="grid-element">upcoming event</div>
          <div className="grid-element">x</div>
          <div className="grid-element">x</div>
        </div>
        <div className="grid-mid grid-column">
          <div className="grid-element">next event</div>
          <div className="grid-element">event after that</div>
          <div className="grid-element">all events btn</div>
        </div>
        <div className="grid-right grid-column">
          <div className="grid-element">
            <p>KUNSTHUIS.</p>
            <p>LEVE DE KUNST. VRIJ, EIGENZINNIG EN ALTIJD IN BEWEGING.</p>
          </div>
          <div className="grid-element">
            <a
              href="https://www.facebook.com/pages/Kunsthuis%20Amsterdam/1050494525061831/#"
              target="_blank"
              className="footer-social-link hover-animation"
            >
              facebook
            </a>
          </div>
          <div className="grid-element">
            <a
              href="https://www.instagram.com/kunsthuizen/"
              target="_blank"
              className="footer-social-link hover-animation"
            >
              instagram
            </a>
          </div>
          <div className="grid-element">
            <Link to="/rules" className="hover-animation">
              huisregels
            </Link>
          </div>
          <div className="grid-element">x</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
