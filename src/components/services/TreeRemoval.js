import React from 'react';
import { Link } from 'react-router-dom';
import './ServicePage.css';

function TreeRemoval() {
  return (
    <div className="service-page">
      <h1>Tree Removal</h1>
      <p>
        Whether it's a hazardous tree, storm damage, or clearing space for new projects, we remove trees quickly and safely with minimal impact to your property.
      </p>
      <p>
        Our experienced crew uses professional equipment to ensure every job is done with precision and care.
      </p>
      <Link to="/contact-us" className="cta-button">Request a Free Estimate</Link>
    </div>
  );
}

export default TreeRemoval;
