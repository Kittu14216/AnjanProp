import React, { useState } from "react";
import { db } from "../.././firebase";
import {
  collection,
  deleteDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const RemoveProject = () => {
  const [projectId, setProjectId] = useState("");

  const handleRemove = async (e) => {
    e.preventDefault();
    const q = query(collection(db, "projects"), where("id", "==", projectId));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      deleteDoc(doc.ref);
    });
    alert("Project removed successfully!");
  };

  return (
    <form onSubmit={handleRemove}>
      <label>
        Project ID:
        <input
          type="text"
          value={projectId}
          onChange={(e) => setProjectId(e.target.value)}
          required
        />
      </label>
      <button type="submit">Remove Project</button>
    </form>
  );
};

export default RemoveProject;
