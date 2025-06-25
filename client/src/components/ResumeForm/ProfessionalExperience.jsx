import React from 'react'
import "../../styles/styles.css";

const ProfessionalExperience = ({
  experience,
  updateExperience
}) => {
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    updateExperience({ ...experience, [id]: value });
  };
  
  return (
    <>
      <div className="input-group">
        <label htmlFor="jobTitle">Job Title</label>
        <input
          id="jobTitle"
          placeholder="Software Developer"
          value={experience.jobTitle}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="company">Company</label>
        <input
          id="companyName"
          placeholder="Company Name"
          value={experience.companyName}
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
              value={experience.startDate}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="endDate">End Date</label>
            <input
              id="endDate"
              type="month"
              className="date-input"
              value={experience.endDate}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="desc">Description</label>
          <textarea
            id="desc"
            placeholder="Describe your responsibilities and achievements..."
            rows={4}
            value={experience.desc}
            onChange={handleInputChange}
          />
        </div>
    </>
  )
}

export default ProfessionalExperience
