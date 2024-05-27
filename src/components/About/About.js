import React from 'react';
import { useSpring, animated } from 'react-spring';
import './About.css';

const About = () => {
  const animationProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 300,
  });

  return (
    <animated.div className="about-container" style={animationProps}>
      <h2 className="about-title">About Me</h2>
      <p className="about-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec nisi sed purus
        sollicitudin aliquam. Sed nec elit eget ipsum posuere efficitur. Integer vitae semper
        velit, non pretium ante. Nam luctus felis a massa faucibus, nec placerat augue aliquet.
        Proin auctor magna sit amet felis dapibus bibendum. Duis ultricies nulla sit amet
        ullamcorper auctor. Vivamus sit amet lacus quis urna tincidunt condimentum. Donec vel
        ligula nec libero mollis ultricies sit amet et nulla. Nulla hendrerit, justo at
        consequat scelerisque, nisi libero vehicula nulla, vel fermentum enim odio sed nunc.
      </p>
    </animated.div>
  );
};

export default About;
