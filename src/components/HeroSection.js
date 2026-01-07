import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection({
  eyebrow,
  titleLines = [],
}) {
  return (
    <section className="hero-section">

      {/* HERO IMAGE AREA */}
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-title-wrapper">

            {eyebrow && (
              <span className="hero-eyebrow">{eyebrow}</span>
            )}

            <div className="hero-accent" />

            <h1 className="hero-title">
              {titleLines.map((line, index) => (
                <span
                  key={index}
                  className={`hero-line ${line.weight || 'bold'}`}
                >
                  {line.text}
                </span>
              ))}
            </h1>

          </div>
        </div>
      </div>

      {/* HERO BOTTOM DIVIDER */}
      <div className="hero-divider" />

    </section>
  );
}

export default HeroSection;
