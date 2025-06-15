import "../styling/navBar.css";
import logo from "../images/profilepic.jpg";

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  section?.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} className="logo" alt="Logo" onClick={() => scrollToSection("title")}/>

      <div className="sections">
      <span onClick={() => scrollToSection("overview")}>Overview</span>
      <span onClick={() => scrollToSection("education")}>Education</span>
        <span onClick={() => scrollToSection("experience")}>Experience</span>
        <span onClick={() => scrollToSection("projects")}>Projects</span>
      </div>
    </nav>
  );
};

export default Navbar;