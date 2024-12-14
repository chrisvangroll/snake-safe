import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import LanguageToggle from "../language toggle/LanguageToggle";
import Content from "../../../../content/headerAndFooter.json"
import { useSelector } from 'react-redux';
import "./header.css";
import Head from "next/head";
import Colors from "../../../../content/colors.json";

const Header = () => {
  const router = useRouter();
  const currentPage = (str) =>
    router.asPath.includes(str) ? "current-page" : "";

  const [menuOpen, setMenuOpen] = useState(false);
  const { english, spanish } = Content;
  const language = useSelector((state) => state.language.language);
  const [lang, setLang] = useState(english);

  useEffect(() => {
    language === "en" ? setLang(english) : setLang(spanish)
  }, [language])

  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href); 
    }
  }, []);



  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <base href="" />
        <meta charSet="utf-8" />
        <title>{`${lang.company}-${lang.motto}`}</title>
        <meta
          httpEquiv="Accept-CH"
          content="Sec-CH-UA-Platform-Version, Sec-CH-UA-Model"
        />
        <meta
          property="og:site_name"
          content={`${lang.company}-${lang.motto}`}
        />
        <meta
          property="og:title"
          content={`${lang.company}-${lang.motto}`}
        />
        <meta
          property="og:url"
          content={currentUrl}
        />
        <meta property="og:type" content="website" />
        <meta
          itemProp="name"
          content={`${lang.company}-${lang.motto}`}
        />
        <meta
          itemProp="url"
          content={currentUrl}
        />
        <meta
          name="twitter:title"
          content={`${lang.company}-${lang.motto}`}
        />
        <meta
          name="twitter:url"
          content={currentUrl}
        />
        <link rel="icon" href={lang.favicon} type="image/x-icon"></link>
        <meta name="twitter:card" content="summary" />
        <meta name="description" content={lang.ogDescription} />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;700&family=Nunito+Sans:ital,wght@0,400;0,700;1,400;1,700"
        />
            <style>{`
          * {
            background-color: ${Colors.background};
          }

          .sqs-html-content p {
              color: ${Colors.secondary}
          }
          .sqsrte-text-color--black {
            color: ${Colors.secondary}
          }

           .sqsrte-text-color--black strong {
            color: ${Colors.secondary}
          }

          
            
        `}</style>
        <style>{`
          * {
            background-color: ${Colors.background};
          }

          .sqs-html-content p {
              color: ${Colors.secondary}
          }
          .sqsrte-text-color--black {
            color: ${Colors.secondary}
          }

          .sqsrte-text-color--black strong {
            color: ${Colors.secondary}
          }

          .header-nav-next {
            color: ${Colors.secondary};
          }

          .nav-links a {
            color: ${Colors.secondary};
          }

          .current-page::after {
            background-color: ${Colors.secondary};
          }

          @media (max-width: 767px) {
            .nav-links {
              color: ${Colors.secondary};
            }
          }
          
          .bar-next {
            background-color: ${Colors.secondary};
          }
        `}</style>
      </Head>
      <header className="header-nav-next">
        <Link href="/" className="logo">
          <span style={{ textTransform: "uppercase" }}>{lang.company}</span>. <span>{lang.motto}</span>
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
    </>

  );
};

export default Header;
