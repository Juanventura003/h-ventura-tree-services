import React from 'react';
import { Link } from 'react-router-dom';
import './ServicePage.css';

function Landscaping() {
  return (
    <div className="service-page">
      <h1>Landscaping</h1>
      <p>
        Need mulch, sod, decorative stone, or a full yard makeover? We design and install landscaping that lasts.
      </p>
      <p>
        Improve curb appeal, prevent erosion, and make your yard your favorite place to be.
      </p>
      <Link to="/contact-us" className="cta-button">Get a Landscaping Quote</Link>
    </div>
  );
}

export default Landscaping;
