import React from 'react';
import { Link } from 'react-router-dom';
import './ToServices.css';

function ToServices() {
  return (
    <div className="to-services">
      <div className="overlay">
        <h2 className="title">What We Offer</h2>
        <p className="description">
          Leading pre-fabrication and pre-cast specialists in Victoria, we excel in delivering innovative solutions to complex technical challenges.
        </p>
        <Link to="/services" className="cta-button">
          Explore Services
        </Link>
      </div>
    </div>
  );
}

export default ToServices;
