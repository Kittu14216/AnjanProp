import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import "./ProjectList.css"; // Import the CSS file

const ProjectsList = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "projects"));
        const projectsData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setProjects(projectsData);
      } catch (err) {
        setError("Failed to fetch projects. Please try again.");
        console.error("Error fetching projects:", err);
      }
    };
    fetchProjects();
  }, []);

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="projects-list">
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id} className="project-item">
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>
                <strong>Client:</strong> {project.client}
              </p>
              <p>
                <strong>Status:</strong> {project.status}
              </p>
            </div>
            <Link to={`/project/${project.id}`} className="explore-link">
              Explore
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsList;
