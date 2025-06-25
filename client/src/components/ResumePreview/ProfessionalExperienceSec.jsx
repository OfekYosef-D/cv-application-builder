import React from "react";
import "../../styles/styles.css";

const ProfessionalExperienceSec = ({
  desc,
  jobTitle,
  companyName,
  dateRange
}) => {
  return (
    <>
      <div className="section-title-inside">
        <span>{jobTitle}</span>
      </div>
      <span className="section-name-inside">{companyName}</span><br/>
      <span className="section-duration">
        {dateRange}
      </span>

      <div className="section-description">{desc}</div>
    </>
  );
};

export default ProfessionalExperienceSec;
