import React from "react";
import "./About.css"; // Importing the CSS file for styling

const AboutUs = () => {
  const aboutInfo = [
    {
      symbol: "🏗️",
      text: "More than 12 years of experience in the building industry.",
    },
    { symbol: "📍", text: "Headquartered in Bangalore." },
    { symbol: "🏡", text: "Completed various residential projects." },
    {
      symbol: "👷",
      text: "Team of highly experienced tradesmen and construction contractors.",
    },
    { symbol: "👥", text: "Strong management team." },
    { symbol: "💡", text: "Innovative work culture." },
    { symbol: "🚀", text: "Progressive vision." },
  ];

  return (
    <div className="about-us-section" id="about">
      <h2 className="about-us-heading">About Us</h2>
      <div className="about-us-container">
        <div className="about-us-box">
          {aboutInfo.map((info, index) => (
            <p key={index} className="about-info-item">
              {info.symbol} {info.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
