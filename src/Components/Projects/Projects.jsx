import React from "react";
import "./Projects.css"; // Import CSS file
import { Link } from "react-router-dom";
// Import images from assets folder
import BreezyMedoes from "../../assets/pro_images/BreezyMedoes.jpg";
import Iris from "../../assets/pro_images/iris.jpg";
import Woods from "../../assets/pro_images/Woods-1.jpg";

// Updated ProjectData with unique IDs
const ProjectData = [
  {
    id: "1",
    name: "Anjan Iris/Banglore",
    type: "Residential Apartment",
    image: Iris,
    cost: "10.00CR",
    status: "Completed",
    link: "/visakhapatnam",
  },
  {
    id: "2",
    name: "Anjan Woods/Banglore",
    type: "Residential Apartment",
    image: Woods,
    cost: "5.00CR",
    status: "Completed",
    link: "/delhi",
  },
  {
    id: "3",
    name: "Anjan Breezy Meadows",
    type: "Residential Projects",
    image: BreezyMedoes,
    cost: "15.00CR",
    status: "Completed",
    link: "/amalapuram",
  },
];

const Projects = () => {
  return (
    <div className="showroom-section" id="projects">
      <h2 id="projects">Our Completed Projects</h2>
      <div className="showroom-container">
        {ProjectData.map((project) => (
          <div
            key={project.id}
            className="showroom-box"
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <div className="showroom-info">
              <h3>{project.name}</h3>
              <p>{project.type}</p>
              <p>{project.cost}</p>
              <p>{project.status}</p>
              <p>Project ID: {project.id}</p> {/* Display Project ID */}
              {/* <Link to={project.link} className="visit-button">
                Visit Here
              </Link> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
