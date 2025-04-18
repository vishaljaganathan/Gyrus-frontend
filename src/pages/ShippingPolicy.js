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
          Gyrusneet.com primarily operates as an e-learning service and does not have a traditional shipping policy since it doesn’t sell physical products.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShippingPolicy;