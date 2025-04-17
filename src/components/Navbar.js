import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Countdown from './Countdown';
import './styles.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to track menu visibility

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu state
  };

  const closeMenu = () => {
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo-section">
        <img src="/images/logo2.png" alt="Gyrus Logo" className="logo-image" />
        <div className="logo-text">
          <div className="logo">Gyrus</div>
          <div className="tagline">Your NEET Prep App</div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button className="mobile-menu-btn" onClick={toggleMenu}>
        ☰
      </button>

      {/* Navigation Links */}
      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
        <Link to="/plans" className="nav-link" onClick={closeMenu}>Plans</Link>
        <Link to="/support" className="nav-link" onClick={closeMenu}>Support</Link>
        <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact Us</Link>
      </div>

      <div className="navbar-countdown">
        <Countdown />
      </div>
    </nav>
  );
};

export default Navbar;