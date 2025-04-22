import React, { useState } from 'react';
import axios from 'axios';
import { FiMail, FiPhone, FiMapPin, FiSend, FiAlertCircle, FiCheckCircle } from 'react-icons/fi';
import Navbar from './Navbar';
import Footer from './Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'All Subjects',
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

    // Client-side validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fill all required fields'
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await axios.post('/api/send-email', formData);
      
      if (response.data.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! We will get back to you soon.'
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: 'All Subjects',
          message: ''
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: response.data.message || 'Failed to send message'
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: error.response?.data?.message || 
                'Network error occurred. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
      // Clear status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Contact Us
            </h1>
            <p className="mt-3 text-xl text-gray-500">
              Have questions? We're here to help!
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="md:flex">
              {/* Contact Information */}
              <div className="md:w-1/3 bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white">
                <div className="mb-8">
                  <img 
                    src="/images/logo2.png" 
                    alt="Gyrus NEET Logo" 
                    className="h-12 mb-4"
                  />
                  <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                  <p className="opacity-90">
                    Fill out the form or contact us directly using the information below.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <FiPhone className="h-5 w-5" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium">Phone</h3>
                      <a href="tel:+91-8248362483" className="text-blue-100 hover:text-white">
                        +91-8248362483
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <FiMail className="h-5 w-5" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium">Email</h3>
                      <a href="mailto:support@gyrusneet.com" className="text-blue-100 hover:text-white">
                        support@gyrusneet.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <FiMapPin className="h-5 w-5" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium">Address</h3>
                      <address className="not-italic text-blue-100">
                        SRI AUROBINDO INFOTECH<br />
                        No.8 & 9, First Floor<br />
                        Dhanalakshmi Street, Rathna Nagar Extension<br />
                        Thattanchavady, Pondicherry - 605009<br />
                        India
                      </address>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="md:w-2/3 p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h2>
                
                {submitStatus && (
                  <div className={`mb-6 p-4 rounded-md ${submitStatus.type === 'success' 
                    ? 'bg-green-50 text-green-800' 
                    : 'bg-red-50 text-red-800'}`}>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        {submitStatus.type === 'success' ? (
                          <FiCheckCircle className="h-5 w-5" />
                        ) : (
                          <FiAlertCircle className="h-5 w-5" />
                        )}
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">{submitStatus.message}</p>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="All Subjects">All Subjects</option>
                      <option value="Physics">Physics</option>
                      <option value="Chemistry">Chemistry</option>
                      <option value="Botany">Botany</option>
                      <option value="Zoology">Zoology</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <FiSend className="-ml-1 mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;