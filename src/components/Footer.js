import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/white-bg.png';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Information */}
        <div className="footer-section">
          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            <span>+61 451 779 644</span>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <span>info@ihsengineeringco.com.au</span>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
            <span>
                {/* 1234 Industrial Ave, Suite 100<br /> */}
                Melbourne, Australia
            </span>
          </div>
        </div>

        <div className="footer-section">
            <Link to="/" className="company-link">
                <div className="company-name">
                    <img src={logo} alt="Company Logo" className="company-logo" />
                    <span>IHS ENGINEERING CO</span>
                </div>
            </Link>
            <ul className="footer-nav">
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>

        <div className="footer-section">
          <div className="opening-hours">
            <FontAwesomeIcon icon={faClock} className="contact-icon" />
            <span>Mon - Sun: 8:00 AM - 5:30 PM</span>
          </div>
          <div className="footer-copyright">
            <span>&copy; {new Date().getFullYear()} IHS ENGINEERING CO </span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;

