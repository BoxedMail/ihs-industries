import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-container">
      <div className="hero-content">

        <div className="hero-accent" />

        <h1 className="hero-title">
          <span className="hero-line light">Building</span>
          <span className="hero-line bold">a better</span>
          <span className="hero-line light">future</span>
        </h1>

      </div>
    </section>
  );
}

export default HeroSection;
