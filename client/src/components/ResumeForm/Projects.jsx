import React from "react";
import "../../styles/styles.css";

const Projects = ({ projects, updateProjects }) => {
  console.log("Projects component rendered with:", projects); // ← Add this

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    const newProjects = {
      ...projects,
      [id]: value,
    };
    updateProjects(newProjects);
  };
  return (
    <>
      <div className="input-group">
        <label htmlFor="projectName">Project Name</label>
        <input
          id="projectName"
          placeholder="E-commerce Website"
          value={projects.projectName}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="projectTech">Technologies Used</label>
        <input
          id="projectTech"
          placeholder="React, Node.js, MongoDB"
          value={projects.projectTech}
          onChange={handleInputChange}
        />
      </div>

      <div className="input-group">
        <label htmlFor="projectDesc">Description</label>
        <textarea
          id="projectDesc"
          placeholder="Describe the project..."
          rows={4}
          value={projects.projectDesc}
          onChange={handleInputChange}
        />
      </div>

      <div className="input-group">
        <label htmlFor="projectLink">Project URL (optional)</label>
        <input
          id="projectLink"
          placeholder="https://github.com/username/project"
          value={projects.projectLink}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};

export default Projects;
