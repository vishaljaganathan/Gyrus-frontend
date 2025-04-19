import React from 'react';
import './footer.css';

const Footer = () => (
  <footer className="footer-section">
    {/* Policy Links Bar */}
    <div className="footer-gradient">
      <a href="/privacypolicy" className="footer-link">Privacy Policy</a>
      <span>|</span>
      <a href="/termsandconditions" className="footer-link">Terms & Conditions</a>
      <span>|</span>
      <a href="/refundpolicy" className="footer-link">Refund Policy</a>
      <span>|</span>
      <a href="/shippingpolicy" className="footer-link">Shipping Policy</a>
    </div>

    {/* Footer Content */}
    <div className="footer-content">
      <div className="footer-logo">
        <img src="/images/sai-logo.png" alt="SAI Logo" />
      </div>
      <div className="footer-copyright">
        © 2025 - Sri Aurobindo Infotech
      </div>
    </div>
  </footer>
);

export default Footer;
