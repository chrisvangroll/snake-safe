import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import LanguageToggle from "../language toggle/LanguageToggle";
import Content from "../../../../content/headerAndFooter.json"
import { useSelector } from 'react-redux';
import "./header.css";

const Header = () => {
  const router = useRouter();
  const currentPage = (str) =>
    router.asPath.includes(str) ? "current-page" : "";

  const [menuOpen, setMenuOpen] = useState(false);
  const { english, spanish } = Content;
  const language = useSelector((state) => state.language.language);
  const [lang, setLang] = useState(english);

  useEffect(()=>{
    language === "en"? setLang(english) : setLang(spanish)
  }, [language])


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header-nav-next">
      <Link href="/" className="logo">
      <span style={{textTransform: "uppercase"}}>{lang.company}</span>. <span>{lang.motto}</span>
      </Link>
      <nav className={`nav-links  ${menuOpen ? "active" : ""}`}>
        <LanguageToggle />
        <Link className={currentPage("about")} href="/about">
          {lang.links.about}
        </Link>
        <Link className={currentPage("services")} href="/services">
          {lang.links.services}
        </Link>
        <Link className={currentPage("contact")} href="/contact">
          {lang.links.contact}
        </Link>
      </nav>
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
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
