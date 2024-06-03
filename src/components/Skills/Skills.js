import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './Skills.css';

const skills = [
  { name: 'HTML', summary: 'HTML is the standard markup language for creating web pages.' },
  { name: 'CSS', summary: 'CSS is a stylesheet language used to describe the presentation of a document written in HTML or XML.' },
  { name: 'JavaScript', summary: 'JavaScript is a programming language commonly used in web development to create interactive effects within web browsers.' },
  { name: 'React', summary: 'React is a JavaScript library for building user interfaces.' },
  { name: 'Node.js', summary: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine.' },
  { name: 'MongoDB', summary: 'MongoDB is a NoSQL database that uses JSON-like documents with optional schemas.' },
  { name: 'SQL', summary: 'SQL is a standard language for storing, manipulating, and retrieving data in databases.' },
  { name: 'Python', summary: 'Python is a high-level, interpreted programming language with dynamic semantics.' },
  { name: 'Machine Learning', summary: 'Machine Learning is a branch of artificial intelligence that focuses on building systems that learn from data.' },
  { name: 'Data Analysis', summary: 'Data Analysis involves inspecting, cleansing, transforming, and modeling data to discover useful information.' },
  { name: 'Git', summary: 'Git is a distributed version control system for tracking changes in source code during software development.' },
  { name: 'UI/UX Design', summary: 'UI/UX Design refers to the process of designing user interfaces and user experiences for software applications.' },
];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const fadeInProps = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(20px)' },
    delay: 300,
  });

  const handleDoubleClick = (skill) => {
    setSelectedSkill(skill);
  };

  const closeSummary = () => {
    setSelectedSkill(null);
  };

  return (
    <animated.div className="skills-container" style={fadeInProps}>
      <h2 className="skills-title">Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <animated.li
            key={index}
            className="skill-item"
            onDoubleClick={() => handleDoubleClick(skill)}
          >
            {skill.name}
            <div className="tooltip">Double click to know more</div>
          </animated.li>
        ))}
      </ul>
      {selectedSkill && (
        <>
          <div className="skill-summary-overlay" onClick={closeSummary}></div>
          <div className="skill-summary-modal">
            <h3>{selectedSkill.name}</h3>
            <p>{selectedSkill.summary}</p>
            <button onClick={closeSummary}>Close</button>
          </div>
        </>
      )}
    </animated.div>
  );
};

export default Skills;
