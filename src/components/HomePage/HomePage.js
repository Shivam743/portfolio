import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <section className="banner">
        <div className="container">
          <div className="profile-section">
            <img
              src="https://thumbs.dreamstime.com/b/business-man-13230848.jpg"
              className="profile-picture"
              alt="#"
            />
          </div>
          <div className="introduction-section">
            <h2 className="section-title">Hey, I am Shivam Yadav</h2>
            <p className="section-text">
              A passionate cook and content creator. I love exploring new
              recipes and sharing my cooking journey with others through my
              YouTube channel and blog.
            </p>
            <Link to="/contact" className="contact-link">
              <button className="contact-button">
                Contact Me <i className="fas fa-envelope"></i>
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="projects">
        <h2 className="section-title">Featured Projects</h2>
        <div className="project-list">{/* Render featured projects */}</div>
      </section>
    </div>
  );
};

export default HomePage;