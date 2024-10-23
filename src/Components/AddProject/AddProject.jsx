import React from "react";
import { Link } from "react-router-dom";
import "./AddProject.css";

const AddProjectPage = () => {
  return (
    <div id="admin" className="admin-container">
      <h1 className="heading">Maintain Your Projects</h1>
      <Link to="/adding" className="tab-link">
        Add Project
      </Link>
      {/* <Link to="/removing" className="tab-link">
        Remove Project
      </Link> */}
    </div>
  );
};

export default AddProjectPage;
