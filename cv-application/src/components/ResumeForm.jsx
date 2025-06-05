import React, { useState } from "react";
import Accordion from "./Accordion";
import "../styles/styles.css";

const ResumeForm = () => {
  const [openSections, setOpenSections] = useState({
    personal: true,
    education: false,
    experience: false,
    skills: false,
  });
  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="form-container">
      <Accordion
        title="Personal Information"
        icon="👤"
        isOpen={openSections.personal}
        onToggle={() => toggleSection("personal")}
      >
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
        <div className="input-row">
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
            <textarea id="professionalSummary" placeholder="Professional Summary" rows={4} />
          </div>
          
        </div>
      </Accordion>

      <Accordion
        title="Education"
        icon="🎓"
        isOpen={openSections.education}
        onToggle={() => toggleSection("education")}
      >
        <input placeholder="Degree" />
        <input placeholder="School/University" />
        <input placeholder="Graduation Year" />
      </Accordion>

      <Accordion
        title="Experience"
        icon="💼"
        isOpen={openSections.experience}
        onToggle={() => toggleSection("experience")}
      >
        <input placeholder="Job Title" />
        <input placeholder="Company" />
        <input placeholder="Duration" />
        <textarea placeholder="Job Description" rows={3} />
      </Accordion>

      <Accordion
        title="Skills"
        icon="⚡"
        isOpen={openSections.skills}
        onToggle={() => toggleSection("skills")}
      >
        <input placeholder="Add skills (comma separated)" />
      </Accordion>
    </div>
  );
};

export default ResumeForm;
