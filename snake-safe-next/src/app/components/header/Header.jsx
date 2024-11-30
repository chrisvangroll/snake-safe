import React, { useState } from 'react';
import Link from 'next/link';
import './header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header-nav-next">
      <Link href="/" className="logo">SNAKE-SAFE. Real Science. Real Safety.</Link>
      <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
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
