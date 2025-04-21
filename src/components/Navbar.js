import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="H-Ventura Tree Services LLC" className="logo" />
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact-us">Contact Us</Link>
      </div>
    </nav>
  );
}

export default Navbar;
