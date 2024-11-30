import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import './header.css';

const Header = () => {
  const router = useRouter()
  const currentPage = (str) => router.asPath.includes(str) ? "current-page": ""
  
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header-nav-next">
      <Link href="/" className="logo">SNAKE-SAFE. Real Science. Real Safety.</Link>
      <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <Link className={currentPage('about')} href="/about">About</Link>
        <Link className={currentPage('services')}href="/services">Services</Link>
        <Link className={currentPage('contact')} href="/contact">Contact</Link>
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
