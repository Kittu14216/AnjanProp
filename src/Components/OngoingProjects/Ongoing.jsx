import React from "react";
import "./Ongoing.css"; // Import the CSS file

// Import an image for the second column
import OngoingImage from "../../assets/OngoingImage/ongoing.jpg"; // Update this path if needed

const Ongoing = () => {
  const projects = [
    {
      name: "Anjan Lakshmi Nivas",
      client: "Residential Apartment",
      cost: "5.00CR",
      symbol: "🏢",
    },
    {
      name: "Anjan Orchid",
      client: "Layout Project",
      cost: "10.00CR",
      symbol: "🌳",
    },
    {
      name: "Anjan Tulip",
      client: "Layout Project",
      cost: "5.00CR",
      symbol: "🌷",
    },
    {
      name: "Anjan Greens",
      client: "Layout Project",
      cost: "8.00CR",
      symbol: "🌿",
    },
  ];

  return (
    <div className="ongoing-section">
      <div className="ongoing-container">
        {/* Column 1 - Project Details */}
        <div className="ongoing-details">
          <h2>Ongoing Projects</h2>
          <ul>
            {projects.map((project, index) => (
              <li key={index} className="project-item">
                <span role="img" aria-label="building">
                  {project.symbol}
                </span>{" "}
                <strong>{project.name}</strong>:
                <br />
                Client Name: {project.client} <br />
                Cost of Contract: {project.cost}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2 - Image */}
        <div className="ongoing-image">
          <img src={OngoingImage} alt="Ongoing Projects" />
        </div>
      </div>
    </div>
  );
};

export default Ongoing;
