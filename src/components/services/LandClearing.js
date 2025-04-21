import React from 'react';
import { Link } from 'react-router-dom';
import './ServicePage.css';

function LandClearing() {
  return (
    <div className="service-page">
      <h1>Land Clearing</h1>
      <p>
        Preparing land for construction, landscaping, or farming? We clear brush, trees, and debris efficiently and professionally.
      </p>
      <p>
        Let’s get your site ready to build or plant on — with full cleanup included.
      </p>
      <Link to="/contact-us" className="cta-button">Request a Free Estimate</Link>
    </div>
  );
}

export default LandClearing;
