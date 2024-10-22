import React from "react";
import "./Projects.css"; // Import CSS file
import { Link } from "react-router-dom";

// Import images from assets folder
import hyderabadImg from "../../assets/pro_images/charminar.jpg";

const ProjectData = [
  {
    name: "Anjan Blossom/Banglore",
    type: "Residential Apartment",
    image: hyderabadImg,
    Cost: "8.00CR",
    Status: "Completed",
    link: "/hyderabad",
  },
  {
    name: "Anjan Iris/Banglore",
    type: "Residential Apartment",
    image: hyderabadImg,
    Cost: "10.00CR",
    Status: "Completed",
    link: "/visakhapatnam",
  },
  {
    name: "Anjan Woods/Banglore",
    type: "Residential Apartment",
    image: hyderabadImg,
    Cost: "5.00CR",
    Status: "Completed",
    link: "/delhi",
  },
  {
    name: "Anjan Breezy Meadows",
    type: "Residential Projects",
    image: hyderabadImg,
    Cost: "15.00CR",
    Status: "Completed",
    link: "/amalapuram",
  },
];

const Projects = () => {
  return (
    <div className="showroom-section" id="projects">
      <h2 id="projects">Our Completed Projects</h2>
      <div className="showroom-container">
        {ProjectData.map((project, index) => (
          <div
            key={index}
            className="showroom-box"
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <div className="showroom-info">
              <h3>{project.name}</h3>
              <p>{project.type}</p>
              <p>{project.Cost}</p>
              <p>{project.Status}</p>
              <Link to={project.link} className="visit-button">
                Visit Here
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
