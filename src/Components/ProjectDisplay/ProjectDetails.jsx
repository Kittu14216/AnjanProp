import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import "./ProjectDetail.css";

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      const docRef = doc(db, "projects", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProject(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };
    fetchProject();
  }, [id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="project-detail">
      <h2>{project.title}</h2>
      {project.client && (
        <p>
          <strong>Client:</strong> {project.client}
        </p>
      )}
      {project.cost && (
        <p>
          <strong>Cost:</strong> {project.cost}
        </p>
      )}
      {project.remarks && (
        <p>
          <strong>Remarks:</strong> {project.remarks}
        </p>
      )}
      {project.status && (
        <p>
          <strong>Status:</strong> {project.status}
        </p>
      )}
      {project.about && (
        <p>
          <strong>About:</strong> {project.about}
        </p>
      )}
      {project.imageUrl && (
        <div className="image-card">
          <img src={project.imageUrl} alt={project.title} />
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
