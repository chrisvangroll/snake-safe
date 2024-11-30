import React, { useState } from 'react';
import './header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header-nav-next">
      <div className="logo">SNAKE-SAFE. Real Science. Real Safety.</div>
      <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <a href="#home">About</a>
        <a href="#about">Services</a>
        <a href="#contact">Contact</a>
      </nav>
      <div
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <span className="bar-next"></span>
        <span className="bar-next"></span>
        <span className="bar-next"></span>
      </div>
    </header>
  );
};

export default Header;
