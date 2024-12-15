import React from 'react';
import Colors from "../../../../content/colors.json";

const RiskAssessmentCard = ({ data }) => {
  return (
    <div className="module-card">
      <style jsx>{`
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
      `}</style>
      <img 
        src={data.img} 
        alt="Risk Assessment"
        className="module-image"
      />
      <h3 className="module-title">{data.title}</h3>
      <ul className="module-list">
        {data.bullets.map((bullet, idx) => (
          <li key={idx}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
};

export default RiskAssessmentCard; 