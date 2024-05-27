import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi'; // Example icon from react-icons
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        Contact Me
      </motion.h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <motion.div
          className="form-group"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </motion.div>
        <motion.div
          className="form-group"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </motion.div>
        <motion.div
          className="form-group"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <label htmlFor="message">Message:</label>
          <textarea 
            id="message" 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
          />
        </motion.div>
        <motion.button
          type="submit"
          className="submit-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiSend className="send-icon" /> Submit
        </motion.button>
      </form>
    </motion.div>
  );
};

export default Contact;
