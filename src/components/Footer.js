import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/white-bg.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* CONTACT INFO */}
        <div className="footer-section">
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <span>info@ihsengineeringco.com.au</span>
          </div>

          <div className="contact-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
            <span>Melbourne, Australia</span>
          </div>

          <div className="contact-item contact-abn">
            <span>ABN: 34 683 245 918</span>
          </div>

        </div>

        {/* BRAND + NAV */}
        <div className="footer-section">
          <Link to="/" className="company-link">
            <div className="company-name">
              <img src={logo} alt="Company Logo" className="company-logo" />
              <span>IHS ENGINEERING CO</span>
            </div>
          </Link>

          <ul className="footer-nav">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* HOURS + COPYRIGHT */}
        <div className="footer-section">
          <div className="opening-hours">
            <FontAwesomeIcon icon={faClock} className="contact-icon" />
            <span>Mon - Sun: 8:00 AM - 5:30 PM</span>
          </div>

          <div className="footer-copyright">
            <span>© {new Date().getFullYear()} IHS ENGINEERING CO</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
