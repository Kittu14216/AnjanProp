import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-details">
        <h3>{project.title}</h3>
        <p>
          <strong>Client:</strong> {project.client}
        </p>
        <p>
          <strong>Cost:</strong> {project.cost}
        </p>
        <p>
          <strong>Remarks:</strong> {project.remarks}
        </p>
        <p>
          <strong>Status:</strong> {project.status}
        </p>
      </div>
      <div className="project-image">
        <img src={project.imageUrl} alt={project.title} />
      </div>
    </div>
  );
};

export default ProjectCard;
