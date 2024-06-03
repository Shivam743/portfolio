import React from "react";
import { useSpring, animated } from "react-spring";
import "./About.css";

const About = () => {
  const animationProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 300,
  });

  return (
    <animated.div className="about-container" style={animationProps}>
      <section className="current-work">
        <h2 className="section-title">What I'm Currently Working On</h2>
        <p className="section-text">
          I'm currently focused on enhancing my skills in machine learning,
          specifically diving deeper into data preprocessing techniques and
          model optimization. I'm also working on a personal project related to
          sentiment analysis using natural language processing.
        </p>
      </section>
      <section className="future-plans">
        <h2 className="section-title">My Future Plans</h2>
        <p className="section-text">
          Looking ahead, I'm excited to explore advanced topics in deep learning
          and reinforcement learning. I aim to contribute to real-world
          applications of AI and collaborate with teams to develop innovative
          solutions that address complex problems.
        </p>
      </section>
    </animated.div>
  );
};

export default About;
