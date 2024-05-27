import React from 'react';
import { useSpring, animated } from 'react-spring';
import './Skills.css';

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Node.js',
  'Express.js',
  'MongoDB',
  'SQL',
  'Python',
  'Machine Learning',
  'Data Analysis',
  'Git',
  'UI/UX Design',
];

const Skills = () => {
  const animationProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
  });

  return (
    <animated.div className="skills-container" style={animationProps}>
      <h2 className="skills-title">Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <animated.li
            key={index}
            className="skill-item"
            style={{
              transform: animationProps.opacity.interpolate((o) => `scale(${o})`),
            }}
          >
            {skill}
          </animated.li>
        ))}
      </ul>
    </animated.div>
  );
};

export default Skills;
