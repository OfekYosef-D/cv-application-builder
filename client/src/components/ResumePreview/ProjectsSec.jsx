import React from "react";
import "../../styles/styles.css";

const ProjectSec = ({ projectName, projectTech, projectDesc, projectLink }) => {
  return (
    <>
      <div className="section-title-inside">
        <span>{projectName}</span>
      </div>
      <span className="section-name-inside">
        {projectTech && projectTech.length > 0 ? projectTech.join(", ") : "N/A"}
      </span>
      <div className="section-description">{projectDesc}</div>
      <div className="section-link">
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
          {projectLink ? projectLink : ""}
        </a>
      </div>
    </>
  );
};

export default ProjectSec;
