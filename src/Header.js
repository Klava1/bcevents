import { Link } from "react-router-dom";
import logo from "./logo.png";

function Header() {
  return (
    <header className="header">
      <Link
        to="/"
        className="logo-link"
      >
        <img
          src={logo}
          className="logo"
          alt="BCEvents Logo"
        />
      </Link>{" "}
      <nav className="nav">
      <Link
          to="/blog"
          className="nav-link"
        >
          Our Blog
        </Link>
        <Link
          to="/about"
          className="nav-link"
        >
          About Us
        </Link>
        <Link
          to="/checkOut"
          className="nav-link"
        >
          Checkout
        </Link>
      </nav>
 
    </header>
  );
}

export default Header;
