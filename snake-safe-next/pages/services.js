import React, {useState, useEffect} from "react";
import Header from "@/app/components/header/Header";
import Content from "../content/services.json";
import { useSelector } from 'react-redux';
import Footer from "@/app/components/footer/Footer";
import '../src/styles/styles.css';

const services = () => {
  const { english, spanish } = Content;
  const language = useSelector((state) => state.language.language);
  const [lang, setLang] = useState(english);

  useEffect(()=>{
    language === "en"? setLang(english) : setLang(spanish)
  }, [language])

  return (
    <>
     <>
  <div id="siteWrapper" className="clearfix site-wrapper">
    <div id="floatingCart" className="floating-cart hidden">
      <a
        href="/cart"
        className="icon icon--stroke icon--fill icon--cart sqs-custom-cart"
      >
        <span className="Cart-inner">
          <svg
            className="icon icon--cart"
            width={144}
            height={125}
            viewBox="0 0 144 125"
          >
            <path d="M4.69551 0.000432948C2.10179 0.000432948 0 2.09856 0 4.68769C0 7.27686 2.10183 9.37496 4.69551 9.37496H23.43C31.2022 28.5892 38.8567 47.8378 46.5654 67.089L39.4737 84.129C38.8799 85.5493 39.0464 87.2634 39.905 88.5418C40.7622 89.8216 42.2856 90.6283 43.8271 90.6232H122.088C124.568 90.658 126.85 88.4129 126.85 85.9359C126.85 83.4589 124.569 81.214 122.088 81.2487H50.8702L54.9305 71.5802L130.306 65.5745C132.279 65.4199 134.064 63.8849 134.512 61.9608L143.903 21.337C144.518 18.6009 142.114 15.6147 139.306 15.624H36.0522L30.9654 2.92939C30.2682 1.21146 28.4698 0 26.612 0L4.69551 0.000432948ZM39.8152 24.9999H133.385L126.097 56.5426L54.7339 62.2067L39.8152 24.9999ZM59.4777 93.75C50.8885 93.75 43.8252 100.801 43.8252 109.375C43.8252 117.949 50.8885 125 59.4777 125C68.0669 125 75.1301 117.949 75.1301 109.375C75.1301 100.801 68.0669 93.75 59.4777 93.75ZM106.433 93.75C97.8436 93.75 90.7803 100.801 90.7803 109.375C90.7803 117.949 97.8436 125 106.433 125C115.022 125 122.085 117.949 122.085 109.375C122.085 100.801 115.022 93.75 106.433 93.75ZM59.4777 103.125C62.9906 103.125 65.7378 105.867 65.7378 109.374C65.7378 112.88 62.9905 115.623 59.4777 115.623C55.9647 115.623 53.2175 112.88 53.2175 109.374C53.2175 105.867 55.9649 103.125 59.4777 103.125ZM106.433 103.125C109.946 103.125 112.693 105.867 112.693 109.374C112.693 112.88 109.946 115.623 106.433 115.623C102.92 115.623 100.173 112.88 100.173 109.374C100.173 105.867 102.92 103.125 106.433 103.125Z" />
          </svg>
        </span>
      </a>
    </div>
   <Header/>
    <main id="page" className="container" role="main">
      <article
        className="sections"
        id="sections"
        data-page-sections="67365873e079254848629ea1"
      >
        <section
        style={{paddingTop: 0}}
          data-test="page-section"
          data-section-theme="light"
          className="page-section 
    
full-bleed-section
layout-engine-section
    
    background-width--full-bleed
    

  section-height--custom

    
    
content-width--wide
    
    horizontal-alignment--center
    vertical-alignment--middle
    

    
    
    light"
          data-section-id="67365873e079254848629f0f"
          data-controller="SectionWrapperController"
          data-current-styles='{
"imageOverlayOpacity": 0.15,
"backgroundWidth": "background-width--full-bleed",
"sectionHeight": "section-height--custom",
"customSectionHeight": 0,
"horizontalAlignment": "horizontal-alignment--center",
"verticalAlignment": "vertical-alignment--middle",
"contentWidth": "content-width--wide",
"customContentWidth": 50,
"backgroundColor": "",
"sectionTheme": "light",
"sectionAnimation": "none",
"backgroundMode": "image"
}'
          data-current-context='{
"video": {
"playbackSpeed": 0.5,
"filter": 1,
"filterStrength": 0,
"zoom": 0,
"videoSourceProvider": "none"
},
"backgroundImageId": null,
"backgroundMediaEffect": {
"type": "none"
},
"divider": {
"enabled": false
},
"typeName": "page"
}'
          data-animation="none"
          data-fluid-engine-section=""
        >
          <div className="section-border">
            <div className="section-background"></div>
          </div>
          <div
            className="content-wrapper"
            style={{
              paddingTop: "calc(0vmax / 10)",
              paddingBottom: "calc(0vmax / 10)"
            }}
          >
            <div className="content">
              <div data-fluid-engine="true">
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n\n.fe-67365873e079254848629f0e {\n  --grid-gutter: calc(var(--sqs-mobile-site-gutter, 6vw) - 11.0px);\n  --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (8 - 1)) ) / 8 );\n\n  display: grid;\n  position: relative;\n  grid-area: 1/1/-1/-1;\n  grid-template-rows: repeat(67,minmax(24px, auto));\n  grid-template-columns:\n    minmax(var(--grid-gutter), 1fr)\n    repeat(8, minmax(0, var(--cell-max-width)))\n    minmax(var(--grid-gutter), 1fr);\n  row-gap: 11.0px;\n  column-gap: 11.0px;\n}\n\n@media (min-width: 768px) {\n  .background-width--inset .fe-67365873e079254848629f0e {\n    --inset-padding: calc(var(--sqs-site-gutter) * 2);\n  }\n\n  .fe-67365873e079254848629f0e {\n    --grid-gutter: calc(var(--sqs-site-gutter, 4vw) - 11.0px);\n    --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (24 - 1)) ) / 24 );\n    --inset-padding: 0vw;\n\n    --row-height-scaling-factor: 0.0215;\n    --container-width: min(var(--sqs-site-max-width, 1500px), calc(100vw - var(--sqs-site-gutter, 4vw) * 2 - var(--inset-padding) ));\n\n    grid-template-rows: repeat(25,minmax(calc(var(--container-width) * var(--row-height-scaling-factor)), auto));\n    grid-template-columns:\n      minmax(var(--grid-gutter), 1fr)\n      repeat(24, minmax(0, var(--cell-max-width)))\n      minmax(var(--grid-gutter), 1fr);\n  }\n}\n\n\n  .fe-block-f4a570ec76dd3646e424 {\n    grid-area: 1/2/4/10;\n    z-index: 1;\n\n    @media (max-width: 767px) {\n      \n    }\n  }\n\n  .fe-block-f4a570ec76dd3646e424 .sqs-block {\n    justify-content: flex-start;\n  }\n\n  .fe-block-f4a570ec76dd3646e424 .sqs-block-alignment-wrapper {\n    align-items: flex-start;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-f4a570ec76dd3646e424 {\n      grid-area: 1/2/4/13;\n      z-index: 1;\n\n      \n    }\n\n    .fe-block-f4a570ec76dd3646e424 .sqs-block {\n      justify-content: center;\n    }\n\n    .fe-block-f4a570ec76dd3646e424 .sqs-block-alignment-wrapper {\n      align-items: center;\n    }\n  }\n\n  .fe-block-166ffc06a0629ba931dd {\n    grid-area: 4/2/10/10;\n    z-index: 2;\n\n    @media (max-width: 767px) {\n      \n    }\n  }\n\n  .fe-block-166ffc06a0629ba931dd .sqs-block {\n    justify-content: flex-start;\n  }\n\n  .fe-block-166ffc06a0629ba931dd .sqs-block-alignment-wrapper {\n    align-items: flex-start;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-166ffc06a0629ba931dd {\n      grid-area: 4/2/8/13;\n      z-index: 2;\n\n      \n    }\n\n    .fe-block-166ffc06a0629ba931dd .sqs-block {\n      justify-content: flex-start;\n    }\n\n    .fe-block-166ffc06a0629ba931dd .sqs-block-alignment-wrapper {\n      align-items: flex-start;\n    }\n  }\n\n  .fe-block-0a1b74dc899dfc60c365 {\n    grid-area: 9/1/11/9;\n    z-index: 8;\n\n    @media (max-width: 767px) {\n      \n        \n      \n    }\n  }\n\n  .fe-block-0a1b74dc899dfc60c365 .sqs-block {\n    justify-content: flex-end;\n  }\n\n  .fe-block-0a1b74dc899dfc60c365 .sqs-block-alignment-wrapper {\n    align-items: flex-end;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-0a1b74dc899dfc60c365 {\n      grid-area: 9/2/12/8;\n      z-index: 8;\n\n      \n        \n      \n    }\n\n    .fe-block-0a1b74dc899dfc60c365 .sqs-block {\n      justify-content: center;\n    }\n\n    .fe-block-0a1b74dc899dfc60c365 .sqs-block-alignment-wrapper {\n      align-items: center;\n    }\n  }\n\n  .fe-block-yui_3_17_2_1_1732851041591_110360 {\n    grid-area: 11/2/19/10;\n    z-index: 9;\n\n    @media (max-width: 767px) {\n      \n        \n      \n    }\n  }\n\n  .fe-block-yui_3_17_2_1_1732851041591_110360 .sqs-block {\n    justify-content: center;\n  }\n\n  .fe-block-yui_3_17_2_1_1732851041591_110360 .sqs-block-alignment-wrapper {\n    align-items: center;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-yui_3_17_2_1_1732851041591_110360 {\n      grid-area: 18/2/26/8;\n      z-index: 9;\n\n      \n        \n      \n    }\n\n    .fe-block-yui_3_17_2_1_1732851041591_110360 .sqs-block {\n      justify-content: center;\n    }\n\n    .fe-block-yui_3_17_2_1_1732851041591_110360 .sqs-block-alignment-wrapper {\n      align-items: center;\n    }\n  }\n\n  .fe-block-yui_3_17_2_1_1732851041591_67838 {\n    grid-area: 19/2/27/10;\n    z-index: 3;\n\n    @media (max-width: 767px) {\n      \n        \n      \n    }\n  }\n\n  .fe-block-yui_3_17_2_1_1732851041591_67838 .sqs-block {\n    justify-content: flex-start;\n  }\n\n  .fe-block-yui_3_17_2_1_1732851041591_67838 .sqs-block-alignment-wrapper {\n    align-items: flex-start;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-yui_3_17_2_1_1732851041591_67838 {\n      grid-area: 12/2/21/8;\n      z-index: 3;\n\n      \n        \n      \n    }\n\n    .fe-block-yui_3_17_2_1_1732851041591_67838 .sqs-block {\n      justify-content: flex-start;\n    }\n\n    .fe-block-yui_3_17_2_1_1732851041591_67838 .sqs-block-alignment-wrapper {\n      align-items: flex-start;\n    }\n  }\n\n  .fe-block-yui_3_17_2_1_1732851041591_95833 {\n    grid-area: 26/2/28/10;\n    z-index: 7;\n\n    @media (max-width: 767px) {\n      \n        \n      \n    }\n  }\n\n  .fe-block-yui_3_17_2_1_1732851041591_95833 .sqs-block {\n    justify-content: center;\n  }\n\n  .fe-block-yui_3_17_2_1_1732851041591_95833 .sqs-block-alignment-wrapper {\n    align-items: center;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-yui_3_17_2_1_1732851041591_95833 {\n      grid-area: 8/13/11/20;\n      z-index: 7;\n\n      \n        \n      \n    }\n\n    .fe-block-yui_3_17_2_1_1732851041591_95833 .sqs-block {\n      justify-content: center;\n    }\n\n    .fe-block-yui_3_17_2_1_1732851041591_95833 .sqs-block-alignment-wrapper {\n      align-items: center;\n    }\n  }\n\n  .fe-block-yui_3_17_2_1_1732851041591_81169 {\n    grid-area: 28/2/37/10;\n    z-index: 4;\n\n    @media (max-width: 767px) {\n      \n        \n      \n    }\n  }\n\n  .fe-block-yui_3_17_2_1_1732851041591_81169 .sqs-block {\n    justify-content: flex-start;\n  }\n\n  .fe-block-yui_3_17_2_1_1732851041591_81169 .sqs-block-alignment-wrapper {\n    align-items: flex-start;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-yui_3_17_2_1_1732851041591_81169 {\n      grid-area: 11/8/19/14;\n      z-index: 4;\n\n      \n        \n      \n    }\n\n    .fe-block-yui_3_17_2_1_1732851041591_81169 .sqs-block {\n      justify-content: flex-start;\n    }\n\n    .fe-block-yui_3_17_2_1_1732851041591_81169 .sqs-block-alignment-wrapper {\n      align-items: flex-start;\n    }\n  }\n\n  .fe-block-a903b8e023bb9fe05d47 {\n    grid-area: 36/1/43/11;\n    z-index: 10;\n\n    @media (max-width: 767px) {\n      \n        \n      \n    }\n  }\n\n  .fe-block-a903b8e023bb9fe05d47 .sqs-block {\n    justify-content: center;\n  }\n\n  .fe-block-a903b8e023bb9fe05d47 .sqs-block-alignment-wrapper {\n    align-items: center;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-a903b8e023bb9fe05d47 {\n      grid-area: 19/8/25/14;\n      z-index: 10;\n\n      \n        \n      \n    }\n\n    .fe-block-a903b8e023bb9fe05d47 .sqs-block {\n      justify-content: center;\n    }\n\n    .fe-block-a903b8e023bb9fe05d47 .sqs-block-alignment-wrapper {\n      align-items: center;\n    }\n  }\n\n  .fe-block-cd96e4bdd87143dbd486 {\n    grid-area: 49/2/56/10;\n    z-index: 11;\n\n    @media (max-width: 767px) {\n      \n        \n      \n    }\n  }\n\n  .fe-block-cd96e4bdd87143dbd486 .sqs-block {\n    justify-content: center;\n  }\n\n  .fe-block-cd96e4bdd87143dbd486 .sqs-block-alignment-wrapper {\n    align-items: center;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-cd96e4bdd87143dbd486 {\n      grid-area: 16/14/22/20;\n      z-index: 11;\n\n      \n        \n      \n    }\n\n    .fe-block-cd96e4bdd87143dbd486 .sqs-block {\n      justify-content: center;\n    }\n\n    .fe-block-cd96e4bdd87143dbd486 .sqs-block-alignment-wrapper {\n      align-items: center;\n    }\n  }\n\n  .fe-block-90035540e4c8ccc56ffd {\n    grid-area: 43/2/50/10;\n    z-index: 5;\n\n    @media (max-width: 767px) {\n      \n        \n      \n    }\n  }\n\n  .fe-block-90035540e4c8ccc56ffd .sqs-block {\n    justify-content: center;\n  }\n\n  .fe-block-90035540e4c8ccc56ffd .sqs-block-alignment-wrapper {\n    align-items: center;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-90035540e4c8ccc56ffd {\n      grid-area: 11/14/17/20;\n      z-index: 5;\n\n      \n        \n      \n    }\n\n    .fe-block-90035540e4c8ccc56ffd .sqs-block {\n      justify-content: flex-start;\n    }\n\n    .fe-block-90035540e4c8ccc56ffd .sqs-block-alignment-wrapper {\n      align-items: flex-start;\n    }\n  }\n\n  .fe-block-a3a18c8600423b4aafe8 {\n    grid-area: 56/2/61/10;\n    z-index: 6;\n\n    @media (max-width: 767px) {\n      \n        \n          \n  \n  \n    position: sticky;\n    top: calc(0px + var(--header-fixed-top-offset, 0px));\n  \n  \n\n        \n      \n    }\n  }\n\n  .fe-block-a3a18c8600423b4aafe8 .sqs-block {\n    justify-content: center;\n  }\n\n  .fe-block-a3a18c8600423b4aafe8 .sqs-block-alignment-wrapper {\n    align-items: center;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-a3a18c8600423b4aafe8 {\n      grid-area: 11/20/16/26;\n      z-index: 6;\n\n      \n        \n      \n    }\n\n    .fe-block-a3a18c8600423b4aafe8 .sqs-block {\n      justify-content: flex-start;\n    }\n\n    .fe-block-a3a18c8600423b4aafe8 .sqs-block-alignment-wrapper {\n      align-items: flex-start;\n    }\n  }\n\n  .fe-block-37d7e067bd2b69a4ea58 {\n    grid-area: 61/1/68/11;\n    z-index: 12;\n\n    @media (max-width: 767px) {\n      \n        \n      \n    }\n  }\n\n  .fe-block-37d7e067bd2b69a4ea58 .sqs-block {\n    justify-content: center;\n  }\n\n  .fe-block-37d7e067bd2b69a4ea58 .sqs-block-alignment-wrapper {\n    align-items: center;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-37d7e067bd2b69a4ea58 {\n      grid-area: 15/20/21/26;\n      z-index: 12;\n\n      \n        \n      \n    }\n\n    .fe-block-37d7e067bd2b69a4ea58 .sqs-block {\n      justify-content: center;\n    }\n\n    .fe-block-37d7e067bd2b69a4ea58 .sqs-block-alignment-wrapper {\n      align-items: center;\n    }\n  }\n\n"
                  }}
                />
                <div className="fluid-engine fe-67365873e079254848629f0e">
                  <div className="fe-block fe-block-f4a570ec76dd3646e424">
                    <div
                      className="sqs-block html-block sqs-block-html"
                      data-blend-mode="NORMAL"
                      data-block-type={2}
                      data-border-radii='{"topLeft":{"unit":"px","value":0.0},"topRight":{"unit":"px","value":0.0},"bottomLeft":{"unit":"px","value":0.0},"bottomRight":{"unit":"px","value":0.0}}'
                      id="block-f4a570ec76dd3646e424"
                    >
                      <div className="sqs-block-content">
                        <div className="sqs-html-content">
                          <h1 style={{ whiteSpace: "pre-wrap" }}>
                            <span
                              className="sqsrte-text-color--custom"
                              style={{ color: "#FFF6DC" }}
                            >
                              <strong>{lang.heading}</strong>
                            </span>
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="fe-block fe-block-166ffc06a0629ba931dd">
                    <div
                      className="sqs-block html-block sqs-block-html"
                      data-blend-mode="NORMAL"
                      data-block-type={2}
                      data-border-radii='{"topLeft":{"unit":"px","value":0.0},"topRight":{"unit":"px","value":0.0},"bottomLeft":{"unit":"px","value":0.0},"bottomRight":{"unit":"px","value":0.0}}'
                      id="block-166ffc06a0629ba931dd"
                    >
                      <div className="sqs-block-content">
                        <div className="sqs-html-content">
                          <p
                            className="sqsrte-large"
                            style={{ whiteSpace: "pre-wrap" }}
                          >
                            {lang.subText}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`fe-block fe-block-0a1b74dc899dfc60c365 ${language == "es"? "m-top": ""}`}>
                    <div
                      className="sqs-block html-block sqs-block-html"
                      data-blend-mode="NORMAL"
                      data-block-type={2}
                      data-border-radii='{"topLeft":{"unit":"px","value":0.0},"topRight":{"unit":"px","value":0.0},"bottomLeft":{"unit":"px","value":0.0},"bottomRight":{"unit":"px","value":0.0}}'
                      id="block-0a1b74dc899dfc60c365"
                    >
                      <div className="sqs-block-content">
                        <div className="sqs-html-content">
                          <h2
                            style={{
                              textAlign: "center",
                              whiteSpace: "pre-wrap"
                            }}
                          >
                            <span
                              className="sqsrte-text-color--custom"
                              style={{ color: "#FFF6DC" }}
                            >
                              <strong>{lang.riskAssessment.title}</strong>
                            </span>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="fe-block fe-block-yui_3_17_2_1_1732851041591_110360">
                    <div
                      className="sqs-block image-block sqs-block-image sqs-stretched"
                      data-block-type={5}
                      id="block-yui_3_17_2_1_1732851041591_110360"
                    >
                      <div className="sqs-block-content">
                        <div
                          className="
  image-block-outer-wrapper
  layout-caption-below
  design-layout-fluid
  image-position-center
  combination-animation-site-default
  individual-animation-site-default
