import React from 'react';
import { Link } from 'react-router-dom';
import './ServicePage.css';

function TreeTrimming() {
  return (
    <div className="service-page">
      <h1>Tree Trimming</h1>
      <p>
        Keep your trees looking beautiful and healthy. Our trimming services promote better growth, reduce hazards, and improve curb appeal.
      </p>
      <p>
        We remove dead limbs, shape trees, and provide seasonal maintenance tailored to your landscape.
      </p>
      <Link to="/contact-us" className="cta-button">Request a Free Estimate</Link>
    </div>
  );
}

export default TreeTrimming;
