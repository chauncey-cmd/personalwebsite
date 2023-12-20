// Contact.js
import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic here to handle form submission, e.g., send data to the server
    console.log('Form submitted:', formData);

    // Update state to show the "Thank you" message
    setSubmitted(true);
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      {submitted ? (
        <p>Thank you for the submission!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
          <label>
            Message:
            <textarea name="message" value={formData.message} onChange={handleChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </section>
  );
}

export default Contact;
