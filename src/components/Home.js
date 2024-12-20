import React from "react";
import "../styles/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const handleResumeClick = () => {
    // Replace "your-resume.pdf" with the actual file path of your resume in the `public` folder
    window.open("/Resume .pdf", "_blank");
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2 className="animated-title">Welcome to My Portfolio</h2>

          <h3>
            Hello, I'm <span className="highlight">Johnsi Joy S</span> | MERN Stack Developer
          </h3>
          <p>
            I specialize in creating high-performance, scalable, and visually engaging web applications.
            With expertise in MongoDB, Express, React, and Node.js, I develop seamless user experiences and
            robust back-end functionality. Take a look at my work and let’s discuss how we can build something great together.
          </p>
          {/* Call-to-action button */}
          <button onClick={handleResumeClick} className="btn btn-cta">
            View Resume
          </button>
          {/* Social Icons */}
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/johnsi-joy-s/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="1x" />
            </a>
            <a
              href="https://github.com/johnsijoy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="1x" />
            </a>
          </div>
        </div>

        {/* Visual Section (Rotating Cube for Technologies) */}
        <div className="hero-visual">
          <div className="rotating-cube">
            <span className="face face1">MongoDB</span>
            <span className="face face2">Express</span>
            <span className="face face3">React</span>
            <span className="face face4">Node.js</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
