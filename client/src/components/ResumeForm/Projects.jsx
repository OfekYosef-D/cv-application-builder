import React from 'react'
import "../../styles/styles.css";

const Projects = () => {
  return (
    <>
      <div className="input-group">
          <label htmlFor="projectName">Project Name</label>
          <input id="projectName" placeholder="E-commerce Website" />
        </div>
        <div className="input-group">
          <label htmlFor="techUsed">Technologies Used</label>
          <input id="techUsed" placeholder="React, Node.js, MongoDB" />
        </div>

        <div className="input-group">
          <label htmlFor="descriptionProjects">Description</label>
          <textarea id="descriptionProjects" placeholder="Describe the project..." rows={4} />
        </div>

        <div className="input-group">
          <label htmlFor="projectURL">Project URL (optional)</label>
          <input id="projectURL" placeholder="https://github.com/username/project" />
        </div>
    </>
  )
}

export default Projects
