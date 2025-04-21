import React, { useEffect, useState } from 'react';
import './Home.css';
import '../App.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 100);
  }, []);

  return (
    <div className={`home ${fadeIn ? 'fade-in' : ''}`}>
      <header
        className="hero"
        style={{ backgroundImage: "url('/images/tree-cutting.png.jpg')" }}
      >
        <div className="overlay">
          <h1>Welcome to H-Ventura Tree Services LLC</h1>
          <p>Your trusted partner for professional tree care</p>
          <Link to="/services" className="cta-button">Explore Our Services</Link>
        </div>
      </header>

      <section className="intro-section">
        <h2>Why Choose Us?</h2>
        <p>
          At H-Ventura Tree Services LLC, we provide safe, efficient, and affordable tree care.
          Whether it's tree trimming, removal, or emergency services, we've got you covered.
        </p>
      </section>

      <section className="highlight-section">
        <div className="highlight">
          <h3>Experienced Team</h3>
          <p>Years of hands-on experience with all kinds of trees and terrain.</p>
        </div>
        <div className="highlight">
          <h3>Top-Notch Equipment</h3>
          <p>Modern tools and machinery to get the job done right.</p>
        </div>
        <div className="highlight">
          <h3>Customer First</h3>
          <p>Your satisfaction is our number one priority every time.</p>
        </div>
      </section>

      <section className="cta-section">
        <h2>Need Help With a Tree Project?</h2>
        <p>We're available for emergency services, routine maintenance, and full land clearing jobs.</p>
        <Link to="/contact-us" className="cta-button pulse">Request a Free Estimate</Link>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} H-Ventura Tree Services LLC. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/about-us">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact-us">Contact</Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;
