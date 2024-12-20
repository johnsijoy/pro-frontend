import React from "react";
import "../styles/About.css";

const About = () => (
  <section id="about" className="about">
    <div className="about-title-container">
      <div className="about-icon">
        <i className="fas fa-user"></i>
        <h1 className="about-title">About Me</h1>
      </div>
    </div>

    <div className="about-container">
      <div className="about-image">
        <img 
          src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA4L3Jhd3BpeGVsX29mZmljZV8zNV9iZWF1dGlmdWxfc21pbGluZ195b3VuZ19pbmRpYW5fYnVzaW5lc3Nfd29tYV8yYWM3MjMyNS1jZmU3LTQ5ODgtODBkNi03YjViZTg3ODYzNjNfMS5qcGc.jpg" 
          alt="About Me"
          className="about-img"
        />
      </div>

      <div className="about-content">
        <p>
          Hi, I’m a passionate Computer Science and Technology enthusiast with a focus on UI/UX design and web development. I love crafting user-centered, impactful digital experiences that solve real-world problems. 🎨💻
        </p>
        <p>
          I specialize in Python, JavaScript, and front-end technologies like HTML5, CSS3, and React. With a creative approach and strong technical skills, I strive to bridge the gap between technology and users.
        </p>

        <div className="about-icon">
          <i className="fas fa-envelope"></i>
          <span>22cst020@vcew.ac.in</span>
        </div>
        <div className="about-icon">
          <i className="fas fa-map-marker-alt"></i>
          <span>Salem</span>
        </div>
      </div>
    </div>
  </section>
);

export default About;
