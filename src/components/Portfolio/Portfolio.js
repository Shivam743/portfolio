import React from 'react';
import { motion } from 'framer-motion';
import './Portfolio.css';

const projects = [
  {
    id: 1,
    name: 'Project 1',
    description: 'Description of Project 1.',
    image: 'project1.jpg'
  },
  {
    id: 2,
    name: 'Project 2',
    description: 'Description of Project 2.',
    image: 'project2.jpg'
  },
  // Add more projects as needed
];

const Portfolio = () => {
  return (
    <motion.div
      className="portfolio-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="portfolio-title">Portfolio</h1>
      <motion.div
        className="project-list"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={project.image} alt={project.name} className="project-image" />
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;
