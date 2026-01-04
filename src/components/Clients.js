import React from 'react';
import './Clients.css';
import bhpLogo from '../images/bhp-logo.png';
import johnHollandLogo from '../images/john-holland-logo.png';
import developmentVicLogo from '../images/development-vic-logo.png';
import dpWorldLogo from '../images/dp-world.png';

const clients = [
  { src: bhpLogo, alt: 'BHP' },
  { src: johnHollandLogo, alt: 'John Holland' },
  { src: developmentVicLogo, alt: 'Development Victoria' },
  { src: dpWorldLogo, alt: 'DP World' },
  { src: bhpLogo, alt: 'BHP' },
  { src: johnHollandLogo, alt: 'John Holland' },
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
              <img
                src={client.src}
                alt={`${client.alt} Logo`}
                className="client-logo"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Clients;
