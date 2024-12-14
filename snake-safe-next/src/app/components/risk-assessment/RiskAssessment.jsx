import React from 'react';
import Colors from "../../../../content/colors.json";

const RiskAssessment = ({ data }) => {
  return (
    <div className="risk-assessment">
      <style jsx>{`
        .risk-assessment {
          padding: 2rem 0 4rem 0;
        }
        .title {
          color: ${Colors.primary};
          font-size: 4rem;
          margin-bottom: 4rem;
          font-weight: 300;
        }
        .content-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        .bullet-list {
          list-style: none;
          padding: 0;
          margin-bottom: 2rem;
        }
        .bullet-list li {
          color: ${Colors.secondary};
          margin-bottom: 1rem;
          font-size: 1rem;
          line-height: 1.6;
        }
        .image-wrapper img {
          width: 100%;
          aspect-ratio: 4/3;
          object-fit: cover;
          border-radius: 4px;
        }
        @media (max-width: 992px) {
          .content-wrapper {
            grid-template-columns: 1fr;
          }
          .title {
            font-size: 3rem;
          }
        }
      `}</style>
      <h2 className="title">{data.title}</h2>
      <div className="content-wrapper">
        <ul className="bullet-list">
          {data.bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
        <div className="image-wrapper">
          <img src={data.img} alt="Risk Assessment" />
        </div>
      </div>
    </div>
  );
};

export default RiskAssessment; 