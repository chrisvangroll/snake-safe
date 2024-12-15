import React from 'react';
import Colors from "../../../../content/colors.json";
import RiskAssessmentCard from '../risk-assessment-card/RiskAssessmentCard';

const TrainingModules = ({ modules, title, riskAssessment }) => {
  return (
    <div className="training-modules">
      <style jsx>{`
        .training-modules {
          padding: 0 0 2rem;
        }
        .title {
          color: ${Colors.primary};
          font-size: 4rem;
          margin-bottom: 1.5rem;
          font-weight: 300;
        }
        .modules-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          column-gap: 1.5rem;
          row-gap: 4.5rem;
        }
        .module-card {
          background: ${Colors.background};
          padding: 1.5rem;
          border-radius: 8px;
          border: 1px solid ${Colors.primary}20;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .module-card:hover {
          transform: translateY(-5px);
        }
        .module-title {
          color: ${Colors.primary};
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          font-weight: bold;
        }
        .module-list {
          list-style: none;
          padding: 0;
          margin-bottom: 0;
          flex: 1;
        }
        .module-list li {
          color: ${Colors.secondary};
          margin-bottom: 0;
          padding-left: 1.5rem;
          position: relative;
          font-size: 0.95rem;
        }
        .module-list li:before {
          content: "•";
          color: ${Colors.primary};
          position: absolute;
          left: 0;
        }
        .module-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 4px;
        }
        @media (max-width: 992px) {
          .modules-grid {
            grid-template-columns: repeat(2, 1fr);
            column-gap: 2rem;
            row-gap: 4.5rem;
          }
          .title {
            font-size: 3rem;
            margin-bottom: 1rem;
          }
        }
        @media (max-width: 768px) {
          .modules-grid {
            grid-template-columns: 1fr;
            row-gap: 4.5rem;
          }
          .title {
            font-size: 2.5rem;
            margin-bottom: 1rem;
          }
        }
      `}</style>
      <h2 className="title">{title}</h2>
      <div className="modules-grid">
        <RiskAssessmentCard data={riskAssessment} />
        {modules.map((module, index) => (
          <div className="module-card" key={index}>
            <img 
              src={module.img} 
              alt={module.module}
              className="module-image"
            />
            <h3 className="module-title">{module.module}</h3>
            <ul className="module-list">
              {module.bullets.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingModules; 