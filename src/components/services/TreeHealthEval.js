import React from 'react';
import { Link } from 'react-router-dom';
import './ServicePage.css';

function TreeHealthEval() {
  return (
    <div className="service-page">
      <h1>Tree Health Evaluation</h1>
      <p>
        Concerned about the health or safety of a tree on your property? We provide expert evaluations and honest recommendations.
      </p>
      <p>
        Avoid unnecessary removals or catch a problem before it becomes dangerous.
      </p>
      <Link to="/contact-us" className="cta-button">Schedule an Evaluation</Link>
    </div>
  );
}

export default TreeHealthEval;
