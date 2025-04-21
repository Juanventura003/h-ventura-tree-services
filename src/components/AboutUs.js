import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';

const AboutUs = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 100);
  }, []);

  return (
    <div className={`about-page ${fadeIn ? 'fade-in' : ''}`}>
      <header
        className="hero"
        style={{ backgroundImage: "url('/images/about-hero.jpg')" }}
      >
        <div className="overlay">
          <h1>Meet H-Ventura Tree Services</h1>
          <p>Where experience meets dedication—and every branch matters.</p>
        </div>
      </header>

      <section className="about-section intro">
        <h2>Our Roots Run Deep</h2>
        <p>
          H-Ventura Tree Services LLC is more than just a tree cutting business—
          it’s a locally grown, family-operated company founded on trust, hard work, and a love for the outdoors.
          Based in the heart of Picayune, Mississippi, we’ve proudly served homeowners and businesses across Mississippi and Louisiana for years.
        </p>
        <p>
          From small backyard cleanups to major storm damage removals, we approach every job with care,
          professionalism, and the goal of leaving your property cleaner and safer than we found it.
        </p>
      </section>

      <section className="about-section highlight">
        <h2>Our Service Area</h2>
        <p>
          Whether you’re in a quiet Mississippi neighborhood or out near the Louisiana line,
          we’ve got you covered. We operate within a 150-mile radius of Picayune,
          stretching into Louisiana cities like Slidell, Covington, and Mandeville.
        </p>
        <div className="tagline-box">
          <p className="tagline">No job too far. No tree too tall.</p>
        </div>
      </section>

      <section className="about-section mission">
        <h2>What We Stand For</h2>
        <ul>
          <li><strong>Local & Reliable:</strong> We’re your neighbors. We show up on time and treat your property like it’s our own.</li>
          <li><strong>Experienced Crews:</strong> Our team is trained, certified, and knows how to work smart and safe.</li>
          <li><strong>Honest Pricing:</strong> No hidden fees. Just fair, upfront estimates and clear communication.</li>
          <li><strong>Community Focused:</strong> We support local businesses, events, and believe in giving back where we can.</li>
        </ul>
      </section>

      <section className="about-section final">
        <h2>Let’s Grow Together</h2>
        <p>
          Whether it’s clearing space for something new or preserving what you already have,
          H-Ventura Tree Services is here to help you shape a safer, more beautiful outdoor space.
        </p>
        <Link to="/contact-us" className="cta-button">Get a Free Estimate</Link>
      </section>

      <footer className="about-footer">
        <p>&copy; {new Date().getFullYear()} H-Ventura Tree Services LLC</p>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact-us" className="cta-button">Get a Free Estimate</Link>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
