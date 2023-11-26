import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="">Contact US</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
