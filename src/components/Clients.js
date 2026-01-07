import React from 'react';
import './Clients.css';

import johnHollandLogo from '../images/john-holland-logo.png';
import gsecLogo from '../images/gs-e&c-logo.png';
import weBuild from '../images/webuild-logo.png';
import sparkLogo from '../images/spark-logo.png';
import cpbContractors from '../images/cpb-logo.png';
import downer from '../images/downer-logo.png';

const clients = [
  { src: johnHollandLogo, alt: 'John Holland', size: 'medium' },
  { src: sparkLogo, alt: 'Spark North East Link', size: 'medium' },
  { src: gsecLogo, alt: 'GS E&C', size: 'large' },
  { src: weBuild, alt: 'We Build', size: 'large' },
  { src: cpbContractors, alt: 'CPB Contractors', size: 'medium' },
  { src: downer, alt: 'Downer', size: 'medium' },
];

function Clients() {
  return (
    <section className="clients-section">
      <div className="clients-container">

        <div className="clients-text">
          <span className="clients-eyebrow">Trusted By</span>

          <h2 className="clients-title">
            <span>Our</span> Clients
          </h2>

          <p className="clients-subtitle">
            Proud to have partnered with leading organisations across
            infrastructure, engineering, and development.
          </p>
        </div>

        <div className="clients-grid">
          {clients.map((client, index) => (
            <div className="client-card" key={index}>
              <div className={`logo-wrapper ${client.size}`}>
                <img
                  src={client.src}
                  alt={`${client.alt} Logo`}
                  className="client-logo"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Clients;
