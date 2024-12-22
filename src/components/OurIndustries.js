import React from 'react';
import './OurIndustries.css';

function OurIndustries() {
  return (
    <div className="industries-container">
      <h2>Our <span className="highlight">Industries</span></h2>
      <div className="industries-grid">
        <div className="industry-item">
          <i className="fas fa-hard-hat industry-icon"></i>
          <p>Construction</p>
        </div>
        <div className="industry-item">
          <i className="fas fa-archway industry-icon"></i>
          <p>Tunneling</p>
        </div>
        <div className="industry-item">
          <i className="fas fa-shield-alt industry-icon"></i>
          <p>Defence</p>
        </div>
        <div className="industry-item">
          <i className="fas fa-building industry-icon"></i>
          <p>Buildings</p>
        </div>
      </div>
    </div>
  );
}

export default OurIndustries;

