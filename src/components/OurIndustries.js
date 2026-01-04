import React from 'react';
import './OurIndustries.css';

const industries = [
  {
    title: 'Construction',
    icon: 'fa-solid fa-helmet-safety',
    description: 'Major civil and commercial construction projects'
  },
  {
    title: 'Tunnelling',
    icon: 'fa-solid fa-road',
    description: 'Underground works and complex tunnel systems'
  },
  {
    title: 'Defence',
    icon: 'fa-solid fa-shield-halved',
    description: 'Secure infrastructure and defence environments'
  },
  {
    title: 'Buildings',
    icon: 'fa-solid fa-building',
    description: 'Public, commercial, and mixed-use developments'
  }
];

function OurIndustries() {
  return (
    <section className="industries-section">
      <div className="industries-container">

        <div className="industries-header">
          <span className="industries-eyebrow">Expertise</span>
          <h2>
            <span>Our</span> Industries
          </h2>
          <p>
            We work across a range of sectors delivering practical,
            high-quality engineering solutions.
          </p>
        </div>

        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div className="industry-card" key={index}>
              <div className="industry-icon-wrapper">
                <i className={industry.icon}></i>
              </div>

              <div className="industry-content">
                <h3>{industry.title}</h3>
                <p>{industry.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default OurIndustries;
