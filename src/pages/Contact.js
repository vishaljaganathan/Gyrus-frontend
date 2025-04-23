import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './assets/css/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'All Subjects',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill out all required fields.');
      setIsSubmitting(false);
      return;
    }

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      };

      const response = await emailjs.send(
        'YOUR_SERVICE_ID',      // ← Replace this
        'YOUR_TEMPLATE_ID',     // ← Replace this
        templateParams,
        'YOUR_PUBLIC_KEY'       // ← Replace this
      );

      console.log('SUCCESS!', response.status, response.text);
      toast.success('Message sent successfully!');

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'All Subjects',
        message: ''
      });
    } catch (error) {
      console.error('FAILED...', error);
      toast.error('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
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
              <i className="fa-solid fa-phone" style={{ color: "#009150", marginRight: 8 }}></i>
              <a href="tel:+91-8248362483">+91-8248362483</a>
            </div>
            
            <div className="contact-detail">
              <h3>Email Address</h3>
              <i className="fa-solid fa-envelope" style={{ color: "#0074D9", marginRight: 8 }}></i>
              <a href="mailto:support@gyrusneet.com">support@gyrusneet.com</a>
            </div>
            
            <div className="contact-detail">
              <h3>Our Location</h3>
              <i className="fa-solid fa-location-dot" style={{ color: "#009150", marginRight: 8 }}></i>
              <address style={{ display: "inline" }}>
                <a href="https://maps.app.goo.gl/9X8pr1fnijdh2v7o7" target="_blank" rel="noopener noreferrer">
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
                {isSubmitting ? (
                  <span className="loader"></span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Toast notification container */}
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={true} closeOnClick />

      <Footer />
    </>
  );
};

export default Contact;
