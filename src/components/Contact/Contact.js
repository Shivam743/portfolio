import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const form = new FormData();
    form.append('entry.Name', formData.Name); // Replace with actual field entry for 'Name'
    form.append('entry.Email', formData.Email); // Replace with actual field entry for 'Email'
    form.append('entry.Message', formData.Message); // Replace with actual field entry for 'Message'

    try {
      await fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLScoJc6E0VxFqpqfQwtU0-6YE9X2r6Q1ZAYVA-hIZ08qwlQ0wg/formResponse', {
        method: 'POST',
        body: form,
        mode: 'no-cors'
      });
      setStatus('Message sent!');
    } catch (error) {
      setStatus('Failed to send message.');
    }

    setFormData({
      Name: '',
      Email: '',
      Message: ''
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
          <label htmlFor="Name">Name:</label>
          <input 
            type="text" 
            id="Name" 
            name="Name" 
            value={formData.Name} 
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
          <label htmlFor="Email">Email:</label>
          <input 
            type="email" 
            id="Email" 
            name="Email" 
            value={formData.Email} 
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
          <label htmlFor="Message">Message:</label>
          <textarea 
            id="Message" 
            name="Message" 
            value={formData.Message} 
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
          Submit
        </motion.button>
      </form>
      {status && <p className="form-status">{status}</p>}
    </motion.div>
  );
};

export default Contact;
