import React, {useEffect, useState} from 'react'
import Header from '@/app/components/header/Header';
import Content from "../content/about.json";
import { useSelector } from 'react-redux';
import Footer from "@/app/components/footer/Footer";
import '../src/styles/styles.css';

const about = () => {
  const { english, spanish } = Content;
  const language = useSelector((state) => state.language.language);
  const [lang, setLang] = useState(english);

  useEffect(()=>{
    language === "en"? setLang(english) : setLang(spanish)
  }, [language])

  return (
    <>
  <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <base href="" />
  <meta charSet="utf-8" />
  <title>About — SNAKE-SAFE. Real Science. Real Safety.</title>
  <meta
    httpEquiv="Accept-CH"
    content="Sec-CH-UA-Platform-Version, Sec-CH-UA-Model"
  />
  <link
    rel="icon"
    type="image/x-icon"
    href="https://assets.squarespace.com/universal/default-favicon.ico"
  />
  <link rel="canonical" href="https://sepia-plum-s8c9.squarespace.com/about" />
  <meta
    property="og:site_name"
    content="SNAKE-SAFE. Real Science. Real Safety."
  />
  <meta
    property="og:title"
    content="About — SNAKE-SAFE. Real Science. Real Safety."
  />
  <meta
    property="og:url"
    content="https://sepia-plum-s8c9.squarespace.com/about"
  />
  <meta property="og:type" content="website" />
  <meta
    itemProp="name"
    content="About — SNAKE-SAFE. Real Science. Real Safety."
  />
  <meta
    itemProp="url"
    content="https://sepia-plum-s8c9.squarespace.com/about"
  />
  <meta
    name="twitter:title"
    content="About — SNAKE-SAFE. Real Science. Real Safety."
  />
  <meta
    name="twitter:url"
    content="https://sepia-plum-s8c9.squarespace.com/about"
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
  {/* End of Squarespace Headers */}
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
  <Header/>
    <main id="page" className="container" role="main">
      <article
        className="sections"
        id="sections"
        data-page-sections="67365873e079254848629df6"
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
          data-section-id="67365873e079254848629ec5"
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
                      "\n\n.fe-67365873e079254848629ec4 {\n  --grid-gutter: calc(var(--sqs-mobile-site-gutter, 6vw) - 11.0px);\n  --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (8 - 1)) ) / 8 );\n\n  display: grid;\n  position: relative;\n  grid-area: 1/1/-1/-1;\n  grid-template-rows: repeat(51,minmax(24px, auto));\n  grid-template-columns:\n    minmax(var(--grid-gutter), 1fr)\n    repeat(8, minmax(0, var(--cell-max-width)))\n    minmax(var(--grid-gutter), 1fr);\n  row-gap: 11.0px;\n  column-gap: 11.0px;\n}\n\n@media (min-width: 768px) {\n  .background-width--inset .fe-67365873e079254848629ec4 {\n    --inset-padding: calc(var(--sqs-site-gutter) * 2);\n  }\n\n  .fe-67365873e079254848629ec4 {\n    --grid-gutter: calc(var(--sqs-site-gutter, 4vw) - 11.0px);\n    --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (24 - 1)) ) / 24 );\n    --inset-padding: 0vw;\n\n    --row-height-scaling-factor: 0.0215;\n    --container-width: min(var(--sqs-site-max-width, 1500px), calc(100vw - var(--sqs-site-gutter, 4vw) * 2 - var(--inset-padding) ));\n\n    grid-template-rows: repeat(16,minmax(calc(var(--container-width) * var(--row-height-scaling-factor)), auto));\n    grid-template-columns:\n      minmax(var(--grid-gutter), 1fr)\n      repeat(24, minmax(0, var(--cell-max-width)))\n      minmax(var(--grid-gutter), 1fr);\n  }\n}\n\n\n  .fe-block-7e8fcdf9dd0961098dac {\n    grid-area: 3/2/5/10;\n    z-index: 2;\n\n    @media (max-width: 767px) {\n      \n    }\n  }\n\n  .fe-block-7e8fcdf9dd0961098dac .sqs-block {\n    justify-content: flex-start;\n  }\n\n  .fe-block-7e8fcdf9dd0961098dac .sqs-block-alignment-wrapper {\n    align-items: flex-start;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-7e8fcdf9dd0961098dac {\n      grid-area: 1/2/4/14;\n      z-index: 2;\n\n      \n    }\n\n    .fe-block-7e8fcdf9dd0961098dac .sqs-block {\n      justify-content: center;\n    }\n\n    .fe-block-7e8fcdf9dd0961098dac .sqs-block-alignment-wrapper {\n      align-items: center;\n    }\n  }\n\n  .fe-block-55359c0f14cc1720942d {\n    grid-area: 5/2/13/10;\n    z-index: 3;\n\n    @media (max-width: 767px) {\n      \n    }\n  }\n\n  .fe-block-55359c0f14cc1720942d .sqs-block {\n    justify-content: flex-start;\n  }\n\n  .fe-block-55359c0f14cc1720942d .sqs-block-alignment-wrapper {\n    align-items: flex-start;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-55359c0f14cc1720942d {\n      grid-area: 4/2/17/11;\n      z-index: 3;\n\n      \n    }\n\n    .fe-block-55359c0f14cc1720942d .sqs-block {\n      justify-content: flex-start;\n    }\n\n    .fe-block-55359c0f14cc1720942d .sqs-block-alignment-wrapper {\n      align-items: flex-start;\n    }\n  }\n\n  .fe-block-0f32cdccdecb33cd65cd {\n    grid-area: 14/2/28/10;\n    z-index: 1;\n\n    @media (max-width: 767px) {\n      \n    }\n  }\n\n  .fe-block-0f32cdccdecb33cd65cd .sqs-block {\n    justify-content: center;\n  }\n\n  .fe-block-0f32cdccdecb33cd65cd .sqs-block-alignment-wrapper {\n    align-items: center;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-0f32cdccdecb33cd65cd {\n      grid-area: 4/11/10/21;\n      z-index: 1;\n\n      \n    }\n\n    .fe-block-0f32cdccdecb33cd65cd .sqs-block {\n      justify-content: center;\n    }\n\n    .fe-block-0f32cdccdecb33cd65cd .sqs-block-alignment-wrapper {\n      align-items: center;\n    }\n  }\n\n  .fe-block-cae3fcc7c152eb9d15fa {\n    grid-area: 28/2/34/10;\n    z-index: 5;\n\n    @media (max-width: 767px) {\n      \n        \n      \n    }\n  }\n\n  .fe-block-cae3fcc7c152eb9d15fa .sqs-block {\n    justify-content: center;\n  }\n\n  .fe-block-cae3fcc7c152eb9d15fa .sqs-block-alignment-wrapper {\n    align-items: center;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-cae3fcc7c152eb9d15fa {\n      grid-area: 10/11/16/16;\n      z-index: 5;\n\n      \n        \n      \n    }\n\n    .fe-block-cae3fcc7c152eb9d15fa .sqs-block {\n      justify-content: center;\n    }\n\n    .fe-block-cae3fcc7c152eb9d15fa .sqs-block-alignment-wrapper {\n      align-items: center;\n    }\n  }\n\n  .fe-block-yui_3_17_2_1_1732851041591_33298 {\n    grid-area: 34/2/40/10;\n    z-index: 4;\n\n    @media (max-width: 767px) {\n      \n        \n      \n    }\n  }\n\n  .fe-block-yui_3_17_2_1_1732851041591_33298 .sqs-block {\n    justify-content: center;\n  }\n\n  .fe-block-yui_3_17_2_1_1732851041591_33298 .sqs-block-alignment-wrapper {\n    align-items: center;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-yui_3_17_2_1_1732851041591_33298 {\n      grid-area: 10/16/16/21;\n      z-index: 4;\n\n      \n        \n      \n    }\n\n    .fe-block-yui_3_17_2_1_1732851041591_33298 .sqs-block {\n      justify-content: center;\n    }\n\n    .fe-block-yui_3_17_2_1_1732851041591_33298 .sqs-block-alignment-wrapper {\n      align-items: center;\n    }\n  }\n\n  .fe-block-a44316c988c84bacf140 {\n    grid-area: 40/2/46/10;\n    z-index: 6;\n\n    @media (max-width: 767px) {\n      \n        \n      \n    }\n  }\n\n  .fe-block-a44316c988c84bacf140 .sqs-block {\n    justify-content: center;\n  }\n\n  .fe-block-a44316c988c84bacf140 .sqs-block-alignment-wrapper {\n    align-items: center;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-a44316c988c84bacf140 {\n      grid-area: 4/21/10/26;\n      z-index: 6;\n\n      \n        \n      \n    }\n\n    .fe-block-a44316c988c84bacf140 .sqs-block {\n      justify-content: center;\n    }\n\n    .fe-block-a44316c988c84bacf140 .sqs-block-alignment-wrapper {\n      align-items: center;\n    }\n  }\n\n  .fe-block-995c08b197d241113528 {\n    grid-area: 46/2/52/10;\n    z-index: 5;\n\n    @media (max-width: 767px) {\n      \n        \n      \n    }\n  }\n\n  .fe-block-995c08b197d241113528 .sqs-block {\n    justify-content: center;\n  }\n\n  .fe-block-995c08b197d241113528 .sqs-block-alignment-wrapper {\n    align-items: center;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-995c08b197d241113528 {\n      grid-area: 10/21/16/26;\n      z-index: 5;\n\n      \n        \n      \n    }\n\n    .fe-block-995c08b197d241113528 .sqs-block {\n      justify-content: center;\n    }\n\n    .fe-block-995c08b197d241113528 .sqs-block-alignment-wrapper {\n      align-items: center;\n    }\n  }\n\n"
                  }}
                />
                <div className="fluid-engine fe-67365873e079254848629ec4">
                  <div className="fe-block fe-block-7e8fcdf9dd0961098dac">
                    <div
                      className="sqs-block html-block sqs-block-html"
                      data-blend-mode="NORMAL"
                      data-block-type={2}
                      data-border-radii='{"topLeft":{"unit":"px","value":0.0},"topRight":{"unit":"px","value":0.0},"bottomLeft":{"unit":"px","value":0.0},"bottomRight":{"unit":"px","value":0.0}}'
                      id="block-7e8fcdf9dd0961098dac"
                    >
                      <div className="sqs-block-content">
                        <div className="sqs-html-content">
                          <h1 style={{ whiteSpace: "pre-wrap" }}>
                            <span className="sqsrte-text-color--white">
                              {lang.heading}
                            </span>
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="fe-block fe-block-55359c0f14cc1720942d">
                    <div
                      className="sqs-block html-block sqs-block-html"
                      data-blend-mode="NORMAL"
                      data-block-type={2}
                      data-border-radii='{"topLeft":{"unit":"px","value":0.0},"topRight":{"unit":"px","value":0.0},"bottomLeft":{"unit":"px","value":0.0},"bottomRight":{"unit":"px","value":0.0}}'
                      id="block-55359c0f14cc1720942d"
                    >
                      <div className="sqs-block-content">
                        <div className="sqs-html-content">
                          <p className="" style={{ whiteSpace: "pre-wrap" }}>
                            <strong>
                             {lang.text}
                            </strong>
                            &nbsp;&nbsp;&nbsp;
                          </p>
                          <p className="" style={{ whiteSpace: "pre-wrap" }}>
                            <strong>
                              Jonny has over 30 years of experience handling
                              snakes, from caring for his beloved childhood pet
                              snakes, to studying species diversity and
                              extracting lethal venom, to rescuing and releasing
                              snakes back into the wild. Due to Jonny's unusual
                              combination of roles in the medical sciences,
                              ecology, logistics, and education, Jonny's
                              training services have been sought out and greatly
                              valued by organizations looking to protect their
                              staff, clients and guests from snakes.
                            </strong>
                            &nbsp;&nbsp;
                          </p>
                          <a href={lang.link} className="" style={{color: "rgb(24, 34, 65)"}}>
                            &nbsp;https://www.youtube.com/user/jonnytropics
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="fe-block fe-block-0f32cdccdecb33cd65cd">
                    <div
                      className="sqs-block image-block sqs-block-image sqs-stretched"
                      data-aspect-ratio="126.71353251318102"
                      data-block-type={5}
                      id="block-0f32cdccdecb33cd65cd"
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
                              <div className="content-fill">
                                <img
                                  data-stretch="true"
                                  data-image-dimensions="2500x1667"
                                  data-image-focal-point="0.5,0.5"
                                  alt="Man holding snake"
                                  data-load="false"
                                  elementtiming="system-image-block"
                                  src={lang.imageFeatured}
                                  width={2500}
                                  height={1667}
                                  sizes="100vw"
                                  style={{
                                    display: "block",
                                    objectFit: "cover",
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
                              "\n      .sqs-block-image .sqs-block-content {\n        height: 100%;\n        width: 100%;\n      }\n\n      \n        .fe-block-0f32cdccdecb33cd65cd .fluidImageOverlay {\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          mix-blend-mode: normal;\n          \n            \n            \n          \n          \n            opacity: 0;\n          \n        }\n      \n    "
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="fe-block fe-block-cae3fcc7c152eb9d15fa">
                    <div
                      className="sqs-block image-block sqs-block-image sqs-stretched"
                      data-block-type={5}
                      id="block-cae3fcc7c152eb9d15fa"
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
                                  data-image-dimensions="2222x1666"
                                  data-image-focal-point="0.5,0.5"
                                  alt="Man speaking at the head of a table to a crowd"
                                  data-load="false"
                                  elementtiming="system-image-block"
                                  src={lang.image-1}
                                  width={2222}
                                  height={1666}
                                  sizes="(max-width: 640px) 100vw, (max-width: 767px) 100vw, 20.833333333333336vw"
                                  style={{
                                    display: "block",
                                    objectFit: "contain",
                                    objectPosition: "50% 50%"
                                  }}
                                  srcSet="https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/53a2c15d-7ffc-4530-891b-fdd0dbe9c97b/DSC_0533.jpg?format=100w 100w, https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/53a2c15d-7ffc-4530-891b-fdd0dbe9c97b/DSC_0533.jpg?format=300w 300w, https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/53a2c15d-7ffc-4530-891b-fdd0dbe9c97b/DSC_0533.jpg?format=500w 500w, https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/53a2c15d-7ffc-4530-891b-fdd0dbe9c97b/DSC_0533.jpg?format=750w 750w, https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/53a2c15d-7ffc-4530-891b-fdd0dbe9c97b/DSC_0533.jpg?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/53a2c15d-7ffc-4530-891b-fdd0dbe9c97b/DSC_0533.jpg?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/53a2c15d-7ffc-4530-891b-fdd0dbe9c97b/DSC_0533.jpg?format=2500w 2500w"
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
                              "\n      .sqs-block-image .sqs-block-content {\n        height: 100%;\n        width: 100%;\n      }\n\n      \n        .fe-block-cae3fcc7c152eb9d15fa .fluidImageOverlay {\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          mix-blend-mode: normal;\n          \n            \n            \n          \n          \n            opacity: 0;\n          \n        }\n      \n    "
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="fe-block fe-block-yui_3_17_2_1_1732851041591_33298">
                    <div
                      className="sqs-block image-block sqs-block-image sqs-stretched"
                      data-block-type={5}
                      id="block-yui_3_17_2_1_1732851041591_33298"
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
                                  data-src="https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/a4888386-559a-4b64-b869-e2e76685b96f/703833_490874210953488_1817612430_o.jpg"
                                  data-image="https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/a4888386-559a-4b64-b869-e2e76685b96f/703833_490874210953488_1817612430_o.jpg"
                                  data-image-dimensions="2048x1536"
                                  data-image-focal-point="0.5,0.5"
                                  alt=""
                                  data-load="false"
                                  elementtiming="system-image-block"
                                  src="https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/a4888386-559a-4b64-b869-e2e76685b96f/703833_490874210953488_1817612430_o.jpg"
                                  width={2048}
                                  height={1536}
                                  sizes="(max-width: 640px) 100vw, (max-width: 767px) 100vw, 20.833333333333336vw"
                                  style={{
                                    display: "block",
                                    objectFit: "contain",
                                    objectPosition: "50% 50%"
                                  }}
                                  srcSet="https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/a4888386-559a-4b64-b869-e2e76685b96f/703833_490874210953488_1817612430_o.jpg?format=100w 100w, https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/a4888386-559a-4b64-b869-e2e76685b96f/703833_490874210953488_1817612430_o.jpg?format=300w 300w, https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/a4888386-559a-4b64-b869-e2e76685b96f/703833_490874210953488_1817612430_o.jpg?format=500w 500w, https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/a4888386-559a-4b64-b869-e2e76685b96f/703833_490874210953488_1817612430_o.jpg?format=750w 750w, https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/a4888386-559a-4b64-b869-e2e76685b96f/703833_490874210953488_1817612430_o.jpg?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/a4888386-559a-4b64-b869-e2e76685b96f/703833_490874210953488_1817612430_o.jpg?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/a4888386-559a-4b64-b869-e2e76685b96f/703833_490874210953488_1817612430_o.jpg?format=2500w 2500w"
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
                              "\n      .sqs-block-image .sqs-block-content {\n        height: 100%;\n        width: 100%;\n      }\n\n      \n        .fe-block-yui_3_17_2_1_1732851041591_33298 .fluidImageOverlay {\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          mix-blend-mode: normal;\n          \n            \n            \n          \n          \n            opacity: 0;\n          \n        }\n      \n    "
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="fe-block fe-block-a44316c988c84bacf140">
                    <div
                      className="sqs-block image-block sqs-block-image sqs-stretched"
                      data-block-type={5}
                      id="block-a44316c988c84bacf140"
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
                                  data-src="https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/d2fc504c-d9dd-4cc7-bd28-44c6ecae72db/IMG_8324.png"
                                  data-image="https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/d2fc504c-d9dd-4cc7-bd28-44c6ecae72db/IMG_8324.png"
                                  data-image-dimensions="2500x1875"
                                  data-image-focal-point="0.5,0.5"
                                  alt=""
                                  data-load="false"
                                  elementtiming="system-image-block"
                                  src="https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/d2fc504c-d9dd-4cc7-bd28-44c6ecae72db/IMG_8324.png"
                                  width={2500}
                                  height={1875}
                                  sizes="(max-width: 640px) 100vw, (max-width: 767px) 100vw, 20.833333333333336vw"
                                  style={{
                                    display: "block",
                                    objectFit: "contain",
                                    objectPosition: "50% 50%"
                                  }}
                                  srcSet="https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/d2fc504c-d9dd-4cc7-bd28-44c6ecae72db/IMG_8324.png?format=100w 100w, https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/d2fc504c-d9dd-4cc7-bd28-44c6ecae72db/IMG_8324.png?format=300w 300w, https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/d2fc504c-d9dd-4cc7-bd28-44c6ecae72db/IMG_8324.png?format=500w 500w, https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/d2fc504c-d9dd-4cc7-bd28-44c6ecae72db/IMG_8324.png?format=750w 750w, https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/d2fc504c-d9dd-4cc7-bd28-44c6ecae72db/IMG_8324.png?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/d2fc504c-d9dd-4cc7-bd28-44c6ecae72db/IMG_8324.png?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/d2fc504c-d9dd-4cc7-bd28-44c6ecae72db/IMG_8324.png?format=2500w 2500w"
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
                              "\n      .sqs-block-image .sqs-block-content {\n        height: 100%;\n        width: 100%;\n      }\n\n      \n        .fe-block-a44316c988c84bacf140 .fluidImageOverlay {\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          mix-blend-mode: normal;\n          \n            \n            \n          \n          \n            opacity: 0;\n          \n        }\n      \n    "
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="fe-block fe-block-995c08b197d241113528">
                    <div
                      className="sqs-block image-block sqs-block-image sqs-stretched"
                      data-block-type={5}
                      id="block-995c08b197d241113528"
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
                                  data-src="https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/337f1da4-bdf1-4c05-87a5-7836b68c66d3/10352993_10203109989003211_5337631604558382832_n.jpg"
                                  data-image="https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/337f1da4-bdf1-4c05-87a5-7836b68c66d3/10352993_10203109989003211_5337631604558382832_n.jpg"
                                  data-image-dimensions="720x540"
                                  data-image-focal-point="0.5,0.5"
                                  alt=""
                                  data-load="false"
                                  elementtiming="system-image-block"
                                  src="https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/337f1da4-bdf1-4c05-87a5-7836b68c66d3/10352993_10203109989003211_5337631604558382832_n.jpg"
                                  width={720}
                                  height={540}
                                  sizes="(max-width: 640px) 100vw, (max-width: 767px) 100vw, 20.833333333333336vw"
                                  style={{
                                    display: "block",
                                    objectFit: "contain",
                                    objectPosition: "50% 50%"
                                  }}
                                  srcSet="https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/337f1da4-bdf1-4c05-87a5-7836b68c66d3/10352993_10203109989003211_5337631604558382832_n.jpg?format=100w 100w, https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/337f1da4-bdf1-4c05-87a5-7836b68c66d3/10352993_10203109989003211_5337631604558382832_n.jpg?format=300w 300w, https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/337f1da4-bdf1-4c05-87a5-7836b68c66d3/10352993_10203109989003211_5337631604558382832_n.jpg?format=500w 500w, https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/337f1da4-bdf1-4c05-87a5-7836b68c66d3/10352993_10203109989003211_5337631604558382832_n.jpg?format=750w 750w, https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/337f1da4-bdf1-4c05-87a5-7836b68c66d3/10352993_10203109989003211_5337631604558382832_n.jpg?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/337f1da4-bdf1-4c05-87a5-7836b68c66d3/10352993_10203109989003211_5337631604558382832_n.jpg?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/673652ec7d92b13c5632108e/337f1da4-bdf1-4c05-87a5-7836b68c66d3/10352993_10203109989003211_5337631604558382832_n.jpg?format=2500w 2500w"
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
                              "\n      .sqs-block-image .sqs-block-content {\n        height: 100%;\n        width: 100%;\n      }\n\n      \n        .fe-block-995c08b197d241113528 .fluidImageOverlay {\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          mix-blend-mode: normal;\n          \n            \n            \n          \n          \n            opacity: 0;\n          \n        }\n      \n    "
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

  )
}

export default about;
