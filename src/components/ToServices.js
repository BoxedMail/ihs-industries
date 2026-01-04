import React from 'react';
import { Link } from 'react-router-dom';
import './ToServices.css';

function ToServices() {
  return (
    <section className="services-highlight">
      <div className="services-inner">

        <div className="services-content">
          <span className="services-eyebrow">Capabilities</span>

          <h2 className="services-title">
            What We Offer
          </h2>

          <p className="services-description">
            We are leading pre-fabrication and pre-cast specialists in Victoria,
            delivering robust, innovative solutions to complex engineering and
            construction challenges.
          </p>

          <Link to="/services" className="services-cta">
            Explore Our Services
          </Link>
        </div>

      </div>
    </section>
  );
}

export default ToServices;
