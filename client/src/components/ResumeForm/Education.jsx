import React from 'react'
import "../../styles/styles.css";

const Education = () => {
  return (
    <>
      <div className="input-group">
          <label htmlFor="degree">Degree</label>
          <input id="degree" placeholder="Bachelor of Science" />
        </div>
        <div className="input-group">
          <label htmlFor="schoolOrUniversity">School/University</label>
          <input id="schoolOrUniversity" placeholder="University Name" />
        </div>

        <div className="input-row-spaced">
          <div className="input-group">
            <label htmlFor="startDateEducation">Start Date</label>
            <input id="startDateEducation" type="date" className="date-input" />
          </div>
          <div className="input-group">
            <label htmlFor="endDateEducation">End Date</label>
            <input id="endDateEducation" type="date" className="date-input" />
          </div>
        </div>
    </>
  )
}

export default Education
