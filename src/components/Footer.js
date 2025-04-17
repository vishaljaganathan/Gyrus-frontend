import React from 'react';
import './styles.css';

const Footer = () => {
  return (
    <footer className="footer-section">
        
      <div className="footer-gradient">
        <a href="/privacypolicy" className="footer-link"> Privacy Policy </a>
        <span>|</span>
        <a href="/termsandconditions" className="footer-link"> Terms & Conditions </a>
        <span>|</span>
        <a href="/refundpolicy" className="footer-link"> Refund Policy </a>
        <span>|</span>
        <a href="/shippingpolicy" className="footer-link"> Shipping Policy </a>
      </div>
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/images/sai-logo.png" alt="SAI Logo" />
        </div>
        <div className="footer-copyright">
          Copyright © Sri Aurobindo Infotech
        </div>
      </div>
    </footer>
  );
};

export default Footer;