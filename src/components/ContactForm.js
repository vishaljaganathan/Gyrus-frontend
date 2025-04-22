
import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/send-email', formData);
      if (response.data.success) {
        console.log('Form submitted successfully:', response.data);
        alert('Email sent successfully!');
      } else {
        console.error('Error submitting form:', response.data.error);
        alert('Failed to send email. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send email. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="fullName" className="form-label">
          Full Name
        </label>
        <input
          type="text"
          className="form-control"
          id="fullName"
          name="fullName"
          placeholder="Enter your full name"
          required
          value={formData.fullName}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Phone Number
        </label>
        <input
          type="tel"
          className="form-control"
          id="phone"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="subject" className="form-label">
          Subject
        </label>
        <input
          type="text"
          className="form-control"
          id="subject"
          name="subject"
          placeholder="Enter the subject"
          value={formData.subject}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          className="form-control"
          id="message"
          name="message"
          rows="4"
          placeholder="Enter your message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
