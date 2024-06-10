import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section footer-info">
          <h3>
            <Link to="/about">BCEevents Info</Link>
          </h3>
          <p>Trusted since 2020</p>
        </div>
        <div>
          <div className="footer-sections-right">
            <div className="footer-section">
              <h3>Events</h3>
              <ul>
                <li>
                  <Link to="/about">About BCEevents</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Community</h3>
              <ul>
                <li>
                  <Link to="/become-organizer">Become organizer</Link>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Follow us</h3>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <a
          href="https://www.klava.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by Klava
        </a>
      </div>
    </footer>
  );
}

export default Footer;
