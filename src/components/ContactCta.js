import React from 'react';
import { Link } from 'react-router-dom';
import './ContactCta.css';
import contactImage from '../images/construction-flame.jpg';

function ContactCta() {
  return (
    <section className="contact-cta">
      <div className="contact-cta-inner">
        <div className="contact-cta-card">
          <div className="contact-cta-image-wrap">
            <img
              src={contactImage}
              alt="Construction site"
              className="contact-cta-image"
            />
            <div className="contact-cta-dots" aria-hidden="true" />
          </div>
          <div className="contact-cta-content">
            <span className="contact-cta-eyebrow">Let’s Talk</span>
            <h2 className="contact-cta-title">Ready to start your next project?</h2>
            <p className="contact-cta-text">
              Speak with our engineering team about tailored solutions, timelines,
              and how we can support your build from concept to completion.
            </p>
            <Link to="/contact" className="contact-cta-button">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCta;
