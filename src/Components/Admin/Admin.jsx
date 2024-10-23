import React, { useState } from "react";
import { db, storage } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import "./Admin.css"; // Import the CSS file

const Admin = () => {
  const [project, setProject] = useState({
    title: "",
    client: "",
    cost: "",
    about: "",
    remarks: "",
    imageUrl: "",
    status: "ongoing",
  });
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (image) {
      setUploading(true);
      const storageRef = ref(storage, `projects/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          console.error("Upload failed:", error);
          setUploading(false);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          await addDoc(collection(db, "projects"), {
            ...project,
            imageUrl: downloadURL,
          });
          setUploading(false);
          setShowSuccess(true);
          setTimeout(() => setShowSuccess(false), 3000); // Hide the success dialog after 3 seconds
        }
      );
    } else {
      await addDoc(collection(db, "projects"), project);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000); // Hide the success dialog after 3 seconds
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-project-form">
      <h2>Add New Project</h2>
      <div className="form-group">
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={project.title}
          onChange={handleChange}
          required
          placeholder="Enter Project Title"
        />
      </div>
      <div className="form-group">
        <label>Client:</label>
        <input
          type="text"
          name="client"
          placeholder="Client"
          value={project.client}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Cost:</label>
        <input
          type="text"
          name="cost"
          placeholder="Cost"
          value={project.cost}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Remarks:</label>
        <input
          type="text"
          name="remarks"
          placeholder="Remarks"
          value={project.remarks}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Status:</label>
        <select
          name="status"
          value={project.status}
          onChange={handleChange}
          required
        >
          <option value="ongoing">Ongoing</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div className="form-group">
        <label>About:</label>
        <textarea
          name="about"
          placeholder="Please Enter Information About Project"
          value={project.about}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="form-group">
        <label>Image:</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </div>
      <button type="submit" disabled={uploading} className="submit-button">
        {uploading ? `Uploading... ${Math.round(progress)}%` : "Add Project"}
      </button>
      {showSuccess && (
        <div className="success-dialog">Project added successfully!</div>
      )}
    </form>
  );
};

export default Admin;
