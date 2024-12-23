import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Information */}
        <div className="footer-section">
          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <span>info@ihsindustries.com</span>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
            <span>1234 Industrial Ave, Suite 100, City, Country</span>
          </div>
        </div>

        <div className="footer-section">
            <Link to="/" className="company-link">
                <div className="company-name">
                    <img src="logo192.png" alt="Company Logo" className="company-logo" />
                    <span>IHS ENGINEERING</span>
                </div>
            </Link>
            <ul className="footer-nav">
                <li><a href="/">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact-us">Contact Us</a></li>
            </ul>
        </div>

        <div className="footer-section">
          <div className="opening-hours">
            <FontAwesomeIcon icon={faClock} className="contact-icon" />
            <span>Mon - Fri: 9:00 AM - 5:00 PM</span>
          </div>
          <div className="footer-copyright">
            <span>&copy; {new Date().getFullYear()} IHS ENGINEERING </span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;

