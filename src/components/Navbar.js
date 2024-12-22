import React, {useState} from 'react';
import logo from '../images/logo.jpg';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const [click, setClick] =useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
              <Link to="/" className='navbar-logo'>
                IHS ENGINEERING
              </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>

              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>

              <li className='nav-item'>
                <Link to='about' className='nav-links' onClick={closeMobileMenu}>
                  About
                </Link>
              </li>
              
              <li className='nav-item'>
                <Link to='services' className='nav-links' onClick={closeMobileMenu}>
                  Services
                </Link>
              </li>

              <li className='nav-item'>
                <Link to='contact-us' className='nav-links' onClick={closeMobileMenu}>
                  Contact Us
                </Link>
              </li>
        
            </ul>
          </div>  
        </nav>
    </>
  );
}

export default Navbar;
