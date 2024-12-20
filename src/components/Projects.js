import React from "react";
import "../styles/Projects.css";

const Projects = () => (
  <section id="projects" className="projects">
    <h2>My Projects</h2>

    <div className="projects-container">
      {/* Left Project */}
      <div className="project-left">
        <div className="project">
          <img
            src="/assets/images/FireFighting.jpeg"
            alt="FireFighting Robo Car"
            className="project-image"
          />
          <div className="project-info">
            <h3>FireFighting Robo Car</h3>
            <p>A robot car designed to detect and extinguish fire automatically.</p>
            {/* Add Video */}
            <div className="video-container">
              <video controls className="project-video">
                <source
                  src="/assets/videos/firefighting.mp4" // Replace with your video file path
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="divider"></div>

      {/* Right Project */}
      <div className="project-right">
        <div className="project">
          <img
            src="/assets/images/Ecom .jpeg"
            alt="E-commerce Product CartPage"
            className="project-image"
          />
          <div className="project-info">
            <h3>E-commerce Product</h3>
            <p>An organized catalog for showcasing products online.</p>
            {/* Additional Content */}
            <div className="extra-content">
              <h4>Features:</h4>
              <ul>
                <li>Product listing with images and descriptions</li>
                <li>Shopping cart functionality</li>
                <li>Responsive design for mobile and desktop</li>
                <li>Filter products by categories, price range, etc.</li>
              </ul>

              <h4>Technologies Used:</h4>
              <ul>
                <li>React for building the UI</li>
                <li>CSS for styling</li>
                <li>JavaScript for interactivity</li>
               
              </ul>

              <h4>View Demo:</h4>
              <p>Check out the live demo or explore the code on <a href="https://ebusiness-five.vercel.app/" target="_blank" rel="noopener noreferrer">Vercel</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
