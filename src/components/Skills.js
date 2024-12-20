import React from "react";
import "../styles/Skills.css";

const Skills = () => (
  <section id="skills" className="skills">
    <h2 className="skills-title">My Skills</h2>
    <div className="skills-list">
      {/* Skill 1 - HTML */}
      <div className="skill">
        <div className="skill-icon">
          <i className="fab fa-html5"></i>
        </div>
        <div className="skill-info">
          <h3>HTML</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: "90%" }}></div>
          </div>
        </div>
      </div>

      {/* Skill 2 - CSS */}
      <div className="skill">
        <div className="skill-icon">
          <i className="fab fa-css3-alt"></i>
        </div>
        <div className="skill-info">
          <h3>CSS</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: "85%" }}></div>
          </div>
        </div>
      </div>

      {/* Skill 3 - JavaScript */}
      <div className="skill">
        <div className="skill-icon">
          <i className="fab fa-js-square"></i>
        </div>
        <div className="skill-info">
          <h3>JavaScript</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: "80%" }}></div>
          </div>
        </div>
      </div>

      {/* Skill 4 - React */}
      <div className="skill">
        <div className="skill-icon">
          <i className="fab fa-react"></i>
        </div>
        <div className="skill-info">
          <h3>React</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: "75%" }}></div>
          </div>
        </div>
      </div>

      {/* Skill 5 - UI/UX Design */}
      <div className="skill">
        <div className="skill-icon">
          <i className="fas fa-paint-brush"></i>
        </div>
        <div className="skill-info">
          <h3>UI/UX Design</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: "70%" }}></div>
          </div>
        </div>
      </div>

      {/* Skill 6 - Python */}
      <div className="skill">
        <div className="skill-icon">
          <i className="fab fa-python"></i>
        </div>
        <div className="skill-info">
          <h3>Python</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: "65%" }}></div>
          </div>
        </div>
      </div>

    
     
    </div>
  </section>
);

export default Skills;
