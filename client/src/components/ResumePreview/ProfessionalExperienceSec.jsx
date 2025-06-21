import React from "react";
import "../../styles/styles.css";

const ProfessionalExperienceSec = ({
  desc = "Led development of web applications using React and Node.js. Improved application performance by 40% through code optimization and database query improvements.",
  jobTitle = "Senior Software Developer",
  companyName = "Tech Solutions Inc.",
  startDate = "January 2020",
  endDate = "Present",
}) => {
  return (
    <>
      <div className="section-title-inside">
        <span>{jobTitle}</span>
      </div>
      <span className="section-name-inside">{companyName}</span><br/>
      <span className="section-duration">
        {startDate} - {endDate}
      </span>

      <div className="section-description">{desc}</div>
    </>
  );
};

export default ProfessionalExperienceSec;
