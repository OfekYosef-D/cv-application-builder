import React from 'react'
import "../../styles/styles.css";

const ProfessionalExperience = () => {
  return (
    <>
      <div className="input-group">
          <label htmlFor="jobTitle">Job Title</label>
          <input id="jobTitle" placeholder="Software Developer" />
        </div>
        <div className="input-group">
          <label htmlFor="company">Company</label>
          <input id="company" placeholder="Company Name" />
        </div>

        <div className="input-row-spaced">
          <div className="input-group">
            <label htmlFor="startDateExp">Start Date</label>
            <input id="startDateExp" type="date" className="date-input" />
          </div>
          <div className="input-group">
            <label htmlFor="endDateExp">End Date</label>
            <input id="endDateExp" type="date" className="date-input" />
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="descriptionExp">Description</label>
          <textarea id="descriptionExp" placeholder="Describe your responsibilities and achievements..." rows={4} />
        </div>
    </>
  )
}

export default ProfessionalExperience
