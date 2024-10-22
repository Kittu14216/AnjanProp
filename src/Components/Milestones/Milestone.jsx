import React from "react";
import "./Milestone.css"; // Import the external CSS for styling

const Milestones = () => {
  const milestones = [
    {
      year: "2012",
      description: "📅 Incorporated by Founders Sasha & Sudheer",
    },
    { year: "2015", description: "🏗️ First Residential Project" },
    { year: "2016", description: "✅ Completed First Venture" },
    { year: "2018", description: "🏡 Second Residential Project" },
    { year: "2020", description: "🏆 Completed Residential Projects" },
    { year: "2023", description: "🗺️ Layout Projects" },
    { year: "2024", description: "🏠 Fourth Residential Project" },
  ];

  return (
    <div className="milestones-section">
      <h2 className="milestones-heading">Anjan Company Milestones</h2>
      <div className="milestones-container">
        {milestones.map((milestone, index) => (
          <div key={index} className="milestone-box">
            <div className="milestone-year">{milestone.year}</div>
            <div className="milestone-description">{milestone.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Milestones;
