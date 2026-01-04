import React from 'react';
import './Clients.css';
import bhpLogo from '../images/bhp-logo.png';
import johnHollandLogo from '../images/john-holland-logo.png';
import developmentVicLogo from '../images/development-vic-logo.png';
import dpWorldLogo from '../images/dp-world.png';

function Clients() {
  return (
    <section className="clients-section">
      <div className="clients-container">
        <div className="clients-text">
          <h2 className="clients-title">
            <span>Our</span> Clients
          </h2>
          <p className="clients-subtitle">
            Proud to have worked with industry leaders
          </p>
        </div>
        <div className="clients-logos">
            <div className="logo-row">
                <div className="logo-cell"><img src={bhpLogo} alt="BHP Logo" className="client-logo" /></div>
                <div className="logo-cell"><img src={johnHollandLogo} alt="John Holland Logo" className="client-logo" /></div>
                <div className="logo-cell"><img src={developmentVicLogo} alt="Development Victoria Logo" className="client-logo" /></div>
            </div>
            <div className="logo-row">
                <div className="logo-cell"><img src={dpWorldLogo} alt="DP World Logo" className="client-logo" /></div>
                <div className="logo-cell"><img src={bhpLogo} alt="BHP Logo" className="client-logo" /></div>
                <div className="logo-cell"><img src={johnHollandLogo} alt="John Holland Logo" className="client-logo" /></div>
            </div>
        </div>

      </div>
    </section>
  );
}

export default Clients;