"
                          data-test="image-block-fluid-outer-wrapper"
                        >
                          <div
                            className="fluid-image-animation-wrapper sqs-image sqs-block-alignment-wrapper"
                            data-animation-role="image"
                          >
                            <div
                              className="fluid-image-container sqs-image-content"
                              style={{
                                overflow: "hidden",
                                WebkitMaskImage:
                                  "-webkit-radial-gradient(white, black)",
                                position: "relative",
                                width: "100%",
                                height: "100%"
                              }}
                            >
                              <div className="content-fit">
                                <img
                                  data-stretch="false"
                                  data-image-dimensions="1659x1244"
                                  data-image-focal-point="0.5,0.5"
                                  alt=""
                                  data-load="false"
                                  elementtiming="system-image-block"
                                  src={lang.riskAssessment.img}
                                  width={1659}
                                  height={1244}
                                  sizes="(max-width: 640px) 100vw, (max-width: 767px) 100vw, 25vw"
                                  style={{
                                    display: "block",
                                    objectFit: "contain",
                                    objectPosition: "50% 50%"
                                  }}
                                  loading="lazy"
                                  decoding="async"
                                  data-loader="sqs"
                                />
                                <div className="fluidImageOverlay" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <style
                          dangerouslySetInnerHTML={{
                            __html:
                              "\n      .sqs-block-image .sqs-block-content {\n        height: 100%;\n        width: 100%;\n      }\n\n      \n        .fe-block-yui_3_17_2_1_1732851041591_110360 .fluidImageOverlay {\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          mix-blend-mode: normal;\n          \n            \n            \n          \n          \n            opacity: 0;\n          \n        }\n      \n    "
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="fe-block fe-block-yui_3_17_2_1_1732851041591_67838">
                    <div
                      className="sqs-block html-block sqs-block-html"
                      data-blend-mode="NORMAL"
                      data-block-type={2}
                      data-border-radii='{"topLeft":{"unit":"px","value":0.0},"topRight":{"unit":"px","value":0.0},"bottomLeft":{"unit":"px","value":0.0},"bottomRight":{"unit":"px","value":0.0}}'
                      id="block-yui_3_17_2_1_1732851041591_67838"
                    >
                      <div className="sqs-block-content">
                        <div className="sqs-html-content">
                          <ul data-rte-list="default">
                            <li>
                              <p
                                className=""
                                style={{ whiteSpace: "pre-wrap" }}
                              >
                                <strong>
                                 {lang.riskAssessment.bullets[0]}
                                </strong>
                                &nbsp;
                              </p>
                            </li>
                          </ul>
                          <ul data-rte-list="default">
                            <li>
                              <p
                                className=""
                                style={{ whiteSpace: "pre-wrap" }}
                              >
                                <strong>
                                {lang.riskAssessment.bullets[1]}
                                </strong>
                                &nbsp;
                              </p>
                            </li>
                            <li>
                              <p
                                className=""
                                style={{ whiteSpace: "pre-wrap" }}
                              >
                                <strong>
                                {lang.riskAssessment.bullets[2]}
                                </strong>
                                &nbsp;
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`fe-block fe-block-yui_3_17_2_1_1732851041591_95833 ${language == "es"? "m-top": ""}`}>
                    <div
                      className="sqs-block html-block sqs-block-html"
                      data-blend-mode="NORMAL"
                      data-block-type={2}
                      data-border-radii='{"topLeft":{"unit":"px","value":0.0},"topRight":{"unit":"px","value":0.0},"bottomLeft":{"unit":"px","value":0.0},"bottomRight":{"unit":"px","value":0.0}}'
                      id="block-yui_3_17_2_1_1732851041591_95833"
                    >
                      <div className="sqs-block-content">
                        <div className="sqs-html-content">
                          <h2
                            style={{
                              textAlign: "center",
                              whiteSpace: "pre-wrap"
                            }}
                          >
                            <span
                              className="sqsrte-text-color--custom"
                              style={{ color: "#FFF6DC" }}
                            >
                              <strong>{lang.trainingModules.title}</strong>
                            </span>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="fe-block fe-block-yui_3_17_2_1_1732851041591_81169">
                    <div
                      className="sqs-block html-block sqs-block-html"
                      data-blend-mode="NORMAL"
                      data-block-type={2}
                      data-border-radii='{"topLeft":{"unit":"px","value":0.0},"topRight":{"unit":"px","value":0.0},"bottomLeft":{"unit":"px","value":0.0},"bottomRight":{"unit":"px","value":0.0}}'
                      id="block-yui_3_17_2_1_1732851041591_81169"
                    >
                      <div className="sqs-block-content">
                        <div className="sqs-html-content">
                          <p
                            className="sqsrte-large"
                            style={{ whiteSpace: "pre-wrap" }}
                          >
                            <strong>
                              <em> </em>
                            </strong>
                            <span
                              className="sqsrte-text-color--custom"
                              style={{ color: "#FFF6DC" }}
                            >
                              <strong>
                                <em>{lang.trainingModules.modules[0].module}</em>
                              </strong>
                              &nbsp;
                            </span>
                          </p>
                          <ul data-rte-list="default">
                            <li>
                              <p
                                className=""
                                style={{ whiteSpace: "pre-wrap" }}
                              >
                                <strong>
                                  {lang.trainingModules.modules[0].bullets[0]}
                                </strong>
                                &nbsp;
                              </p>
                            </li>
                            <li>
                              <p
                                className=""
                                style={{ whiteSpace: "pre-wrap" }}
                              >
                                <strong>
                                 {lang.trainingModules.modules[0].bullets[1]}
                                </strong>
                                &nbsp;
                              </p>
                            </li>
                            <li>
                              <p
                                className=""
                                style={{ whiteSpace: "pre-wrap" }}
                              >
                                <strong>
                                 {lang.trainingModules.modules[0].bullets[2]}
                                </strong>
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="fe-block fe-block-a903b8e023bb9fe05d47">
                    <div
                      className="sqs-block image-block sqs-block-image sqs-stretched"
                      data-block-type={5}
                      id="block-a903b8e023bb9fe05d47"
                    >
                      <div className="sqs-block-content">
                        <div
                          className="
  image-block-outer-wrapper
  layout-caption-below
  design-layout-fluid
  image-position-center
  combination-animation-site-default
  individual-animation-site-default
"
                          data-test="image-block-fluid-outer-wrapper"
                        >
                          <div
                            className="fluid-image-animation-wrapper sqs-image sqs-block-alignment-wrapper"
                            data-animation-role="image"
                          >
                            <div
                              className="fluid-image-container sqs-image-content"
                              style={{
                                overflow: "hidden",
                                WebkitMaskImage:
                                  "-webkit-radial-gradient(white, black)",
                                position: "relative",
                                width: "100%",
                                height: "100%"
                              }}
                            >
                              <div className="content-fit">
                                <img
                                  data-stretch="false"
                                  data-image-dimensions="2500x1875"
                                  data-image-focal-point="0.5,0.5"
                                  alt=""
                                  data-load="false"
                                  elementtiming="system-image-block"
                                  src={lang.trainingModules.modules[0].img}
                                  width={2500}
                                  height={1875}
                                  sizes="(max-width: 640px) 100vw, (max-width: 767px) 100vw, 25vw"
                                  style={{
                                    display: "block",
                                    objectFit: "contain",
                                    objectPosition: "50% 50%"
                                  }}
                                  loading="lazy"
                                  decoding="async"
                                  data-loader="sqs"
                                />
                                <div className="fluidImageOverlay" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <style
                          dangerouslySetInnerHTML={{
                            __html:
                              "\n      .sqs-block-image .sqs-block-content {\n        height: 100%;\n        width: 100%;\n      }\n\n      \n        .fe-block-a903b8e023bb9fe05d47 .fluidImageOverlay {\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          mix-blend-mode: normal;\n          \n            \n            \n          \n          \n            opacity: 0;\n          \n        }\n      \n    "
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="fe-block fe-block-cd96e4bdd87143dbd486">
                    <div
                      className="sqs-block image-block sqs-block-image sqs-stretched"
                      data-block-type={5}
                      id="block-cd96e4bdd87143dbd486"
                    >
                      <div className="sqs-block-content">
                        <div
                          className="
  image-block-outer-wrapper
  layout-caption-below
  design-layout-fluid
  image-position-center
  combination-animation-site-default
  individual-animation-site-default
"
                          data-test="image-block-fluid-outer-wrapper"
                        >
                          <div
                            className="fluid-image-animation-wrapper sqs-image sqs-block-alignment-wrapper"
                            data-animation-role="image"
                          >
                            <div
                              className="fluid-image-container sqs-image-content"
                              style={{
                                overflow: "hidden",
                                WebkitMaskImage:
                                  "-webkit-radial-gradient(white, black)",
                                position: "relative",
                                width: "100%",
                                height: "100%"
                              }}
                            >
                              <div className="content-fit">
                                <img
                                  data-stretch="false"
                                  data-image-dimensions="1869x1402"
                                  data-image-focal-point="0.5,0.5"
                                  alt=""
                                  data-load="false"
                                  elementtiming="system-image-block"
                                  src={lang.trainingModules.modules[1].img}
                                  width={1869}
                                  height={1402}
                                  sizes="(max-width: 640px) 100vw, (max-width: 767px) 100vw, 25vw"
                                  style={{
                                    display: "block",
                                    objectFit: "contain",
                                    objectPosition: "50% 50%"
                                  }}
                                  loading="lazy"
                                  decoding="async"
                                  data-loader="sqs"
                                />
                                <div className="fluidImageOverlay" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <style
                          dangerouslySetInnerHTML={{
                            __html:
                              "\n      .sqs-block-image .sqs-block-content {\n        height: 100%;\n        width: 100%;\n      }\n\n      \n        .fe-block-cd96e4bdd87143dbd486 .fluidImageOverlay {\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          mix-blend-mode: normal;\n          \n            \n            \n          \n          \n            opacity: 0;\n          \n        }\n      \n    "
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={`fe-block fe-block-90035540e4c8ccc56ffd `}>
                    <div
                      className="sqs-block html-block sqs-block-html"
                      data-blend-mode="NORMAL"
                      data-block-type={2}
                      data-border-radii='{"topLeft":{"unit":"px","value":0.0},"topRight":{"unit":"px","value":0.0},"bottomLeft":{"unit":"px","value":0.0},"bottomRight":{"unit":"px","value":0.0}}'
                      id="block-90035540e4c8ccc56ffd"
                    >
                      <div className="sqs-block-content">
                        <div className="sqs-html-content">
                          <p
                            className="sqsrte-large"
                            style={{ whiteSpace: "pre-wrap" }}
                          >
                            <span
                              className="sqsrte-text-color--custom"
                              style={{ color: "#FFF6DC" }}
                            >
                              <strong>
                                <em>{lang.trainingModules.modules[1].module}</em>
                              </strong>
                              <em>&nbsp;</em>
                            </span>
                          </p>
                          <ul data-rte-list="default">
                            <li>
                              <p
                                className=""
                                style={{ whiteSpace: "pre-wrap" }}
                              >
                                <strong>
                                  {lang.trainingModules.modules[1].bullets[0]}
                                </strong>
                                &nbsp;
                              </p>
                            </li>
                            <li>
                              <p
                                className=""
                                style={{ whiteSpace: "pre-wrap" }}
                              >
                                <strong>
                                {lang.trainingModules.modules[1].bullets[1]}
                                </strong>
                                &nbsp;
                              </p>
                            </li>
                          </ul>
                          <p
                            className=""
                            data-rte-preserve-empty="true"
                            style={{ whiteSpace: "pre-wrap" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="fe-block fe-block-a3a18c8600423b4aafe8 sqs-position-sticky">
                    <div
                      className="sqs-block html-block sqs-block-html"
                      data-blend-mode="NORMAL"
                      data-block-type={2}
                      data-border-radii='{"topLeft":{"unit":"px","value":0.0},"topRight":{"unit":"px","value":0.0},"bottomLeft":{"unit":"px","value":0.0},"bottomRight":{"unit":"px","value":0.0}}'
                      id="block-a3a18c8600423b4aafe8"
                    >
                      <div className="sqs-block-content">
                        <div className="sqs-html-content">
                          <p
                            className="sqsrte-large"
                            style={{ whiteSpace: "pre-wrap" }}
                          >
                            <span
                              className="sqsrte-text-color--custom"
                              style={{ color: "#FFF6DC" }}
                            >
                              <strong>
                              {lang.trainingModules.modules[2].module}
                              </strong>
                              &nbsp;
                            </span>
                          </p>
                          <ul data-rte-list="default">
                            <li>
                              <p
                                className=""
                                style={{ whiteSpace: "pre-wrap" }}
                              >
                                <strong>
                                {lang.trainingModules.modules[2].bullets[0]}
                                </strong>
                                &nbsp;
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="fe-block fe-block-37d7e067bd2b69a4ea58">
                    <div
                      className="sqs-block image-block sqs-block-image sqs-stretched"
                      data-block-type={5}
                      id="block-37d7e067bd2b69a4ea58"
                    >
                      <div className="sqs-block-content">
                        <div
                          className="
  image-block-outer-wrapper
  layout-caption-below
  design-layout-fluid
  image-position-center
  combination-animation-site-default
  individual-animation-site-default
"
                          data-test="image-block-fluid-outer-wrapper"
                        >
                          <div
                            className="fluid-image-animation-wrapper sqs-image sqs-block-alignment-wrapper"
                            data-animation-role="image"
                          >
                            <div
                              className="fluid-image-container sqs-image-content"
                              style={{
                                overflow: "hidden",
                                WebkitMaskImage:
                                  "-webkit-radial-gradient(white, black)",
                                position: "relative",
                                width: "100%",
                                height: "100%"
                              }}
                            >
                              <div className="content-fit">
                                <img
                                  data-stretch="false"
                                  data-image-dimensions="1667x1250"
                                  data-image-focal-point="0.5,0.5"
                                  alt="Man wrangling a snake with a tool"
                                  data-load="false"
                                  elementtiming="system-image-block"
                                  src={lang.trainingModules.modules[2].img}
                                  width={1667}
                                  height={1250}
                                  sizes="(max-width: 640px) 100vw, (max-width: 767px) 100vw, 25vw"
                                  style={{
                                    display: "block",
                                    objectFit: "contain",
                                    objectPosition: "50% 50%"
                                  }}
                                  loading="lazy"
                                  decoding="async"
                                  data-loader="sqs"
                                />
                                <div className="fluidImageOverlay" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <style
                          dangerouslySetInnerHTML={{
                            __html:
                              "\n      .sqs-block-image .sqs-block-content {\n        height: 100%;\n        width: 100%;\n      }\n\n      \n        .fe-block-37d7e067bd2b69a4ea58 .fluidImageOverlay {\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          mix-blend-mode: normal;\n          \n            \n            \n          \n          \n            opacity: 0;\n          \n        }\n      \n    "
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
    <Footer/>
  </div>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    style={{ display: "none" }}
    data-usage="social-icons-svg"
  >
    <symbol id="youtube-unauth-icon" viewBox="0 0 64 64">
      <path d="M46.7,26c0,0-0.3-2.1-1.2-3c-1.1-1.2-2.4-1.2-3-1.3C38.3,21.4,32,21.4,32,21.4h0 c0,0-6.3,0-10.5,0.3c-0.6,0.1-1.9,0.1-3,1.3c-0.9,0.9-1.2,3-1.2,3S17,28.4,17,30.9v2.3c0,2.4,0.3,4.9,0.3,4.9s0.3,2.1,1.2,3 c1.1,1.2,2.6,1.2,3.3,1.3c2.4,0.2,10.2,0.3,10.2,0.3s6.3,0,10.5-0.3c0.6-0.1,1.9-0.1,3-1.3c0.9-0.9,1.2-3,1.2-3s0.3-2.4,0.3-4.9 v-2.3C47,28.4,46.7,26,46.7,26z M28.9,35.9l0-8.4l8.1,4.2L28.9,35.9z" />
    </symbol>
    <symbol id="youtube-unauth-mask" viewBox="0 0 64 64">
      <path d="M0,0v64h64V0H0z M47,33.1c0,2.4-0.3,4.9-0.3,4.9s-0.3,2.1-1.2,3c-1.1,1.2-2.4,1.2-3,1.3 C38.3,42.5,32,42.6,32,42.6s-7.8-0.1-10.2-0.3c-0.7-0.1-2.2-0.1-3.3-1.3c-0.9-0.9-1.2-3-1.2-3S17,35.6,17,33.1v-2.3 c0-2.4,0.3-4.9,0.3-4.9s0.3-2.1,1.2-3c1.1-1.2,2.4-1.2,3-1.3c4.2-0.3,10.5-0.3,10.5-0.3h0c0,0,6.3,0,10.5,0.3c0.6,0.1,1.9,0.1,3,1.3 c0.9,0.9,1.2,3,1.2,3s0.3,2.4,0.3,4.9V33.1z M28.9,35.9l8.1-4.2l-8.1-4.2L28.9,35.9z" />
    </symbol>
  </svg>
</>

    </>
  );
};

export default services;
