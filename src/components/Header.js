import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/" onClick={() => scrollToSection("home")}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={() => scrollToSection("about")}>About Me</Link>
          </li>
          <li>
            <Link to="/skills" onClick={() => scrollToSection("skills")}>Skills</Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => scrollToSection("projects")}>Projects</Link>
          </li>
          <li>
            <Link to="/experience" onClick={() => scrollToSection("experience")}>Experience</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => scrollToSection("contact")}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
