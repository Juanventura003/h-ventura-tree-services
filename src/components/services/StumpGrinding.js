import React from 'react';
import { Link } from 'react-router-dom';
import './ServicePage.css';

function StumpGrinding() {
  return (
    <div className="service-page">
      <h1>Stump Grinding</h1>
      <p>
        Leftover stumps can be hazardous and unsightly. We grind stumps down below the surface so you can reclaim your yard.
      </p>
      <p>
        Fast, clean removal with minimal disruption to your landscaping.
      </p>
      <Link to="/contact-us" className="cta-button">Request a Free Estimate</Link>
    </div>
  );
}

export default StumpGrinding;
