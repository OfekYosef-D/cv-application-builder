import React from "react";
import "../../styles/styles.css";

const EducationSec = ({
  title,
  name,
  dateRange
}) => {
  return (
    <>
      <div className="section-title-inside">
        <span>{title}</span>
      </div>
      <span className="section-name-inside">{name}</span>
      <br />
      <span className="section-duration">
        {dateRange}
      </span>
    </>
  );
};

export default EducationSec;
