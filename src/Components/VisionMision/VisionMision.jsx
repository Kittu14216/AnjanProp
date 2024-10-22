import React from "react";
import "./VisionMision.css"; // Importing the external CSS for styling
import awardsImage from "../../assets/VisionMissionCertificate/certificate.png"; // Replace this with your image path

const VisionMission = () => {
  return (
    <div className="vision-mission-section">
      <h2>Our Mission and Vision</h2>
      <div className="vision-mission-container">
        {/* Column 1: Mission */}
        <div className="vision-mission-box">
          <h3>Mission</h3>
          <p>
            To provide our customers with valued construction solutions using
            our expertise in the design, manufacture & installation of building
            components. Transform the way people perceive 'Quality'.
          </p>
        </div>

        {/* Column 2: Vision */}
        <div className="vision-mission-box">
          <h3>Vision</h3>
          <p>
            <span role="img" aria-label="Earth" className="icon">
              🌍
            </span>{" "}
            Be global.
            <br />
            <span role="img" aria-label="Clock" className="icon">
              ⏰
            </span>{" "}
            Be fast.
            <br />
            <span role="img" aria-label="Chain link" className="icon">
              🔗
            </span>{" "}
            Be connected.
          </p>
        </div>

        {/* Column 3: Incorporation Certificate */}
        <div className="vision-mission-box">
          <h3>Anjan Company Incorporation Certificate</h3>
          <img
            src={awardsImage}
            alt="Incorporation Certificate"
            className="awards-image"
          />
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
