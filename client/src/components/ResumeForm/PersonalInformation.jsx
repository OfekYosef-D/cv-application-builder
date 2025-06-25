import React from 'react'
import "../../styles/styles.css";

const PersonalInformation = ({personalInfo, professionalSummary, updatePersonalInfo, updateProfessionalSummary }) => {
  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    updatePersonalInfo({ [name]: value });
  }

  const handleSummaryChange = (e) => {
    updateProfessionalSummary(e.target.value);
  }

  return (
    <>
      <div className="input-column">
          <div className="input-group">
            <label htmlFor="fullName">Full Name</label>
            <input 
            id="fullName" 
            placeholder="Full Name" 
            onChange={handlePersonalInfoChange}
            name="fullName"
            value={personalInfo.fullName || ""}
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input 
            id="email" 
            placeholder="myemail@exmaple.com" 
            onChange={handlePersonalInfoChange}
            name="email"
            value={personalInfo.email || ""}
            />
          </div>
        </div>
        <div className="input-row-spaced">
          <div className="input-group">
            <label htmlFor="phone">Phone</label>
            <input 
            id="phone" 
            placeholder="+972 50-999-9999" 
            onChange={handlePersonalInfoChange}
            name="phone"
            value={personalInfo.phone || ""}
            />
          </div>
          <div className="input-group">
            <label htmlFor="location">Location</label>
            <input 
            id="location" 
            placeholder="Israel, Holon" 
            onChange={handlePersonalInfoChange}
            name="location"
            value={personalInfo.location || ""}
            />
          </div>
        </div>
        <div className="input-column">
          <div className="input-group">
            <label htmlFor="professionalSummary">Professional Summary</label>
            <textarea
              id="professionalSummary"
              placeholder="Brief professional summary..."
              rows={4}
              onChange={handleSummaryChange}
              value={professionalSummary || ""}
            />
          </div>
        </div>
    </>
  )
}

export default PersonalInformation
