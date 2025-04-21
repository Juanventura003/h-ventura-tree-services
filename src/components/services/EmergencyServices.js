import React from 'react';
import { Link } from 'react-router-dom';
import './ServicePage.css';

function EmergencyServices() {
  return (
    <div className="service-page">
      <h1>Emergency Services</h1>
      <p>
        Downed trees? Storm damage? We’re available 24/7 for emergency calls across Mississippi and Louisiana.
      </p>
      <p>
        Contact us for immediate response to secure your property and begin cleanup fast.
      </p>
      <Link to="/contact-us" className="cta-button">Request Help</Link>
    </div>
  );
}

export default EmergencyServices;
