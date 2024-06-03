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
              src="/im.jpeg" // Relative path to the image
              alt="Profile"
              className="profile-picture"
            />
          </div>
          <div className="introduction-section">
            <h2 className="section-title">Hey, I am Shivam Yadav</h2>
            <p className="section-text">
              Shivam Yadav is a highly motivated and skilled web developer with
              a BTech in Computer Science and Engineering. He has a proven
              track record of building engaging web applications using
              technologies such as HTML, CSS, JavaScript, Python, and React.
              Throughout his academic and professional journey, Shivam has honed
              his expertise in designing responsive web applications and
              translating complex requirements into user-friendly experiences.
              He is well-versed in front-end development best practices and
              design principles, enabling him to create visually appealing and
              seamless digital experiences. Shivam's portfolio showcases his
              versatility and talent with notable projects like a movie
              recommendation website, a YouTube clone, and a Google clone. These
              projects highlight his ability to craft functional and visually
              appealing web applications that meet diverse user needs.
            </p>
            <Link to="/contact" className="contact-link">
              <button className="contact-button">
                Contact Me <i className="fas fa-envelope"></i>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
