"use client"; // Ensures the component is treated as a Client Component

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Content from "../../../../content/headerAndFooter.json"
import './footer.css'

const Footer = () => {
  const { english, spanish } = Content;
  const language = useSelector((state) => state.language.language); // Access Redux state
  const [lang, setLang] = useState(english); // Local state to track language content

  // Update the local state whenever the language changes
  useEffect(() => {
    language === "en" ? setLang(english) : setLang(spanish);
  }, [language]);

  return (
    <footer className="sections" id="footer-sections" data-footer-sections="">
      <section
        data-test="page-section"
        data-section-theme="light"
        className="page-section full-bleed-section layout-engine-section background-width--full-bleed section-height--custom content-width--wide horizontal-alignment--center vertical-alignment--middle light"
      >
        <div className="section-border">
          <div className="section-background"></div>
        </div>
        <div
          className="content-wrapper"
          style={{
            paddingTop: "calc(0vmax / 10)",
            paddingBottom: "calc(0vmax / 10)",
          }}
        >
          <div className="content">
            <div data-fluid-engine="true" className="fluid-engine-edit">
              <div className="fluid-engine fe-67365873e079254848629f73 footer-container">
                <div>
                <div className="fe-block fe-block-49a0de279278179f3b2d">
                  <div className="sqs-block html-block sqs-block-html">
                    <div className="sqs-block-content">
                      <div className="sqs-html-content">
                        <h2 style={{ whiteSpace: "pre-wrap" }}>
                          <span className="sqsrte-text-color--white">
                            {lang.company}
                          </span>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fe-block fe-block-1f465ecdc1ac6e046b6d">
                  <div className="sqs-block html-block sqs-block-html">
                    <div className="sqs-block-content">
                      <div className="sqs-html-content">
                        <p style={{ whiteSpace: "pre-wrap" }}>
                          <span>{lang.motto}</span> <span>{lang.author}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
          
                <div className="fe-block fe-block-bb5630c3e9b5adaff3a2">
                  <div className="sqs-block html-block sqs-block-html">
                    <div className="sqs-block-content">
                      <div className="sqs-html-content">
                        <h2
                          style={{
                            textAlign: "right",
                            whiteSpace: "pre-wrap",
                          }}
                        >
                          <a href="mailto:drmiller@snake-safe.com">
                            <span className="sqsrte-text-color--black">
                              drmiller@snake-safe.com
                            </span>
                          </a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
