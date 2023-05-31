import React, { useState, useEffect } from "react";
import "../navbar/navbar.css";
import AvvicLogo1 from "../../assests/images/AvvicLogo-1.png";

const Navbar = () => {
  // FUNCTION FOR HAMBURGER MENU (RESPONSIVE NAV BAR)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  // FUNCTION TO ADJUST THE BACKGROUND COLOR ON SCROLL
  const [scrollBackground, setScrollBackground] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 750; // Change this value to adjust when the background color changes

      if (scrollPosition > threshold) {
        setScrollBackground(true);
      } else {
        setScrollBackground(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={scrollBackground ? "navbar--scrolled" : "navbar"}>
      <div className="navbar-logo">
        <a href="/">
          <img
            src={AvvicLogo1}
            className="navbar-logo"
            alt="Avvic navbar logo"
          ></img>
        </a>
      </div>

      <div className={`navbar-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <button className="nav-btn">
              <a href="#footer-container">Get Notified</a>
            </button>
          </li>
        </ul>
      </div>

      <div className="navbar-mobile-toggle" onClick={toggleMobileMenu}>
        <i className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"}`}></i>
      </div>
    </nav>
  );
};

export default Navbar;
