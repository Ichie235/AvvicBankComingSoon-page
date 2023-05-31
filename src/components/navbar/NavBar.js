import React, { useState } from 'react';
import '../navbar/navbar.css'
import AvvicLogo1 from "../../assests/images/AvvicLogo-1.png"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href='/'>
        <img src={AvvicLogo1} className="navbar-logo" alt='Avvic navbar logo'></img>
        </a>
      </div>

      <div className={`navbar-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="navbar-nav">
          <li className="nav-item"><a href="/">Home</a></li>
          <li className="nav-item">
            <button className='nav-btn'>
            <a href="#footer-container">Get Notified</a>
            </button>
            </li>
        </ul>
      </div>

      <div className="navbar-mobile-toggle" onClick={toggleMobileMenu}>
        <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
    </nav>
  );
};

export default Navbar;
