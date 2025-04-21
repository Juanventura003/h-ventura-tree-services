import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import '../App.css';

function Services() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 100);
  }, []);

  const services = [
    {
      title: 'Tree Trimming',
      description: 'Keep your trees healthy and looking great with precision trimming and pruning.',
      path: '/services/tree-trimming',
    },
    {
      title: 'Tree Removal',
      description: 'We remove dead, damaged, or dangerous trees safely and efficiently.',
      path: '/services/tree-removal',
    },
    {
      title: 'Stump Grinding',
      description: 'Say goodbye to unwanted stumps — we grind them below surface level for a clean finish.',
      path: '/services/stump-grinding',
    },
    {
      title: 'Emergency Services',
      description: 'Storm damage? Fallen limbs? We’re available 24/7 for emergency calls.',
      path: '/services/emergency-services',
    },
    {
      title: 'Land Clearing',
      description: 'Preparing for a new project? We clear out trees and brush fast and professionally.',
      path: '/services/land-clearing',
    },
    {
      title: 'Tree Health Evaluation',
      description: 'Not sure if a tree is safe? We’ll inspect and give you a risk and health assessment.',
      path: '/services/tree-health-eval',
    },
    {
      title: 'Landscaping',
      description: 'Boost your curb appeal with full-service landscaping: mulch, sod, planting, and more.',
      path: '/services/landscaping',
    },
  ];

  return (
    <div className={`services-container ${fadeIn ? 'fade-in' : ''}`}>
      <section
        className="services-hero"
        style={{ backgroundImage: "url('/images/services-hero.jpg')" }}
      >
        <div className="hero-overlay">
          <h1>Professional Tree & Landscaping Services</h1>
          <p>Serving Mississippi and Louisiana with expert care, honest work, and clean finishes.</p>
        </div>
      </section>

      <section className="services-main">
        <p className="services-intro">
          We offer a full range of residential and commercial tree services across Mississippi and Louisiana. Whether it’s routine care or an emergency, we’re ready to help.
        </p>

        <div className="wave-divider"></div>

        <div className="cards">
          {services.map((service, index) => (
            <div className="card fancy" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="icon glowing-icon">{service.icon}</div>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <Link to={service.path} className="cta-button outline">Learn More</Link>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <a href="/contact-us" className="cta-button pulse">Request a Free Estimate</a>
        </div>
      </section>
    </div>
  );
}

export default Services;
