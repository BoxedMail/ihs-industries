import React from 'react';
import './Logo.css';
import logo from '../images/ihs-transparent.png';

function Logo() {
  return (
    <div className="logo-container">
      <div className="background-overlay">
        <img src={logo} alt="IHS Engineering Logo" className="logo-image" />
        <h1 className="comp-name">IHS ENGINEERING CO</h1>
      </div>
    </div>
  );
}

export default Logo;
