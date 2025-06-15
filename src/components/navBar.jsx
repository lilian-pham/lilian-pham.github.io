import "../styling/navBar.css";
import logo from "../images/logo-favicon.jpeg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} className="logo" alt="Logo" />
      </Link>

      <div className="sections">
        <Link to="/" className="nav-link">Overview</Link>
        <Link to="/education" className="nav-link">Education</Link>
        <Link to="/experience" className="nav-link">Experience</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
      </div>
    </nav>
  );
};

export default Navbar;
