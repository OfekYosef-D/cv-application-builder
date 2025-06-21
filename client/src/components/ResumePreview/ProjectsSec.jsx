import React from "react";
import "../../styles/styles.css";

const ProjectSec = ({
  desc = "Built a full-stack e-commerce application with payment integration, user authentication, and admin dashboard. Handled 1000+ concurrent users.",
  languages = [
    "React",
    "Node.js",
    "MongoDB",
  ],
  title = "Tech Solutions Inc.",
}) => {
  return (
    <>
      <div className="section-title-inside">
        <span>{title}</span>
      </div>
      {languages.map((lang, index) => (
        <span key={index} className="section-name-inside">
          {lang}
          {index < languages.length - 1 ? ", " : ""}
        </span>
      ))}
      <div className="section-description">{desc}</div>
    </>
  );
};

export default ProjectSec;
