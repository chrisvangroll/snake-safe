"use client";
import React, { useState, useEffect } from 'react';
import Header from '@/app/components/header/Header';
import Content from "../content/test.json";
import { useSelector } from 'react-redux';
import Footer from "@/app/components/footer/Footer";
import '../src/styles/styles.css';
import Head from 'next/head';
import Colors from "../content/colors.json";
import RiskAssessment from '@/app/components/risk-assessment/RiskAssessment';
import TrainingModules from '@/app/components/training-modules/TrainingModules';

const Test = () => {
  const { english, spanish } = Content;
  const language = useSelector((state) => state.language.language);
  const [lang, setLang] = useState(english);

  useEffect(() => {
    language === "en" ? setLang(english) : setLang(spanish)
  }, [language])

  return (
    <>
      <Head>
        <style>{`
          .services-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
          }
          .page-header {
            padding: 3rem, 0, 0, 0;
            margin-bottom: 0rem;
            background: ${Colors.background}40;
            margin: -2rem -2rem 4rem -2rem;
            margin-bottom: 0;
  
          }
          .page-header-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
          }
          .page-title {
            color: ${Colors.primary};
            font-size: 5rem;
            margin-bottom: 1.5rem;
            font-weight: 300;
          }
          .page-subtitle {
            color: ${Colors.secondary};
            font-size: 1.2rem;
            max-width: 800px;
            line-height: 1.6;
          }
          @media (max-width: 992px) {
            .page-header {
              padding: 2rem 0;
              margin-bottom: 2rem;
            }
            .page-title {
              font-size: 4rem;
              margin-bottom: 1rem;
            }
          }
          @media (max-width: 768px) {
            .page-header {
              padding: 1.5rem 20px  0  20px;
              margin-bottom: 0;
            }
            .page-title {
              font-size: 3rem;
            }
              .services-container {
              padding-bottom: 0;
              }
          }
        `}</style>
      </Head>
      <div id="siteWrapper" className="clearfix site-wrapper">
        <Header />
        <main id="page" className="container" role="main">
          <div className="page-header">
            <div className="page-header-content">
              <h1 className="page-title">{lang.heading}</h1>
              <p className="page-subtitle">{lang.subText}</p>
            </div>
          </div>
          <div className="services-container">
            <TrainingModules 
              title={lang.trainingModules.title}
              modules={lang.trainingModules.modules}
              riskAssessment={lang.riskAssessment}
            />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Test; 