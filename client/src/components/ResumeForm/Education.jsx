import React from "react";
import "../../styles/styles.css";

const Education = ({ education, updateEducation }) => {
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    updateEducation({ ...education, [id]: value });
  };

  return (
    <>
      <div className="input-group">
        <label htmlFor="degree">Degree</label>
        <input
          id="degree"
          placeholder="Bachelor of Science"
          value={education.degree}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="schoolOrUniversity">School/University</label>
        <input
          id="schoolOrUniversity"
          placeholder="University Name"
          value={education.schoolOrUniversity}
          onChange={handleInputChange}
        />
      </div>

      <div className="input-row-spaced">
        <div className="input-group">
          <label htmlFor="startDate">Start Date</label>
          <input
            id="startDate"
            type="month"
            className="date-input"
            value={education.startDate}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="endDate">End Date</label>
          <input
            id="endDate"
            type="month"
            className="date-input"
            value={education.endDate}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </>
  );
};

export default Education;
