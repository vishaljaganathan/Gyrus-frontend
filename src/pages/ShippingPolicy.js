import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './assets/css/policy.css';

const ShippingPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="privacy-policy-container">
        <h1>Shipping Policy</h1>
        <div className="privacy-content">
          <p>
            Gyrusneet.com primarily operates as an e-learning service and does not have a traditional shipping policy 
            since it doesn't sell physical products. All our educational content and services are delivered digitally 
            through our online platform. Upon successful subscription/payment, you will gain immediate access to:
          </p>
          
          <ol>
            <li>Digital course materials</li>
            <li>Online learning resources</li>
            <li>Virtual classroom features</li>
            <li>Electronic study tools</li>
          </ol>

          <p>
            No physical shipments or deliveries are involved in our services. For any questions regarding access to 
            our digital content, please contact our support team at 
            <a href="mailto:support@gyrusneet.com">support@gyrusneet.com</a>.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShippingPolicy;