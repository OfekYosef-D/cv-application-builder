import React from 'react'
import "../../styles/styles.css";

const PersonalInformation = () => {
  return (
    <>
      <div className="input-column">
          <div className="input-group">
            <label htmlFor="fullName">Full Name</label>
            <input id="fullName" placeholder="Full Name" />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input id="email" placeholder="myemail@exmaple.com" />
          </div>
        </div>
        <div className="input-row-spaced">
          <div className="input-group">
            <label htmlFor="phone">Phone</label>
            <input id="phone" placeholder="+972 50-999-9999" />
          </div>
          <div className="input-group">
            <label htmlFor="location">Location</label>
            <input id="location" placeholder="Israel, Holon" />
          </div>
        </div>
        <div className="input-column">
          <div className="input-group">
            <label htmlFor="professionalSummary">Professional Summary</label>
            <textarea
              id="professionalSummary"
              placeholder="Brief professional summary..."
              rows={4}
            />
          </div>
        </div>
    </>
  )
}

export default PersonalInformation
