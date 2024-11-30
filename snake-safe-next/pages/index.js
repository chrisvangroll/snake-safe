"use client";
import { useEffect, useState } from "react";
import Header from "../src/app/components/header/Header";
import Content from "../content/home.json";
import { useSelector } from 'react-redux';
import Footer from "@/app/components/footer/Footer";
import '../src/styles/styles.css';


export default function Home() {
  const { english, spanish } = Content;
  const language = useSelector((state) => state.language.language);
  const [lang, setLang] = useState(english);

  useEffect(()=>{
    language === "en"? setLang(english) : setLang(spanish)
  }, [language])

  useEffect(() => {
    const burgerButton = document.querySelector(".header-burger-btn");
    const menu = document.querySelector(".header-menu");

    if (burgerButton && menu) {
      burgerButton.addEventListener("click", () => {
        menu.classList.toggle("open");
      });
    }

    return () => {
      if (burgerButton) {
        burgerButton.removeEventListener("click", () => {});
      }
    };
  }, []);
  return (
    <>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <base href="" />
      <meta charSet="utf-8" />
      <title>SNAKE-SAFE. Real Science. Real Safety.</title>
      <meta
        httpEquiv="Accept-CH"
        content="Sec-CH-UA-Platform-Version, Sec-CH-UA-Model"
      />
      <link
        rel="icon"
        type="image/x-icon"
        href="https://assets.squarespace.com/universal/default-favicon.ico"
      />
      <link rel="canonical" href="https://sepia-plum-s8c9.squarespace.com" />
      <meta
        property="og:site_name"
        content="SNAKE-SAFE. Real Science. Real Safety."
      />
      <meta
        property="og:title"
        content="SNAKE-SAFE. Real Science. Real Safety."
      />
      <meta
        property="og:url"
        content="https://sepia-plum-s8c9.squarespace.com"
      />
      <meta property="og:type" content="website" />
      <meta itemProp="name" content="SNAKE-SAFE. Real Science. Real Safety." />
      <meta itemProp="url" content="https://sepia-plum-s8c9.squarespace.com" />
      <meta
        name="twitter:title"
        content="SNAKE-SAFE. Real Science. Real Safety."
      />
      <meta
        name="twitter:url"
        content="https://sepia-plum-s8c9.squarespace.com"
      />
      <meta name="twitter:card" content="summary" />
      <meta name="description" content="" />
      <link rel="preconnect" href="https://images.squarespace-cdn.com" />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;700&family=Nunito+Sans:ital,wght@0,400;0,700;1,400;1,700"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="//assets.squarespace.com/universal/styles-compressed/user-account-core-b6e8cafbf34b05da5c2b-min.en-US.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://static1.squarespace.com/static/versioned-site-css/673652ec7d92b13c5632108e/6/5c5a519771c10ba3470d8101/673652ec7d92b13c563210ae/1588/site.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://static1.squarespace.com/static/vta/5c5a519771c10ba3470d8101/versioned-assets/1728407958569-DI71YIND73BBQN7RBZCZ/static.css"
      />
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
              <div className="legacy-cart icon-cart-quantity">
                <span className="sqs-cart-quantity">0</span>
              </div>
            </span>
          </a>
        </div>
        <Header />
        <main id="page" className="container" role="main">
          <article
            className="sections"
            id="sections"
            data-page-sections="67365873e079254848629ea4"
          >
            <section
              style={{ paddingTop: 0 }}
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
              data-section-id="67365873e079254848629f59"
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
                  paddingBottom: "calc(0vmax / 10)",
                }}
              >
                <div className="content">
                  <div data-fluid-engine="true">
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          "\n\n.fe-67365873e079254848629f58 {\n  --grid-gutter: calc(var(--sqs-mobile-site-gutter, 6vw) - 11.0px);\n  --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (8 - 1)) ) / 8 );\n\n  display: grid;\n  position: relative;\n  grid-area: 1/1/-1/-1;\n  grid-template-rows: repeat(33,minmax(24px, auto));\n  grid-template-columns:\n    minmax(var(--grid-gutter), 1fr)\n    repeat(8, minmax(0, var(--cell-max-width)))\n    minmax(var(--grid-gutter), 1fr);\n  row-gap: 11.0px;\n  column-gap: 11.0px;\n}\n\n@media (min-width: 768px) {\n  .background-width--inset .fe-67365873e079254848629f58 {\n    --inset-padding: calc(var(--sqs-site-gutter) * 2);\n  }\n\n  .fe-67365873e079254848629f58 {\n    --grid-gutter: calc(var(--sqs-site-gutter, 4vw) - 11.0px);\n    --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (24 - 1)) ) / 24 );\n    --inset-padding: 0vw;\n\n    --row-height-scaling-factor: 0.0215;\n    --container-width: min(var(--sqs-site-max-width, 1500px), calc(100vw - var(--sqs-site-gutter, 4vw) * 2 - var(--inset-padding) ));\n\n    grid-template-rows: repeat(18,minmax(calc(var(--container-width) * var(--row-height-scaling-factor)), auto));\n    grid-template-columns:\n      minmax(var(--grid-gutter), 1fr)\n      repeat(24, minmax(0, var(--cell-max-width)))\n      minmax(var(--grid-gutter), 1fr);\n  }\n}\n\n\n  .fe-block-8dccc2e6d400cbc42223 {\n    grid-area: 1/2/9/10;\n    z-index: 1;\n\n    @media (max-width: 767px) {\n      \n    }\n  }\n\n  .fe-block-8dccc2e6d400cbc42223 .sqs-block {\n    justify-content: flex-start;\n  }\n\n  .fe-block-8dccc2e6d400cbc42223 .sqs-block-alignment-wrapper {\n    align-items: flex-start;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-8dccc2e6d400cbc42223 {\n      grid-area: 1/15/9/25;\n      z-index: 2;\n\n      \n    }\n\n    .fe-block-8dccc2e6d400cbc42223 .sqs-block {\n      justify-content: center;\n    }\n\n    .fe-block-8dccc2e6d400cbc42223 .sqs-block-alignment-wrapper {\n      align-items: center;\n    }\n  }\n\n  .fe-block-ae82cbcdda7b31e982b5 {\n    grid-area: 9/1/16/11;\n    z-index: 5;\n\n    @media (max-width: 767px) {\n      \n    }\n  }\n\n  .fe-block-ae82cbcdda7b31e982b5 .sqs-block {\n    justify-content: center;\n  }\n\n  .fe-block-ae82cbcdda7b31e982b5 .sqs-block-alignment-wrapper {\n    align-items: center;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-ae82cbcdda7b31e982b5 {\n      grid-area: 1/2/18/14;\n      z-index: 1;\n\n      \n    }\n\n    .fe-block-ae82cbcdda7b31e982b5 .sqs-block {\n      justify-content: center;\n    }\n\n    .fe-block-ae82cbcdda7b31e982b5 .sqs-block-alignment-wrapper {\n      align-items: center;\n    }\n  }\n\n  .fe-block-37fcbce7711e5ef2f9d7 {\n    grid-area: 16/2/33/10;\n    z-index: 2;\n\n    @media (max-width: 767px) {\n      \n    }\n  }\n\n  .fe-block-37fcbce7711e5ef2f9d7 .sqs-block {\n    justify-content: flex-start;\n  }\n\n  .fe-block-37fcbce7711e5ef2f9d7 .sqs-block-alignment-wrapper {\n    align-items: flex-start;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-37fcbce7711e5ef2f9d7 {\n      grid-area: 9/15/19/26;\n      z-index: 3;\n\n      \n    }\n\n    .fe-block-37fcbce7711e5ef2f9d7 .sqs-block {\n      justify-content: flex-start;\n    }\n\n    .fe-block-37fcbce7711e5ef2f9d7 .sqs-block-alignment-wrapper {\n      align-items: flex-start;\n    }\n  }\n\n",
                      }}
                    />
                    <div className="fluid-engine fe-67365873e079254848629f58">
                      <div className="fe-block fe-block-8dccc2e6d400cbc42223">
                        <div
                          className="sqs-block html-block sqs-block-html"
                          data-blend-mode="NORMAL"
                          data-block-type={2}
                          data-border-radii='{"topLeft":{"unit":"px","value":0.0},"topRight":{"unit":"px","value":0.0},"bottomLeft":{"unit":"px","value":0.0},"bottomRight":{"unit":"px","value":0.0}}'
                          id="block-8dccc2e6d400cbc42223"
                        >
                          <div className="sqs-block-content">
                            <div className="sqs-html-content">
                              <h1 style={{ whiteSpace: "pre-wrap" }}>
                                <span
                                  className="sqsrte-text-color--custom"
                                  style={{ color: "#FFF6DC" }}
                                >
                                  <strong>{lang.heading_1 ?? ""}</strong>
                                </span>
                              </h1>
                              <h2 style={{ whiteSpace: "pre-wrap" }}>
                                <span
                                  className="sqsrte-text-color--custom"
                                  style={{ color: "#F8F2E0" }}
                                >
                                  {lang.heading_2 ?? ""}
                                </span>
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="fe-block fe-block-ae82cbcdda7b31e982b5">
                        <div
                          className="sqs-block image-block sqs-block-image sqs-stretched"
                          data-aspect-ratio="120.46077893582007"
                          data-block-type={5}
                          id="block-ae82cbcdda7b31e982b5"
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
                                    height: "100%",
                                  }}
                                >
                                  <div className="content-fill">
                                    <img
                                      data-stretch="true"
                                      data-image-dimensions="1528x1018"
                                      data-image-focal-point="0.5,0.5"
                                      alt="Photo of snake"
                                      data-load="false"
                                      elementtiming="system-image-block"
                                      src={lang.hero_img}
                                      width={1528}
                                      height={1018}
                                      sizes="100vw"
                                      style={{
                                        display: "block",
                                        objectFit: "cover",
                                        objectPosition: "50% 50%",
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
                                  "\n      .sqs-block-image .sqs-block-content {\n        height: 100%;\n        width: 100%;\n      }\n\n      \n        .fe-block-ae82cbcdda7b31e982b5 .fluidImageOverlay {\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          mix-blend-mode: normal;\n          \n            \n            \n          \n          \n            opacity: 0;\n          \n        }\n      \n    ",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="fe-block fe-block-37fcbce7711e5ef2f9d7">
                        <div
                          className="sqs-block html-block sqs-block-html"
                          data-blend-mode="NORMAL"
                          data-block-type={2}
                          data-border-radii='{"topLeft":{"unit":"px","value":0.0},"topRight":{"unit":"px","value":0.0},"bottomLeft":{"unit":"px","value":0.0},"bottomRight":{"unit":"px","value":0.0}}'
                          id="block-37fcbce7711e5ef2f9d7"
                        >
                          <div className="sqs-block-content">
                            <div className="sqs-html-content">
                              <p
                                className=""
                                style={{ whiteSpace: "pre-wrap" }}
                              >
                                <span className="sqsrte-text-color--black">
                                  <strong>{lang.author ?? ""}</strong>
                                </span>
                              </p>
                              <p
                                className=""
                                style={{ whiteSpace: "pre-wrap" }}
                              >
                                <span
                                  className="sqsrte-text-color--custom"
                                  style={{ color: "rgb(42, 101, 194)" }}
                                >
                                  <strong>
                                    {lang.facts?.map((fact, idx) => {
                                      const isLast =
                                        lang.facts?.length - 1 === idx;
                                      return (
                                        <>
                                          {fact}
                                          {!isLast && <br />}
                                        </>
                                      );
                                    })}
                                  </strong>
                                </span>
                              </p>
                              <p
                                className=""
                                style={{ whiteSpace: "pre-wrap" }}
                              >
                                <strong>
                                 {lang.subtext ?? ""}
                                </strong>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
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
              data-section-id="67365873e079254848629f6e"
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
                  paddingBottom: "calc(0vmax / 10)",
                }}
              >
                <div className="content">
                  <div data-fluid-engine="true">
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          "\n\n.fe-67365873e079254848629f6d {\n  --grid-gutter: calc(var(--sqs-mobile-site-gutter, 6vw) - 11.0px);\n  --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (8 - 1)) ) / 8 );\n\n  display: grid;\n  position: relative;\n  grid-area: 1/1/-1/-1;\n  grid-template-rows: repeat(19,minmax(24px, auto));\n  grid-template-columns:\n    minmax(var(--grid-gutter), 1fr)\n    repeat(8, minmax(0, var(--cell-max-width)))\n    minmax(var(--grid-gutter), 1fr);\n  row-gap: 11.0px;\n  column-gap: 11.0px;\n}\n\n@media (min-width: 768px) {\n  .background-width--inset .fe-67365873e079254848629f6d {\n    --inset-padding: calc(var(--sqs-site-gutter) * 2);\n  }\n\n  .fe-67365873e079254848629f6d {\n    --grid-gutter: calc(var(--sqs-site-gutter, 4vw) - 11.0px);\n    --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (24 - 1)) ) / 24 );\n    --inset-padding: 0vw;\n\n    --row-height-scaling-factor: 0.0215;\n    --container-width: min(var(--sqs-site-max-width, 1500px), calc(100vw - var(--sqs-site-gutter, 4vw) * 2 - var(--inset-padding) ));\n\n    grid-template-rows: repeat(18,minmax(calc(var(--container-width) * var(--row-height-scaling-factor)), auto));\n    grid-template-columns:\n      minmax(var(--grid-gutter), 1fr)\n      repeat(24, minmax(0, var(--cell-max-width)))\n      minmax(var(--grid-gutter), 1fr);\n  }\n}\n\n\n  .fe-block-6e3f7546dc58517fc2a4 {\n    grid-area: 7/2/8/5;\n    z-index: 9;\n\n    @media (max-width: 767px) {\n      \n        \n      \n    }\n  }\n\n  .fe-block-6e3f7546dc58517fc2a4 .sqs-block {\n    justify-content: flex-start;\n  }\n\n  .fe-block-6e3f7546dc58517fc2a4 .sqs-block-alignment-wrapper {\n    align-items: flex-start;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-6e3f7546dc58517fc2a4 {\n      grid-area: 2/10/4/14;\n      z-index: 9;\n\n      \n        \n      \n    }\n\n    .fe-block-6e3f7546dc58517fc2a4 .sqs-block {\n      justify-content: flex-start;\n    }\n\n    .fe-block-6e3f7546dc58517fc2a4 .sqs-block-alignment-wrapper {\n      align-items: flex-start;\n    }\n  }\n\n  .fe-block-yui_3_17_2_1_1732823011610_51088 {\n    grid-area: 7/6/8/10;\n    z-index: 8;\n\n    @media (max-width: 767px) {\n      \n        \n      \n    }\n  }\n\n  .fe-block-yui_3_17_2_1_1732823011610_51088 .sqs-block {\n    justify-content: flex-start;\n  }\n\n  .fe-block-yui_3_17_2_1_1732823011610_51088 .sqs-block-alignment-wrapper {\n    align-items: flex-start;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-yui_3_17_2_1_1732823011610_51088 {\n      grid-area: 10/10/12/14;\n      z-index: 8;\n\n      \n        \n      \n    }\n\n    .fe-block-yui_3_17_2_1_1732823011610_51088 .sqs-block {\n      justify-content: flex-start;\n    }\n\n    .fe-block-yui_3_17_2_1_1732823011610_51088 .sqs-block-alignment-wrapper {\n      align-items: flex-start;\n    }\n  }\n\n  .fe-block-a2c7c62f9dfecdc9d3e9 {\n    grid-area: 1/5/2/10;\n    z-index: 10;\n\n    @media (max-width: 767px) {\n      \n        \n      \n    }\n  }\n\n  .fe-block-a2c7c62f9dfecdc9d3e9 .sqs-block {\n    justify-content: flex-start;\n  }\n\n  .fe-block-a2c7c62f9dfecdc9d3e9 .sqs-block-alignment-wrapper {\n    align-items: flex-start;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-a2c7c62f9dfecdc9d3e9 {\n      grid-area: 2/18/5/24;\n      z-index: 10;\n\n      \n        \n      \n    }\n\n    .fe-block-a2c7c62f9dfecdc9d3e9 .sqs-block {\n      justify-content: flex-start;\n    }\n\n    .fe-block-a2c7c62f9dfecdc9d3e9 .sqs-block-alignment-wrapper {\n      align-items: flex-start;\n    }\n  }\n\n  .fe-block-yui_3_17_2_1_1732823011610_49919 {\n    grid-area: 1/2/2/10;\n    z-index: 7;\n\n    @media (max-width: 767px) {\n      \n        \n      \n    }\n  }\n\n  .fe-block-yui_3_17_2_1_1732823011610_49919 .sqs-block {\n    justify-content: flex-start;\n  }\n\n  .fe-block-yui_3_17_2_1_1732823011610_49919 .sqs-block-alignment-wrapper {\n    align-items: flex-start;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-yui_3_17_2_1_1732823011610_49919 {\n      grid-area: 2/2/5/9;\n      z-index: 7;\n\n      \n        \n      \n    }\n\n    .fe-block-yui_3_17_2_1_1732823011610_49919 .sqs-block {\n      justify-content: flex-start;\n    }\n\n    .fe-block-yui_3_17_2_1_1732823011610_49919 .sqs-block-alignment-wrapper {\n      align-items: flex-start;\n    }\n  }\n\n  .fe-block-53b576bb773a8bbcf45f {\n    grid-area: 13/2/14/6;\n    z-index: 9;\n\n    @media (max-width: 767px) {\n      \n        \n      \n    }\n  }\n\n  .fe-block-53b576bb773a8bbcf45f .sqs-block {\n    justify-content: flex-start;\n  }\n\n  .fe-block-53b576bb773a8bbcf45f .sqs-block-alignment-wrapper {\n    align-items: flex-start;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-53b576bb773a8bbcf45f {\n      grid-area: 10/2/12/6;\n      z-index: 9;\n\n      \n        \n      \n    }\n\n    .fe-block-53b576bb773a8bbcf45f .sqs-block {\n      justify-content: flex-start;\n    }\n\n    .fe-block-53b576bb773a8bbcf45f .sqs-block-alignment-wrapper {\n      align-items: flex-start;\n    }\n  }\n\n  .fe-block-c9d24ce50e9c03cdebae {\n    grid-area: 13/6/14/10;\n    z-index: 10;\n\n    @media (max-width: 767px) {\n      \n        \n      \n    }\n  }\n\n  .fe-block-c9d24ce50e9c03cdebae .sqs-block {\n    justify-content: flex-start;\n  }\n\n  .fe-block-c9d24ce50e9c03cdebae .sqs-block-alignment-wrapper {\n    align-items: flex-start;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-c9d24ce50e9c03cdebae {\n      grid-area: 10/18/12/22;\n      z-index: 10;\n\n      \n        \n      \n    }\n\n    .fe-block-c9d24ce50e9c03cdebae .sqs-block {\n      justify-content: flex-start;\n    }\n\n    .fe-block-c9d24ce50e9c03cdebae .sqs-block-alignment-wrapper {\n      align-items: flex-start;\n    }\n  }\n\n  .fe-block-a5ea5ba2ad2a2c061843 {\n    grid-area: 2/6/7/10;\n    z-index: 4;\n\n    @media (max-width: 767px) {\n      \n    }\n  }\n\n  .fe-block-a5ea5ba2ad2a2c061843 .sqs-block {\n    justify-content: center;\n  }\n\n  .fe-block-a5ea5ba2ad2a2c061843 .sqs-block-alignment-wrapper {\n    align-items: center;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-a5ea5ba2ad2a2c061843 {\n      grid-area: 3/18/10/26;\n      z-index: 4;\n\n      \n    }\n\n    .fe-block-a5ea5ba2ad2a2c061843 .sqs-block {\n      justify-content: center;\n    }\n\n    .fe-block-a5ea5ba2ad2a2c061843 .sqs-block-alignment-wrapper {\n      align-items: center;\n    }\n  }\n\n  .fe-block-b9f88af1b130ceda9014 {\n    grid-area: 2/2/7/6;\n    z-index: 2;\n\n    @media (max-width: 767px) {\n      \n    }\n  }\n\n  .fe-block-b9f88af1b130ceda9014 .sqs-block {\n    justify-content: center;\n  }\n\n  .fe-block-b9f88af1b130ceda9014 .sqs-block-alignment-wrapper {\n    align-items: center;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-b9f88af1b130ceda9014 {\n      grid-area: 3/2/10/10;\n      z-index: 2;\n\n      \n    }\n\n    .fe-block-b9f88af1b130ceda9014 .sqs-block {\n      justify-content: center;\n    }\n\n    .fe-block-b9f88af1b130ceda9014 .sqs-block-alignment-wrapper {\n      align-items: center;\n    }\n  }\n\n  .fe-block-e5e64f71db5996c56ed1 {\n    grid-area: 8/6/13/10;\n    z-index: 5;\n\n    @media (max-width: 767px) {\n      \n    }\n  }\n\n  .fe-block-e5e64f71db5996c56ed1 .sqs-block {\n    justify-content: center;\n  }\n\n  .fe-block-e5e64f71db5996c56ed1 .sqs-block-alignment-wrapper {\n    align-items: center;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-e5e64f71db5996c56ed1 {\n      grid-area: 11/10/18/18;\n      z-index: 5;\n\n      \n    }\n\n    .fe-block-e5e64f71db5996c56ed1 .sqs-block {\n      justify-content: center;\n    }\n\n    .fe-block-e5e64f71db5996c56ed1 .sqs-block-alignment-wrapper {\n      align-items: center;\n    }\n  }\n\n  .fe-block-9c204c205a50a3bec286 {\n    grid-area: 8/2/13/6;\n    z-index: 3;\n\n    @media (max-width: 767px) {\n      \n    }\n  }\n\n  .fe-block-9c204c205a50a3bec286 .sqs-block {\n    justify-content: center;\n  }\n\n  .fe-block-9c204c205a50a3bec286 .sqs-block-alignment-wrapper {\n    align-items: center;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-9c204c205a50a3bec286 {\n      grid-area: 3/10/10/18;\n      z-index: 3;\n\n      \n    }\n\n    .fe-block-9c204c205a50a3bec286 .sqs-block {\n      justify-content: center;\n    }\n\n    .fe-block-9c204c205a50a3bec286 .sqs-block-alignment-wrapper {\n      align-items: center;\n    }\n  }\n\n  .fe-block-ff6ba14720c80e6b3c3a {\n    grid-area: 14/6/19/10;\n    z-index: 5;\n\n    @media (max-width: 767px) {\n      \n    }\n  }\n\n  .fe-block-ff6ba14720c80e6b3c3a .sqs-block {\n    justify-content: center;\n  }\n\n  .fe-block-ff6ba14720c80e6b3c3a .sqs-block-alignment-wrapper {\n    align-items: center;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-ff6ba14720c80e6b3c3a {\n      grid-area: 11/18/18/26;\n      z-index: 5;\n\n      \n    }\n\n    .fe-block-ff6ba14720c80e6b3c3a .sqs-block {\n      justify-content: center;\n    }\n\n    .fe-block-ff6ba14720c80e6b3c3a .sqs-block-alignment-wrapper {\n      align-items: center;\n    }\n  }\n\n  .fe-block-8476f67cc7ac47d7d76a {\n    grid-area: 14/2/19/6;\n    z-index: 3;\n\n    @media (max-width: 767px) {\n      \n    }\n  }\n\n  .fe-block-8476f67cc7ac47d7d76a .sqs-block {\n    justify-content: center;\n  }\n\n  .fe-block-8476f67cc7ac47d7d76a .sqs-block-alignment-wrapper {\n    align-items: center;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-8476f67cc7ac47d7d76a {\n      grid-area: 11/2/18/10;\n      z-index: 3;\n\n      \n    }\n\n    .fe-block-8476f67cc7ac47d7d76a .sqs-block {\n      justify-content: center;\n    }\n\n    .fe-block-8476f67cc7ac47d7d76a .sqs-block-alignment-wrapper {\n      align-items: center;\n    }\n  }\n\n",
                      }}
                    />
                    <div className="fluid-engine fe-67365873e079254848629f6d">
                      <div className="fe-block fe-block-6e3f7546dc58517fc2a4">
                        <div
                          className="sqs-block html-block sqs-block-html"
                          data-blend-mode="NORMAL"
                          data-block-type={2}
                          data-border-radii='{"topLeft":{"unit":"px","value":0.0},"topRight":{"unit":"px","value":0.0},"bottomLeft":{"unit":"px","value":0.0},"bottomRight":{"unit":"px","value":0.0}}'
                          id="block-6e3f7546dc58517fc2a4"
                        >
                          <div className="sqs-block-content">
                            <div className="sqs-html-content">
                              <h4 style={{ whiteSpace: "pre-wrap" }}>
                                <span
                                  className="sqsrte-text-color--custom"
                                  style={{ color: "#FFFCF3" }}
                                >
                                  {lang.cards[1].title}
                                </span>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="fe-block fe-block-yui_3_17_2_1_1732823011610_51088">
                        <div
                          className="sqs-block html-block sqs-block-html"
                          data-blend-mode="NORMAL"
                          data-block-type={2}
                          data-border-radii='{"topLeft":{"unit":"px","value":0.0},"topRight":{"unit":"px","value":0.0},"bottomLeft":{"unit":"px","value":0.0},"bottomRight":{"unit":"px","value":0.0}}'
                          id="block-yui_3_17_2_1_1732823011610_51088"
                        >
                          <div className="sqs-block-content">
                            <div className="sqs-html-content">
                              <h4
                                style={{
                                  textAlign: "right",
                                  whiteSpace: "pre-wrap",
                                }}
                              >
                                <span
                                  className="sqsrte-text-color--custom"
                                  style={{ color: "#FFFCF3" }}
                                >
                                  {lang.cards[4].title}
                                </span>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="fe-block fe-block-a2c7c62f9dfecdc9d3e9">
                        <div
                          className="sqs-block html-block sqs-block-html"
                          data-blend-mode="NORMAL"
                          data-block-type={2}
                          data-border-radii='{"topLeft":{"unit":"px","value":0.0},"topRight":{"unit":"px","value":0.0},"bottomLeft":{"unit":"px","value":0.0},"bottomRight":{"unit":"px","value":0.0}}'
                          id="block-a2c7c62f9dfecdc9d3e9"
                        >
                          <div className="sqs-block-content">
                            <div className="sqs-html-content">
                              <h4
                                style={{
                                  textAlign: "right",
                                  whiteSpace: "pre-wrap",
                                }}
                              >
                                <span
                                  className="sqsrte-text-color--custom"
                                  style={{ color: "#FFFCF3" }}
                                >
                                  {lang.cards[2].title}
                                </span>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="fe-block fe-block-yui_3_17_2_1_1732823011610_49919">
                        <div
                          className="sqs-block html-block sqs-block-html"
                          data-blend-mode="NORMAL"
                          data-block-type={2}
                          data-border-radii='{"topLeft":{"unit":"px","value":0.0},"topRight":{"unit":"px","value":0.0},"bottomLeft":{"unit":"px","value":0.0},"bottomRight":{"unit":"px","value":0.0}}'
                          id="block-yui_3_17_2_1_1732823011610_49919"
                        >
                          <div className="sqs-block-content">
                            <div className="sqs-html-content">
                              <h4 style={{ whiteSpace: "pre-wrap" }}>
                                <span
                                  className="sqsrte-text-color--custom"
                                  style={{ color: "#FFFCF3" }}
                                >
                                  {lang.cards[0].title}
                                </span>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="fe-block fe-block-53b576bb773a8bbcf45f">
                        <div
                          className="sqs-block html-block sqs-block-html"
                          data-blend-mode="NORMAL"
                          data-block-type={2}
                          data-border-radii='{"topLeft":{"unit":"px","value":0.0},"topRight":{"unit":"px","value":0.0},"bottomLeft":{"unit":"px","value":0.0},"bottomRight":{"unit":"px","value":0.0}}'
                          id="block-53b576bb773a8bbcf45f"
                        >
                          <div className="sqs-block-content">
                            <div className="sqs-html-content">
                              <h4 style={{ whiteSpace: "pre-wrap" }}>
                                <span
                                  className="sqsrte-text-color--custom"
                                  style={{ color: "#FFFCF3" }}
                                >
                                  {lang.cards[3].title}
                                </span>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="fe-block fe-block-c9d24ce50e9c03cdebae">
                        <div
                          className="sqs-block html-block sqs-block-html"
                          data-blend-mode="NORMAL"
                          data-block-type={2}
                          data-border-radii='{"topLeft":{"unit":"px","value":0.0},"topRight":{"unit":"px","value":0.0},"bottomLeft":{"unit":"px","value":0.0},"bottomRight":{"unit":"px","value":0.0}}'
                          id="block-c9d24ce50e9c03cdebae"
                        >
                          <div className="sqs-block-content">
                            <div className="sqs-html-content">
                              <h4
                                style={{
                                  textAlign: "right",
                                  whiteSpace: "pre-wrap",
                                }}
                              >
                                <span
                                  className="sqsrte-text-color--custom"
                                  style={{ color: "#FFFCF3" }}
                                >
                                  {lang.cards[5].title}
                                </span>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="fe-block fe-block-a5ea5ba2ad2a2c061843">
                        <div
                          className="sqs-block image-block sqs-block-image sqs-stretched"
                          data-aspect-ratio="94.13586220243855"
                          data-block-type={5}
                          id="block-a5ea5ba2ad2a2c061843"
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
                                    height: "100%",
                                  }}
                                >
                                  <div className="content-fill">
                                    <img
                                      data-stretch="true"
                                      // data-src="https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/dc2e68a5-0978-430a-9324-0b0c13dbfa77/medicine-doctor-team-2023-11-27-05-35-55-utc.jpg"
                                      // data-image="https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/dc2e68a5-0978-430a-9324-0b0c13dbfa77/medicine-doctor-team-2023-11-27-05-35-55-utc.jpg"
                                      data-image-dimensions="2500x1514"
                                      data-image-focal-point="0.5,0.5"
                                      alt="Photo of service section"
                                      data-load="false"
                                      elementtiming="system-image-block"
                                      src={lang.cards[2].img}
                                      width={2500}
                                      height={1514}
                                      sizes="100vw"
                                      style={{
                                        display: "block",
                                        objectFit: "cover",
                                        objectPosition: "50% 50%",
                                      }}
                                      // srcSet="https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/dc2e68a5-0978-430a-9324-0b0c13dbfa77/medicine-doctor-team-2023-11-27-05-35-55-utc.jpg?format=100w 100w, https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/dc2e68a5-0978-430a-9324-0b0c13dbfa77/medicine-doctor-team-2023-11-27-05-35-55-utc.jpg?format=300w 300w, https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/dc2e68a5-0978-430a-9324-0b0c13dbfa77/medicine-doctor-team-2023-11-27-05-35-55-utc.jpg?format=500w 500w, https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/dc2e68a5-0978-430a-9324-0b0c13dbfa77/medicine-doctor-team-2023-11-27-05-35-55-utc.jpg?format=750w 750w, https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/dc2e68a5-0978-430a-9324-0b0c13dbfa77/medicine-doctor-team-2023-11-27-05-35-55-utc.jpg?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/dc2e68a5-0978-430a-9324-0b0c13dbfa77/medicine-doctor-team-2023-11-27-05-35-55-utc.jpg?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/dc2e68a5-0978-430a-9324-0b0c13dbfa77/medicine-doctor-team-2023-11-27-05-35-55-utc.jpg?format=2500w 2500w"
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
                                  "\n      .sqs-block-image .sqs-block-content {\n        height: 100%;\n        width: 100%;\n      }\n\n      \n        .fe-block-a5ea5ba2ad2a2c061843 .fluidImageOverlay {\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          mix-blend-mode: normal;\n          \n            \n            \n          \n          \n            opacity: 0;\n          \n        }\n      \n    ",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="fe-block fe-block-b9f88af1b130ceda9014">
                        <div
                          className="sqs-block image-block sqs-block-image sqs-stretched"
                          data-aspect-ratio="94.13586220243855"
                          data-block-type={5}
                          id="block-b9f88af1b130ceda9014"
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
                                    height: "100%",
                                  }}
                                >
                                  <div className="content-fill">
                                    <img
                                      data-stretch="true"
                                      data-image-dimensions="1666x1457"
                                      data-image-focal-point="0.5,0.5"
                                      alt="Photo of service section"
                                      data-load="false"
                                      elementtiming="system-image-block"
                                      src={lang.cards[0].img}
                                      width={1666}
                                      height={1457}
                                      sizes="100vw"
                                      style={{
                                        display: "block",
                                        objectFit: "cover",
                                        objectPosition: "50% 50%",
                                      }}
                                      srcSet="https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/3593ea90-aca6-4cd5-8cc5-dcef4ab215a4/portrait-of-happy-children-with-arms-around-sittin-2023-11-27-05-14-34-utc.jpg?format=100w 100w, https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/3593ea90-aca6-4cd5-8cc5-dcef4ab215a4/portrait-of-happy-children-with-arms-around-sittin-2023-11-27-05-14-34-utc.jpg?format=300w 300w, https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/3593ea90-aca6-4cd5-8cc5-dcef4ab215a4/portrait-of-happy-children-with-arms-around-sittin-2023-11-27-05-14-34-utc.jpg?format=500w 500w, https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/3593ea90-aca6-4cd5-8cc5-dcef4ab215a4/portrait-of-happy-children-with-arms-around-sittin-2023-11-27-05-14-34-utc.jpg?format=750w 750w, https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/3593ea90-aca6-4cd5-8cc5-dcef4ab215a4/portrait-of-happy-children-with-arms-around-sittin-2023-11-27-05-14-34-utc.jpg?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/3593ea90-aca6-4cd5-8cc5-dcef4ab215a4/portrait-of-happy-children-with-arms-around-sittin-2023-11-27-05-14-34-utc.jpg?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/3593ea90-aca6-4cd5-8cc5-dcef4ab215a4/portrait-of-happy-children-with-arms-around-sittin-2023-11-27-05-14-34-utc.jpg?format=2500w 2500w"
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
                                  "\n      .sqs-block-image .sqs-block-content {\n        height: 100%;\n        width: 100%;\n      }\n\n      \n        .fe-block-b9f88af1b130ceda9014 .fluidImageOverlay {\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          mix-blend-mode: normal;\n          \n            \n            \n          \n          \n            opacity: 0;\n          \n        }\n      \n    ",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="fe-block fe-block-e5e64f71db5996c56ed1">
                        <div
                          className="sqs-block image-block sqs-block-image sqs-stretched"
                          data-aspect-ratio="94.13586220243855"
                          data-block-type={5}
                          id="block-e5e64f71db5996c56ed1"
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
                                    height: "100%",
                                  }}
                                >
                                  <div className="content-fill">
                                    <img
                                      data-stretch="true"
                                      data-image-dimensions="2500x1667"
                                      data-image-focal-point="0.5,0.5"
                                      alt="Photo of service section"
                                      data-load="false"
                                      elementtiming="system-image-block"
                                      src={lang.cards[4].img}
                                      width={2500}
                                      height={1667}
                                      sizes="100vw"
                                      style={{
                                        display: "block",
                                        objectFit: "cover",
                                        objectPosition: "50% 50%",
                                      }}
                                      srcSet="https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/7e7616b7-0584-4ef9-94bd-cd1a718e7dd4/instructor-teaching-golf-to-two-children-in-a-cour-2024-09-05-19-59-47-utc.png?format=100w 100w, https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/7e7616b7-0584-4ef9-94bd-cd1a718e7dd4/instructor-teaching-golf-to-two-children-in-a-cour-2024-09-05-19-59-47-utc.png?format=300w 300w, https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/7e7616b7-0584-4ef9-94bd-cd1a718e7dd4/instructor-teaching-golf-to-two-children-in-a-cour-2024-09-05-19-59-47-utc.png?format=500w 500w, https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/7e7616b7-0584-4ef9-94bd-cd1a718e7dd4/instructor-teaching-golf-to-two-children-in-a-cour-2024-09-05-19-59-47-utc.png?format=750w 750w, https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/7e7616b7-0584-4ef9-94bd-cd1a718e7dd4/instructor-teaching-golf-to-two-children-in-a-cour-2024-09-05-19-59-47-utc.png?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/7e7616b7-0584-4ef9-94bd-cd1a718e7dd4/instructor-teaching-golf-to-two-children-in-a-cour-2024-09-05-19-59-47-utc.png?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/7e7616b7-0584-4ef9-94bd-cd1a718e7dd4/instructor-teaching-golf-to-two-children-in-a-cour-2024-09-05-19-59-47-utc.png?format=2500w 2500w"
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
                                  "\n      .sqs-block-image .sqs-block-content {\n        height: 100%;\n        width: 100%;\n      }\n\n      \n        .fe-block-e5e64f71db5996c56ed1 .fluidImageOverlay {\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          mix-blend-mode: normal;\n          \n            \n            \n          \n          \n            opacity: 0;\n          \n        }\n      \n    ",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="fe-block fe-block-9c204c205a50a3bec286">
                        <div
                          className="sqs-block image-block sqs-block-image sqs-stretched"
                          data-aspect-ratio="94.13586220243855"
                          data-block-type={5}
                          id="block-9c204c205a50a3bec286"
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
                                    height: "100%",
                                  }}
                                >
                                  <div className="content-fill">
                                    <img
                                      data-stretch="true"
                                      data-image-dimensions="2500x1667"
                                      data-image-focal-point="0.5,0.5"
                                      alt="Photo of service section"
                                      data-load="false"
                                      elementtiming="system-image-block"
                                      src={lang.cards[1].img}
                                      width={2500}
                                      height={1667}
                                      sizes="100vw"
                                      style={{
                                        display: "block",
                                        objectFit: "cover",
                                        objectPosition: "50% 50%",
                                      }}
                                      srcSet="https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/7ab208a3-481f-48e2-bc39-d9c7a949d68a/young-family-with-two-kids-enjoy-summer-vacation-i-2023-11-27-05-03-52-utc.jpg?format=100w 100w, https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/7ab208a3-481f-48e2-bc39-d9c7a949d68a/young-family-with-two-kids-enjoy-summer-vacation-i-2023-11-27-05-03-52-utc.jpg?format=300w 300w, https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/7ab208a3-481f-48e2-bc39-d9c7a949d68a/young-family-with-two-kids-enjoy-summer-vacation-i-2023-11-27-05-03-52-utc.jpg?format=500w 500w, https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/7ab208a3-481f-48e2-bc39-d9c7a949d68a/young-family-with-two-kids-enjoy-summer-vacation-i-2023-11-27-05-03-52-utc.jpg?format=750w 750w, https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/7ab208a3-481f-48e2-bc39-d9c7a949d68a/young-family-with-two-kids-enjoy-summer-vacation-i-2023-11-27-05-03-52-utc.jpg?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/7ab208a3-481f-48e2-bc39-d9c7a949d68a/young-family-with-two-kids-enjoy-summer-vacation-i-2023-11-27-05-03-52-utc.jpg?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/7ab208a3-481f-48e2-bc39-d9c7a949d68a/young-family-with-two-kids-enjoy-summer-vacation-i-2023-11-27-05-03-52-utc.jpg?format=2500w 2500w"
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
                                  "\n      .sqs-block-image .sqs-block-content {\n        height: 100%;\n        width: 100%;\n      }\n\n      \n        .fe-block-9c204c205a50a3bec286 .fluidImageOverlay {\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          mix-blend-mode: normal;\n          \n            \n            \n          \n          \n            opacity: 0;\n          \n        }\n      \n    ",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="fe-block fe-block-ff6ba14720c80e6b3c3a">
                        <div
                          className="sqs-block image-block sqs-block-image sqs-stretched"
                          data-aspect-ratio="94.13586220243855"
                          data-block-type={5}
                          id="block-ff6ba14720c80e6b3c3a"
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
                                    height: "100%",
                                  }}
                                >
                                  <div className="content-fill">
                                    <img
                                      data-stretch="true"
                                      data-image-dimensions="2500x1669"
                                      data-image-focal-point="0.5,0.5"
                                      alt="Photo of service section"
                                      data-load="false"
                                      elementtiming="system-image-block"
                                      src={lang.cards[5].img}
                                      width={2500}
                                      height={1669}
                                      sizes="100vw"
                                      style={{
                                        display: "block",
                                        objectFit: "cover",
                                        objectPosition: "50% 50%",
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
                                  "\n      .sqs-block-image .sqs-block-content {\n        height: 100%;\n        width: 100%;\n      }\n\n      \n        .fe-block-ff6ba14720c80e6b3c3a .fluidImageOverlay {\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          mix-blend-mode: normal;\n          \n            \n            \n          \n          \n            opacity: 0;\n          \n        }\n      \n    ",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="fe-block fe-block-8476f67cc7ac47d7d76a">
                        <div
                          className="sqs-block image-block sqs-block-image sqs-stretched"
                          data-aspect-ratio="94.13586220243855"
                          data-block-type={5}
                          id="block-8476f67cc7ac47d7d76a"
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
                                    height: "100%",
                                  }}
                                >
                                  <div className="content-fill">
                                    <img
                                      data-stretch="true"
                                      data-image-dimensions="2500x1553"
                                      data-image-focal-point="0.5,0.5"
                                      alt="Photo of service section"
                                      data-load="false"
                                      elementtiming="system-image-block"
                                      src={lang.cards[3].img}
                                      width={2500}
                                      height={1553}
                                      sizes="100vw"
                                      style={{
                                        display: "block",
                                        objectFit: "cover",
                                        objectPosition: "50% 50%",
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
                                  "\n      .sqs-block-image .sqs-block-content {\n        height: 100%;\n        width: 100%;\n      }\n\n      \n        .fe-block-8476f67cc7ac47d7d76a .fluidImageOverlay {\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          mix-blend-mode: normal;\n          \n            \n            \n          \n          \n            opacity: 0;\n          \n        }\n      \n    ",
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
            <section
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
              data-section-id="67365873e079254848629f3e"
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
"backgroundMode": "image",
"generative": {
"type": "gradient",
"seed": 0,
"count": 0,
"size": 0,
"speed": 0,
"startColor": {
"type": "SITE_PALETTE_COLOR",
"sitePaletteColor": {
"id": "accent",
"alpha": 1.0
}
},
"endColor": {
"type": "SITE_PALETTE_COLOR",
"sitePaletteColor": {
"id": "lightAccent",
"alpha": 1.0
}
},
"invertColors": false,
"noiseIntensity": 0,
"noiseScale": 0,
"distortionScaleX": 0,
"distortionScaleY": 0,
"distortionSpeed": 5,
"distortionIntensity": 50,
"lightIntensity": 0,
"lightX": 0,
"bevelRotation": 0,
"bevelSize": 0,
"bevelStrength": 0,
"complexity": 0,
"cutoff": 0,
"isBevelEnabled": false,
"isBlurEnabled": false,
"scale": 0,
"speedMorph": 0,
"speedTravel": 0,
"steps": 0,
"travelDirection": 0,
"gradientType": "linear",
"noiseBias": -50,
"animateNoise": false,
"distortionComplexity": 22,
"distortionDirection": 270,
"distortionMorphSpeed": 25,
"distortionSeed": 50,
"distortionSmoothness": 100,
"linearGradientStartColorDistance": -93,
"linearGradientEndColorDistance": 100,
"linearGradientAngle": 270,
"linearGradientAngleMotion": 0,
"linearGradientRepeat": 1,
"radialGradientRadius": 0,
"radialGradientPositionX": 0,
"radialGradientPositionY": 0,
"radialGradientFollowCursor": false,
"radialGradientFollowSpeed": 0,
"imageScale": 0,
"imageCount": 0,
"patternEnabled": false,
"patternSize": 0,
"patternOffsetX": 0,
"patternOffsetY": 0,
"patternSpaceX": 0,
"patternSpaceY": 0,
"waveEnabled": false,
"waveSpeed": 0,
"waveComplexity": 0,
"waveDepth": 0,
"waveShadowDepth": 0,
"boxSize": 0.0,
"scaleX": 0,
"scaleY": 0,
"scaleZ": 0,
"isMorphEnabled": false,
"lightY": 0,
"lightZ": 0,
"noiseRange": 0,
"positionFactor": 0,
"scaleFactor": 0,
"colorFactor": 0,
"sizeVariance": 0,
"wobble": 0,
"morph": 0,
"scrollMovement": 0,
"patternScaleX": 0,
"patternScaleY": 0,
"patternPowerX": 0,
"patternPowerY": 0,
"patternAmount": 0,
"surfaceHeight": 0,
"colorStop1": 0,
"colorStop2": 0,
"colorStop3": 0,
"colorStop4": 0,
"gradientDistortionX": 0,
"gradientDistortionY": 0,
"curveX": 0,
"curveY": 0,
"curveFunnel": 0,
"fogIntensity": 0,
"repeat": 0,
"rotation": 0,
"rotationSpeed": 0,
"blur": 0,
"complexityY": 0,
"complexityZ": 0,
"amplitudeY": 0,
"amplitudeZ": 0,
"offset": 0,
"lightAngle": 0,
"alpha": 0
}
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
                  paddingBottom: "calc(0vmax / 10)",
                }}
              >
                <div className="content">
                  <div data-fluid-engine="true">
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          "\n\n.fe-67365873e079254848629f3d {\n  --grid-gutter: calc(var(--sqs-mobile-site-gutter, 6vw) - 11.0px);\n  --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (8 - 1)) ) / 8 );\n\n  display: grid;\n  position: relative;\n  grid-area: 1/1/-1/-1;\n  grid-template-rows: repeat(58,minmax(24px, auto));\n  grid-template-columns:\n    minmax(var(--grid-gutter), 1fr)\n    repeat(8, minmax(0, var(--cell-max-width)))\n    minmax(var(--grid-gutter), 1fr);\n  row-gap: 11.0px;\n  column-gap: 11.0px;\n}\n\n@media (min-width: 768px) {\n  .background-width--inset .fe-67365873e079254848629f3d {\n    --inset-padding: calc(var(--sqs-site-gutter) * 2);\n  }\n\n  .fe-67365873e079254848629f3d {\n    --grid-gutter: calc(var(--sqs-site-gutter, 4vw) - 11.0px);\n    --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (24 - 1)) ) / 24 );\n    --inset-padding: 0vw;\n\n    --row-height-scaling-factor: 0.0215;\n    --container-width: min(var(--sqs-site-max-width, 1500px), calc(100vw - var(--sqs-site-gutter, 4vw) * 2 - var(--inset-padding) ));\n\n    grid-template-rows: repeat(19,minmax(calc(var(--container-width) * var(--row-height-scaling-factor)), auto));\n    grid-template-columns:\n      minmax(var(--grid-gutter), 1fr)\n      repeat(24, minmax(0, var(--cell-max-width)))\n      minmax(var(--grid-gutter), 1fr);\n  }\n}\n\n\n  .fe-block-0cd843cafb8ac83bf192 {\n    grid-area: 1/2/4/10;\n    z-index: 4;\n\n    @media (max-width: 767px) {\n      \n    }\n  }\n\n  .fe-block-0cd843cafb8ac83bf192 .sqs-block {\n    justify-content: flex-start;\n  }\n\n  .fe-block-0cd843cafb8ac83bf192 .sqs-block-alignment-wrapper {\n    align-items: flex-start;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-0cd843cafb8ac83bf192 {\n      grid-area: 2/2/4/18;\n      z-index: 1;\n\n      \n    }\n\n    .fe-block-0cd843cafb8ac83bf192 .sqs-block {\n      justify-content: flex-start;\n    }\n\n    .fe-block-0cd843cafb8ac83bf192 .sqs-block-alignment-wrapper {\n      align-items: flex-start;\n    }\n  }\n\n  .fe-block-3f8dd36dc1a86d1c28c7 {\n    grid-area: 2/2/4/10;\n    z-index: 5;\n\n    @media (max-width: 767px) {\n      \n    }\n  }\n\n  .fe-block-3f8dd36dc1a86d1c28c7 .sqs-block {\n    justify-content: center;\n  }\n\n  .fe-block-3f8dd36dc1a86d1c28c7 .sqs-block-alignment-wrapper {\n    align-items: center;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-3f8dd36dc1a86d1c28c7 {\n      grid-area: 12/2/13/8;\n      z-index: 3;\n\n      \n    }\n\n    .fe-block-3f8dd36dc1a86d1c28c7 .sqs-block {\n      justify-content: flex-start;\n    }\n\n    .fe-block-3f8dd36dc1a86d1c28c7 .sqs-block-alignment-wrapper {\n      align-items: flex-start;\n    }\n  }\n\n  .fe-block-5f90e74144ad64ed0b70 {\n    grid-area: 4/2/11/10;\n    z-index: 9;\n\n    @media (max-width: 767px) {\n      \n        \n      \n    }\n  }\n\n  .fe-block-5f90e74144ad64ed0b70 .sqs-block {\n    justify-content: center;\n  }\n\n  .fe-block-5f90e74144ad64ed0b70 .sqs-block-alignment-wrapper {\n    align-items: center;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-5f90e74144ad64ed0b70 {\n      grid-area: 4/2/12/8;\n      z-index: 2;\n\n      \n        \n      \n    }\n\n    .fe-block-5f90e74144ad64ed0b70 .sqs-block {\n      justify-content: center;\n    }\n\n    .fe-block-5f90e74144ad64ed0b70 .sqs-block-alignment-wrapper {\n      align-items: center;\n    }\n  }\n\n  .fe-block-c706cfadb8184a37be5c {\n    grid-area: 11/2/18/10;\n    z-index: 6;\n\n    @media (max-width: 767px) {\n      \n    }\n  }\n\n  .fe-block-c706cfadb8184a37be5c .sqs-block {\n    justify-content: flex-start;\n  }\n\n  .fe-block-c706cfadb8184a37be5c .sqs-block-alignment-wrapper {\n    align-items: flex-start;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-c706cfadb8184a37be5c {\n      grid-area: 13/2/19/8;\n      z-index: 4;\n\n      \n    }\n\n    .fe-block-c706cfadb8184a37be5c .sqs-block {\n      justify-content: flex-start;\n    }\n\n    .fe-block-c706cfadb8184a37be5c .sqs-block-alignment-wrapper {\n      align-items: flex-start;\n    }\n  }\n\n  .fe-block-6d0127160902547fe960 {\n    grid-area: 18/2/20/10;\n    z-index: 7;\n\n    @media (max-width: 767px) {\n      \n    }\n  }\n\n  .fe-block-6d0127160902547fe960 .sqs-block {\n    justify-content: center;\n  }\n\n  .fe-block-6d0127160902547fe960 .sqs-block-alignment-wrapper {\n    align-items: center;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-6d0127160902547fe960 {\n      grid-area: 12/8/14/14;\n      z-index: 7;\n\n      \n    }\n\n    .fe-block-6d0127160902547fe960 .sqs-block {\n      justify-content: flex-start;\n    }\n\n    .fe-block-6d0127160902547fe960 .sqs-block-alignment-wrapper {\n      align-items: flex-start;\n    }\n  }\n\n  .fe-block-2186046109853a726753 {\n    grid-area: 20/2/27/10;\n    z-index: 10;\n\n    @media (max-width: 767px) {\n      \n        \n      \n    }\n  }\n\n  .fe-block-2186046109853a726753 .sqs-block {\n    justify-content: center;\n  }\n\n  .fe-block-2186046109853a726753 .sqs-block-alignment-wrapper {\n    align-items: center;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-2186046109853a726753 {\n      grid-area: 4/8/12/14;\n      z-index: 3;\n\n      \n        \n      \n    }\n\n    .fe-block-2186046109853a726753 .sqs-block {\n      justify-content: center;\n    }\n\n    .fe-block-2186046109853a726753 .sqs-block-alignment-wrapper {\n      align-items: center;\n    }\n  }\n\n  .fe-block-ea40ba0b95f853f5eda2 {\n    grid-area: 27/2/34/10;\n    z-index: 8;\n\n    @media (max-width: 767px) {\n      \n    }\n  }\n\n  .fe-block-ea40ba0b95f853f5eda2 .sqs-block {\n    justify-content: flex-start;\n  }\n\n  .fe-block-ea40ba0b95f853f5eda2 .sqs-block-alignment-wrapper {\n    align-items: flex-start;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-ea40ba0b95f853f5eda2 {\n      grid-area: 14/8/20/14;\n      z-index: 8;\n\n      \n    }\n\n    .fe-block-ea40ba0b95f853f5eda2 .sqs-block {\n      justify-content: flex-start;\n    }\n\n    .fe-block-ea40ba0b95f853f5eda2 .sqs-block-alignment-wrapper {\n      align-items: flex-start;\n    }\n  }\n\n  .fe-block-cc22f5a7e2fc3e4658fd {\n    grid-area: 33/2/35/10;\n    z-index: 8;\n\n    @media (max-width: 767px) {\n      \n    }\n  }\n\n  .fe-block-cc22f5a7e2fc3e4658fd .sqs-block {\n    justify-content: center;\n  }\n\n  .fe-block-cc22f5a7e2fc3e4658fd .sqs-block-alignment-wrapper {\n    align-items: center;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-cc22f5a7e2fc3e4658fd {\n      grid-area: 12/14/13/20;\n      z-index: 8;\n\n      \n    }\n\n    .fe-block-cc22f5a7e2fc3e4658fd .sqs-block {\n      justify-content: flex-start;\n    }\n\n    .fe-block-cc22f5a7e2fc3e4658fd .sqs-block-alignment-wrapper {\n      align-items: flex-start;\n    }\n  }\n\n  .fe-block-a7f393f42f7fa8a2a44a {\n    grid-area: 35/2/42/10;\n    z-index: 12;\n\n    @media (max-width: 767px) {\n      \n        \n      \n    }\n  }\n\n  .fe-block-a7f393f42f7fa8a2a44a .sqs-block {\n    justify-content: center;\n  }\n\n  .fe-block-a7f393f42f7fa8a2a44a .sqs-block-alignment-wrapper {\n    align-items: center;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-a7f393f42f7fa8a2a44a {\n      grid-area: 4/14/12/20;\n      z-index: 5;\n\n      \n        \n      \n    }\n\n    .fe-block-a7f393f42f7fa8a2a44a .sqs-block {\n      justify-content: center;\n    }\n\n    .fe-block-a7f393f42f7fa8a2a44a .sqs-block-alignment-wrapper {\n      align-items: center;\n    }\n  }\n\n  .fe-block-500f3fdbcfd775d85441 {\n    grid-area: 42/2/47/10;\n    z-index: 9;\n\n    @media (max-width: 767px) {\n      \n    }\n  }\n\n  .fe-block-500f3fdbcfd775d85441 .sqs-block {\n    justify-content: flex-start;\n  }\n\n  .fe-block-500f3fdbcfd775d85441 .sqs-block-alignment-wrapper {\n    align-items: flex-start;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-500f3fdbcfd775d85441 {\n      grid-area: 13/14/17/20;\n      z-index: 9;\n\n      \n    }\n\n    .fe-block-500f3fdbcfd775d85441 .sqs-block {\n      justify-content: flex-start;\n    }\n\n    .fe-block-500f3fdbcfd775d85441 .sqs-block-alignment-wrapper {\n      align-items: flex-start;\n    }\n  }\n\n  .fe-block-10cfe91445be32035ed9 {\n    grid-area: 47/2/49/10;\n    z-index: 8;\n\n    @media (max-width: 767px) {\n      \n    }\n  }\n\n  .fe-block-10cfe91445be32035ed9 .sqs-block {\n    justify-content: center;\n  }\n\n  .fe-block-10cfe91445be32035ed9 .sqs-block-alignment-wrapper {\n    align-items: center;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-10cfe91445be32035ed9 {\n      grid-area: 12/21/14/26;\n      z-index: 8;\n\n      \n    }\n\n    .fe-block-10cfe91445be32035ed9 .sqs-block {\n      justify-content: flex-start;\n    }\n\n    .fe-block-10cfe91445be32035ed9 .sqs-block-alignment-wrapper {\n      align-items: flex-start;\n    }\n  }\n\n  .fe-block-8a00c94bf653721969bc {\n    grid-area: 49/2/56/10;\n    z-index: 11;\n\n    @media (max-width: 767px) {\n      \n        \n      \n    }\n  }\n\n  .fe-block-8a00c94bf653721969bc .sqs-block {\n    justify-content: center;\n  }\n\n  .fe-block-8a00c94bf653721969bc .sqs-block-alignment-wrapper {\n    align-items: center;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-8a00c94bf653721969bc {\n      grid-area: 4/20/12/26;\n      z-index: 4;\n\n      \n        \n      \n    }\n\n    .fe-block-8a00c94bf653721969bc .sqs-block {\n      justify-content: center;\n    }\n\n    .fe-block-8a00c94bf653721969bc .sqs-block-alignment-wrapper {\n      align-items: center;\n    }\n  }\n\n  .fe-block-fa276e37b328d12dfc1a {\n    grid-area: 56/2/59/10;\n    z-index: 10;\n\n    @media (max-width: 767px) {\n      \n    }\n  }\n\n  .fe-block-fa276e37b328d12dfc1a .sqs-block {\n    justify-content: flex-start;\n  }\n\n  .fe-block-fa276e37b328d12dfc1a .sqs-block-alignment-wrapper {\n    align-items: flex-start;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-fa276e37b328d12dfc1a {\n      grid-area: 14/20/17/26;\n      z-index: 10;\n\n      \n    }\n\n    .fe-block-fa276e37b328d12dfc1a .sqs-block {\n      justify-content: flex-start;\n    }\n\n    .fe-block-fa276e37b328d12dfc1a .sqs-block-alignment-wrapper {\n      align-items: flex-start;\n    }\n  }\n\n",
                      }}
                    />
                    <div className="fluid-engine fe-67365873e079254848629f3d">
                      <div className="fe-block fe-block-0cd843cafb8ac83bf192">
                        <div
                          className="sqs-block html-block sqs-block-html"
                          data-blend-mode="NORMAL"
                          data-block-type={2}
                          data-border-radii='{"topLeft":{"unit":"px","value":0.0},"topRight":{"unit":"px","value":0.0},"bottomLeft":{"unit":"px","value":0.0},"bottomRight":{"unit":"px","value":0.0}}'
                          id="block-0cd843cafb8ac83bf192"
                        >
                          <div className="sqs-block-content">
                            <div className="sqs-html-content">
                              <h1 style={{ whiteSpace: "pre-wrap" }}>
                                <span
                                  className="sqsrte-text-color--custom"
                                  style={{ color: "#FFFCF3" }}
                                >
                                  <strong>{lang.service_heading ?? ""}</strong>{" "}
                                </span>
                              </h1>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="fe-block fe-block-3f8dd36dc1a86d1c28c7">
                        <div
                          className="sqs-block html-block sqs-block-html"
                          data-blend-mode="NORMAL"
                          data-block-type={2}
                          data-border-radii='{"topLeft":{"unit":"px","value":0.0},"topRight":{"unit":"px","value":0.0},"bottomLeft":{"unit":"px","value":0.0},"bottomRight":{"unit":"px","value":0.0}}'
                          id="block-3f8dd36dc1a86d1c28c7"
                        >
                          <div className="sqs-block-content">
                            <div className="sqs-html-content">
                              <h4 style={{ whiteSpace: "pre-wrap" }}>
                                <a href="/services">
                                  <span
                                    className="sqsrte-text-color--custom"
                                    style={{ color: "#FFFCF3" }}
                                  >
                                    <strong>{lang.service_cards[0].service}</strong>
                                  </span>
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="fe-block fe-block-5f90e74144ad64ed0b70">
                        <div
                          className="sqs-block image-block sqs-block-image sqs-stretched"
                          data-aspect-ratio="98.54397204426326"
                          data-block-type={5}
                          id="block-5f90e74144ad64ed0b70"
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
                                    height: "100%",
                                  }}
                                >
                                  <a
                                    className="sqs-block-image-link content-fill"
                                    href="/services"
                                  >
                                    <img
                                      data-stretch="true"
                                      data-image-dimensions="1414x1074"
                                      data-image-focal-point="0.5,0.5"
                                      alt="Photo of service section"
                                      data-load="false"
                                      elementtiming="system-image-block"
                                      src={lang.service_cards[0].img}
                                      width={1414}
                                      height={1074}
                                      sizes="100vw"
                                      style={{
                                        display: "block",
                                        objectFit: "cover",
                                        objectPosition: "50% 50%",
                                      }}
                                      loading="lazy"
                                      decoding="async"
                                      data-loader="sqs"
                                    />
                                    <div className="fluidImageOverlay" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <style
                              dangerouslySetInnerHTML={{
                                __html:
                                  "\n      .sqs-block-image .sqs-block-content {\n        height: 100%;\n        width: 100%;\n      }\n\n      \n        .fe-block-5f90e74144ad64ed0b70 .fluidImageOverlay {\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          mix-blend-mode: normal;\n          \n            \n            \n          \n          \n            opacity: 0;\n          \n        }\n      \n    ",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="fe-block fe-block-c706cfadb8184a37be5c">
                        <div
                          className="sqs-block html-block sqs-block-html"
                          data-blend-mode="NORMAL"
                          data-block-type={2}
                          data-border-radii='{"topLeft":{"unit":"px","value":0.0},"topRight":{"unit":"px","value":0.0},"bottomLeft":{"unit":"px","value":0.0},"bottomRight":{"unit":"px","value":0.0}}'
                          id="block-c706cfadb8184a37be5c"
                        >
                          <div className="sqs-block-content">
                            <div className="sqs-html-content">
                              <ul data-rte-list="default">
                                {lang.service_cards[0]?.bullets?.map(bullet=><li>
                                  <p
                                    className=""
                                    style={{ whiteSpace: "pre-wrap" }}
                                  >
                                    <strong>
                                      {bullet}
                                    </strong>
                                  </p>
                                </li>)}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="fe-block fe-block-6d0127160902547fe960">
                        <div
                          className="sqs-block html-block sqs-block-html"
                          data-blend-mode="NORMAL"
                          data-block-type={2}
                          data-border-radii='{"topLeft":{"unit":"px","value":0.0},"topRight":{"unit":"px","value":0.0},"bottomLeft":{"unit":"px","value":0.0},"bottomRight":{"unit":"px","value":0.0}}'
                          id="block-6d0127160902547fe960"
                        >
                          <div className="sqs-block-content">
                            <div className="sqs-html-content">
                              <h4 style={{ whiteSpace: "pre-wrap" }}>
                                <a href="/services">
                                  <span
                                    className="sqsrte-text-color--custom"
                                    style={{ color: "#FFFCF3" }}
                                  >
                                    <strong>
                                    {lang.service_cards[1].service}
                                    </strong>
                                  </span>
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="fe-block fe-block-2186046109853a726753">
                        <div
                          className="sqs-block image-block sqs-block-image sqs-stretched"
                          data-aspect-ratio="98.54397204426326"
                          data-block-type={5}
                          id="block-2186046109853a726753"
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
                                    height: "100%",
                                  }}
                                >
                                  <a
                                    className="sqs-block-image-link content-fill"
                                    href="/services"
                                  >
                                    <img
                                      data-stretch="true"
                                      data-image-dimensions="2500x1875"
                                      data-image-focal-point="0.5,0.5"
                                      alt=""
                                      data-load="false"
                                      elementtiming="system-image-block"
                                      src={lang.service_cards[1].img}
                                      width={2500}
                                      height={1875}
                                      sizes="100vw"
                                      style={{
                                        display: "block",
                                        objectFit: "cover",
                                        objectPosition: "50% 50%",
                                      }}
                                      loading="lazy"
                                      decoding="async"
                                      data-loader="sqs"
                                    />
                                    <div className="fluidImageOverlay" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <style
                              dangerouslySetInnerHTML={{
                                __html:
                                  "\n      .sqs-block-image .sqs-block-content {\n        height: 100%;\n        width: 100%;\n      }\n\n      \n        .fe-block-2186046109853a726753 .fluidImageOverlay {\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          mix-blend-mode: normal;\n          \n            \n            \n          \n          \n            opacity: 0;\n          \n        }\n      \n    ",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="fe-block fe-block-ea40ba0b95f853f5eda2">
                        <div
                          className="sqs-block html-block sqs-block-html"
                          data-blend-mode="NORMAL"
                          data-block-type={2}
                          data-border-radii='{"topLeft":{"unit":"px","value":0.0},"topRight":{"unit":"px","value":0.0},"bottomLeft":{"unit":"px","value":0.0},"bottomRight":{"unit":"px","value":0.0}}'
                          id="block-ea40ba0b95f853f5eda2"
                        >
                          <div className="sqs-block-content">
                            <div className="sqs-html-content">
                              <ul data-rte-list="default">
                              {lang.service_cards[1]?.bullets?.map(bullet=><li>
                                  <p
                                    className=""
                                    style={{ whiteSpace: "pre-wrap" }}
                                  >
                                    <strong>
                                      {bullet}
                                    </strong>
                                  </p>
                                </li>)}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="fe-block fe-block-cc22f5a7e2fc3e4658fd">
                        <div
                          className="sqs-block html-block sqs-block-html"
                          data-blend-mode="NORMAL"
                          data-block-type={2}
                          data-border-radii='{"topLeft":{"unit":"px","value":0.0},"topRight":{"unit":"px","value":0.0},"bottomLeft":{"unit":"px","value":0.0},"bottomRight":{"unit":"px","value":0.0}}'
                          id="block-cc22f5a7e2fc3e4658fd"
                        >
                          <div className="sqs-block-content">
                            <div className="sqs-html-content">
                              <h4 style={{ whiteSpace: "pre-wrap" }}>
                                <a href="/services">
                                  <span
                                    className="sqsrte-text-color--custom"
                                    style={{ color: "#FFFCF3" }}
                                  >
                                    <strong>
                                    {lang.service_cards[2].service}
                                    </strong>
                                  </span>
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="fe-block fe-block-a7f393f42f7fa8a2a44a">
                        <div
                          className="sqs-block image-block sqs-block-image sqs-stretched"
                          data-aspect-ratio="98.54397204426326"
                          data-block-type={5}
                          id="block-a7f393f42f7fa8a2a44a"
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
                                    height: "100%",
                                  }}
                                >
                                  <a
                                    className="sqs-block-image-link content-fill"
                                    href="/services"
                                  >
                                    <img
                                      data-stretch="true"
                                      data-image-dimensions="2500x1668"
                                      data-image-focal-point="0.5,0.5"
                                      alt=""
                                      data-load="false"
                                      elementtiming="system-image-block"
                                      src={lang.service_cards[2].img}
                                      width={2500}
                                      height={1668}
                                      sizes="100vw"
                                      style={{
                                        display: "block",
                                        objectFit: "cover",
                                        objectPosition: "50% 50%",
                                      }}
                                      loading="lazy"
                                      decoding="async"
                                      data-loader="sqs"
                                    />
                                    <div className="fluidImageOverlay" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <style
                              dangerouslySetInnerHTML={{
                                __html:
                                  "\n      .sqs-block-image .sqs-block-content {\n        height: 100%;\n        width: 100%;\n      }\n\n      \n        .fe-block-a7f393f42f7fa8a2a44a .fluidImageOverlay {\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          mix-blend-mode: normal;\n          \n            \n            \n          \n          \n            opacity: 0;\n          \n        }\n      \n    ",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="fe-block fe-block-500f3fdbcfd775d85441 ">
                        <div
                          className="sqs-block html-block sqs-block-html"
                          data-blend-mode="NORMAL"
                          data-block-type={2}
                          data-border-radii='{"topLeft":{"unit":"px","value":0.0},"topRight":{"unit":"px","value":0.0},"bottomLeft":{"unit":"px","value":0.0},"bottomRight":{"unit":"px","value":0.0}}'
                          id="block-500f3fdbcfd775d85441"
                        >
                          <div className="sqs-block-content">
                            <div className="sqs-html-content">
                              <ul data-rte-list="default">
                              {lang.service_cards[2]?.bullets?.map(bullet=><li>
                                  <p
                                    className=""
                                    style={{ whiteSpace: "pre-wrap" }}
                                  >
                                    <strong>
                                      {bullet}
                                    </strong>
                                  </p>
                                </li>)}
                              </ul>
                             
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="fe-block fe-block-10cfe91445be32035ed9">
                        <div
                          className="sqs-block html-block sqs-block-html"
                          data-blend-mode="NORMAL"
                          data-block-type={2}
                          data-border-radii='{"topLeft":{"unit":"px","value":0.0},"topRight":{"unit":"px","value":0.0},"bottomLeft":{"unit":"px","value":0.0},"bottomRight":{"unit":"px","value":0.0}}'
                          id="block-10cfe91445be32035ed9"
                        >
                          <div className="sqs-block-content">
                            <div className="sqs-html-content">
                              <h4 style={{ whiteSpace: "pre-wrap" }}>
                                <a href="/services">
                                  <span
                                    className="sqsrte-text-color--custom"
                                    style={{ color: "#FFFCF3" }}
                                  >
                                    <strong>
                                    {lang.service_cards[3].service}
                                    </strong>
                                  </span>
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="fe-block fe-block-8a00c94bf653721969bc">
                        <div
                          className="sqs-block image-block sqs-block-image sqs-stretched"
                          data-aspect-ratio="98.54397204426326"
                          data-block-type={5}
                          id="block-8a00c94bf653721969bc"
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
                                    height: "100%",
                                  }}
                                >
                                  <a
                                    className="sqs-block-image-link content-fill"
                                    href="/services"
                                  >
                                    <img
                                      data-stretch="true"
                                      data-image-dimensions="1667x1667"
                                      data-image-focal-point="0.5,0.5"
                                      alt=""
                                      data-load="false"
                                      elementtiming="system-image-block"
                                      src={lang.service_cards[3].img}
                                      width={1667}
                                      height={1667}
                                      sizes="100vw"
                                      style={{
                                        display: "block",
                                        objectFit: "cover",
                                        objectPosition: "50% 50%",
                                      }}
                                      loading="lazy"
                                      decoding="async"
                                      data-loader="sqs"
                                    />
                                    <div className="fluidImageOverlay" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <style
                              dangerouslySetInnerHTML={{
                                __html:
                                  "\n      .sqs-block-image .sqs-block-content {\n        height: 100%;\n        width: 100%;\n      }\n\n      \n        .fe-block-8a00c94bf653721969bc .fluidImageOverlay {\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          mix-blend-mode: normal;\n          \n            \n            \n          \n          \n            opacity: 0;\n          \n        }\n      \n    ",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="fe-block fe-block-fa276e37b328d12dfc1a">
                        <div
                          className="sqs-block html-block sqs-block-html"
                          data-blend-mode="NORMAL"
                          data-block-type={2}
                          data-border-radii='{"topLeft":{"unit":"px","value":0.0},"topRight":{"unit":"px","value":0.0},"bottomLeft":{"unit":"px","value":0.0},"bottomRight":{"unit":"px","value":0.0}}'
                          id="block-fa276e37b328d12dfc1a"
                        >
                          <div className="sqs-block-content">
                            <div className="sqs-html-content">
                              <ul data-rte-list="default">
                              {lang.service_cards[3]?.bullets?.map(bullet=><li>
                                  <p
                                    className=""
                                    style={{ whiteSpace: "pre-wrap" }}
                                  >
                                    <strong>
                                      {bullet}
                                    </strong>
                                  </p>
                                </li>)}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              data-test="page-section"
              data-section-theme=""
              className="page-section 
    
full-bleed-section
layout-engine-section
    
    background-width--full-bleed
    

  section-height--custom

    
    
content-width--wide
    
    horizontal-alignment--center
    vertical-alignment--middle
    

    
    
    "
              data-section-id="6748de024de860114a51216f"
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
"sectionTheme": "",
"sectionAnimation": "none",
"backgroundMode": "image"
}'
              data-current-context='{
"video": {
"playbackSpeed": 0.5,
"filter": 2,
"filterStrength": 0,
"zoom": 0,
"videoSourceProvider": "none"
},
"backgroundImageId": null,
"backgroundMediaEffect": null,
"divider": null,
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
                  paddingBottom: "calc(0vmax / 10)",
                }}
              >
                <div className="content">
                  <div data-fluid-engine="true">
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          "\n\n.fe-6748de024de860114a51216e {\n  --grid-gutter: calc(var(--sqs-mobile-site-gutter, 6vw) - 11.0px);\n  --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (8 - 1)) ) / 8 );\n\n  display: grid;\n  position: relative;\n  grid-area: 1/1/-1/-1;\n  grid-template-rows: repeat(16,minmax(24px, auto));\n  grid-template-columns:\n    minmax(var(--grid-gutter), 1fr)\n    repeat(8, minmax(0, var(--cell-max-width)))\n    minmax(var(--grid-gutter), 1fr);\n  row-gap: 11.0px;\n  column-gap: 11.0px;\n}\n\n@media (min-width: 768px) {\n  .background-width--inset .fe-6748de024de860114a51216e {\n    --inset-padding: calc(var(--sqs-site-gutter) * 2);\n  }\n\n  .fe-6748de024de860114a51216e {\n    --grid-gutter: calc(var(--sqs-site-gutter, 4vw) - 11.0px);\n    --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (24 - 1)) ) / 24 );\n    --inset-padding: 0vw;\n\n    --row-height-scaling-factor: 0.0215;\n    --container-width: min(var(--sqs-site-max-width, 1500px), calc(100vw - var(--sqs-site-gutter, 4vw) * 2 - var(--inset-padding) ));\n\n    grid-template-rows: repeat(12,minmax(calc(var(--container-width) * var(--row-height-scaling-factor)), auto));\n    grid-template-columns:\n      minmax(var(--grid-gutter), 1fr)\n      repeat(24, minmax(0, var(--cell-max-width)))\n      minmax(var(--grid-gutter), 1fr);\n  }\n}\n\n\n  .fe-block-f510fbeb818e8e6fb8d4 {\n    grid-area: 2/2/9/10;\n    z-index: 0;\n\n    @media (max-width: 767px) {\n      \n    }\n  }\n\n  .fe-block-f510fbeb818e8e6fb8d4 .sqs-block {\n    justify-content: center;\n  }\n\n  .fe-block-f510fbeb818e8e6fb8d4 .sqs-block-alignment-wrapper {\n    align-items: center;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-f510fbeb818e8e6fb8d4 {\n      grid-area: 2/2/13/14;\n      z-index: 0;\n\n      \n    }\n\n    .fe-block-f510fbeb818e8e6fb8d4 .sqs-block {\n      justify-content: center;\n    }\n\n    .fe-block-f510fbeb818e8e6fb8d4 .sqs-block-alignment-wrapper {\n      align-items: center;\n    }\n  }\n\n  .fe-block-yui_3_17_2_1_1732823011610_155505 {\n    grid-area: 1/2/3/10;\n    z-index: 2;\n\n    @media (max-width: 767px) {\n      \n        \n      \n    }\n  }\n\n  .fe-block-yui_3_17_2_1_1732823011610_155505 .sqs-block {\n    justify-content: flex-start;\n  }\n\n  .fe-block-yui_3_17_2_1_1732823011610_155505 .sqs-block-alignment-wrapper {\n    align-items: flex-start;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-yui_3_17_2_1_1732823011610_155505 {\n      grid-area: 1/2/3/8;\n      z-index: 2;\n\n      \n        \n      \n    }\n\n    .fe-block-yui_3_17_2_1_1732823011610_155505 .sqs-block {\n      justify-content: flex-start;\n    }\n\n    .fe-block-yui_3_17_2_1_1732823011610_155505 .sqs-block-alignment-wrapper {\n      align-items: flex-start;\n    }\n  }\n\n  .fe-block-632ebd672cf9573708e6 {\n    grid-area: 10/2/17/10;\n    z-index: 1;\n\n    @media (max-width: 767px) {\n      \n    }\n  }\n\n  .fe-block-632ebd672cf9573708e6 .sqs-block {\n    justify-content: center;\n  }\n\n  .fe-block-632ebd672cf9573708e6 .sqs-block-alignment-wrapper {\n    align-items: center;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-632ebd672cf9573708e6 {\n      grid-area: 2/14/13/26;\n      z-index: 1;\n\n      \n    }\n\n    .fe-block-632ebd672cf9573708e6 .sqs-block {\n      justify-content: center;\n    }\n\n    .fe-block-632ebd672cf9573708e6 .sqs-block-alignment-wrapper {\n      align-items: center;\n    }\n  }\n\n  .fe-block-c685e555273ad089fd31 {\n    grid-area: 9/2/11/10;\n    z-index: 3;\n\n    @media (max-width: 767px) {\n      \n        \n      \n    }\n  }\n\n  .fe-block-c685e555273ad089fd31 .sqs-block {\n    justify-content: flex-start;\n  }\n\n  .fe-block-c685e555273ad089fd31 .sqs-block-alignment-wrapper {\n    align-items: flex-start;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-c685e555273ad089fd31 {\n      grid-area: 1/14/4/24;\n      z-index: 3;\n\n      \n        \n      \n    }\n\n    .fe-block-c685e555273ad089fd31 .sqs-block {\n      justify-content: flex-start;\n    }\n\n    .fe-block-c685e555273ad089fd31 .sqs-block-alignment-wrapper {\n      align-items: flex-start;\n    }\n  }\n\n",
                      }}
                    />
                    <div className="fluid-engine fe-6748de024de860114a51216e">
                      <div className="fe-block fe-block-f510fbeb818e8e6fb8d4">
                        <div
                          className="sqs-block image-block sqs-block-image sqs-stretched"
                          data-aspect-ratio="117.43295019157087"
                          data-block-type={5}
                          id="block-f510fbeb818e8e6fb8d4"
                        >
                          <div className="sqs-block-content">
                            <div
                              className="
  image-block-outer-wrapper
  layout-caption-below
  design-layout-fluid
  image-position-right
  combination-animation-none
  individual-animation-none
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
                                    height: "100%",
                                  }}
                                >
                                  <div className="content-fill">
                                    <img
                                      data-stretch="true"
                                      data-image-dimensions="2500x1667"
                                      data-image-focal-point="0.5,0.5"
                                      alt=""
                                      data-load="false"
                                      elementtiming="system-image-block"
                                      src={lang.column_1.img}
                                      width={2500}
                                      height={1667}
                                      sizes="100vw"
                                      style={{
                                        display: "block",
                                        objectFit: "cover",
                                        objectPosition: "50% 50%",
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
                                  "\n      .sqs-block-image .sqs-block-content {\n        height: 100%;\n        width: 100%;\n      }\n\n      \n        .fe-block-f510fbeb818e8e6fb8d4 .fluidImageOverlay {\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          mix-blend-mode: normal;\n          \n            \n            \n          \n          \n            opacity: 0;\n          \n        }\n      \n    ",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="fe-block fe-block-yui_3_17_2_1_1732823011610_155505">
                        <div
                          className="sqs-block html-block sqs-block-html"
                          data-blend-mode="NORMAL"
                          data-block-type={2}
                          data-border-radii='{"topLeft":{"unit":"px","value":0.0},"topRight":{"unit":"px","value":0.0},"bottomLeft":{"unit":"px","value":0.0},"bottomRight":{"unit":"px","value":0.0}}'
                          id="block-yui_3_17_2_1_1732823011610_155505"
                        >
                          <div className="sqs-block-content">
                            <div className="sqs-html-content">
                              <h3 style={{ whiteSpace: "pre-wrap" }}>
                                <span
                                  className="sqsrte-text-color--custom"
                                  style={{ color: "#FFFCF3" }}
                                >
                                  <strong>{lang.column_1.title ?? ""}</strong>
                                </span>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="fe-block fe-block-632ebd672cf9573708e6">
                        <div
                          className="sqs-block image-block sqs-block-image sqs-stretched"
                          data-aspect-ratio="117.43295019157087"
                          data-block-type={5}
                          id="block-632ebd672cf9573708e6"
                        >
                          <div className="sqs-block-content">
                            <div
                              className="
  image-block-outer-wrapper
  layout-caption-below
  design-layout-fluid
  image-position-right
  combination-animation-none
  individual-animation-none
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
                                    height: "100%",
                                  }}
                                >
                                  <div className="content-fill">
                                    <img
                                      data-stretch="true"
                                      data-image-dimensions="2500x1667"
                                      data-image-focal-point="0.5,0.5"
                                      alt="Group photo"
                                      data-load="false"
                                      elementtiming="system-image-block"
                                      src={lang.column_2.img}
                                      width={2500}
                                      height={1667}
                                      sizes="100vw"
                                      style={{
                                        display: "block",
                                        objectFit: "cover",
                                        objectPosition: "50% 50%",
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
                                  "\n      .sqs-block-image .sqs-block-content {\n        height: 100%;\n        width: 100%;\n      }\n\n      \n        .fe-block-632ebd672cf9573708e6 .fluidImageOverlay {\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          mix-blend-mode: normal;\n          \n            \n            \n          \n          \n            opacity: 0;\n          \n        }\n      \n    ",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="fe-block fe-block-c685e555273ad089fd31">
                        <div
                          className="sqs-block html-block sqs-block-html"
                          data-blend-mode="NORMAL"
                          data-block-type={2}
                          data-border-radii='{"topLeft":{"unit":"px","value":0.0},"topRight":{"unit":"px","value":0.0},"bottomLeft":{"unit":"px","value":0.0},"bottomRight":{"unit":"px","value":0.0}}'
                          id="block-c685e555273ad089fd31"
                        >
                          <div className="sqs-block-content">
                            <div className="sqs-html-content">
                              <h3 style={{ whiteSpace: "pre-wrap" }}>
                                <span
                                  className="sqsrte-text-color--custom"
                                  style={{ color: "#FFFCF3" }}
                                >
                                  <strong>{lang.column_2.title}</strong>
                                </span>
                              </h3>
                            </div>
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
  );
}
