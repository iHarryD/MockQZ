import "./CSS/style.css";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer --has-padding">
      <ul id="social-media-tab">
        <li>
          <Link className="social-media-links" to="https://github.com/iHarryD">
            Github
          </Link>
        </li>
        <li>
          <Link
            className="social-media-links"
            to="https://www.linkedin.com/in/prashant-kumar-a97251195/"
          >
            LinkedIn
          </Link>
        </li>
      </ul>
      <p id="portfolio-link">
        Developed by
        <Link to="https://iharryd.github.io/portfolio/"> Harry</Link>
      </p>
    </footer>
  );
}
