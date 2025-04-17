import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import './assets/css/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'All Subjects', // Default value for the dropdown
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await axios.post('http://localhost:5000/send-email', formData);

      if (response.data.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: 'All Subjects', // Reset to default value
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <>
      <Navbar />
      <div className="contact-page">
        <div className="contact-container">
          {/* Contact Information Section */}
          <div className="contact-info">
            <img 
              src="/images/logo2.png" 
              alt="Gyrus NEET Logo" 
              className="logoImage"
            />
            <h1>Contact Information</h1>
            
            <div className="contact-detail">
              <h3>Phone Number</h3>
              <p>📞 <a href="tel:+91-8248362483">+91-8248362483</a></p>
            </div>
            
            <div className="contact-detail">
              <h3>Email Address</h3>
              <p>✉️ <a href="mailto:support@gyrusneet.com">support@gyrusneet.com</a></p>
            </div>
            
            <div className="contact-detail">
              <h3>Our Location</h3>
              <address>📍 <a href="https://maps.app.goo.gl/9X8pr1fnijdh2v7o7">
                SRI AUROBINDO INFOTECH<br />
                No.8 & 9, First Floor,<br />
                Dhanalakshmi Street, Rathna Nagar Extension,<br />
                Thattanchavady, Pondicherry - 605009<br />
                India
                </a>
              </address>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="contact-form">
            <h1>Send Us a Message</h1>
            <p className="subtitle">We'll get back to you within 24 hours</p>
            
            {submitStatus === 'success' && (
              <div className="alert success">
                Message sent successfully!
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="alert error">
                Failed to send message. Please try again.
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="All Subjects">All Subjects</option>
                  <option value="Physics">Physics</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="Botany">Botany</option>
                  <option value="Zoology">Zoology</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;

