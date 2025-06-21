import React from "react";
import "../../styles/styles.css";

const EducationSec = ({
  title = "Senior Software Developer",
  name = "Tech Solutions Inc.",
  startDate = "January 2020",
  endDate = "Present",
}) => {
  return (
    <>
      <div className="section-title-inside">
        <span>{title}</span>
      </div>
      <span className="section-name-inside">{name}</span>
      <br />
      <span className="section-duration">
        {startDate} - {endDate}
      </span>
    </>
  );
};

export default EducationSec;
