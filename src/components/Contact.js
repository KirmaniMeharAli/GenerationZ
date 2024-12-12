// src/components/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out to us!</p>
      <div className="contact-info">
        <h2>Email</h2>
        <p><a href="mailto:meharalicad@gmail.com">meharalicad@gmail.com</a></p>
        <h2>Phone</h2>
        <p><a href="tel:+16729756719">+1 672-975-6719</a></p>
      </div>
    </div>
  );
};

export default Contact;
