import React, { useState } from "react";
import Accordion from "../Accordion";
import "../../styles/styles.css";
import Education from "./Education";
import ProfessionalExperience from "./ProfessionalExperience";
import Projects from "./Projects";
import PersonalInformation from "./PersonalInformation";
import Skills from "./Skills";

const ResumeForm = () => {
  const [openSections, setOpenSections] = useState({
    personal: true,
    education: false,
    experience: false,
    skills: false,
    projects: false,
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
        <PersonalInformation />
      </Accordion>

      <Accordion
        title="Education"
        icon="🎓"
        isOpen={openSections.education}
        onToggle={() => toggleSection("education")}
      >
        <div className="reuseable-border">
        <Education />
        </div>
        
      </Accordion>

      <Accordion
        title="Professional Experience"
        icon="💼"
        isOpen={openSections.experience}
        onToggle={() => toggleSection("experience")}
      >
        <div className="reuseable-border">
        <ProfessionalExperience />
        </div>
        
      </Accordion>

      <Accordion
        title="Skills"
        icon="⚡"
        isOpen={openSections.skills}
        onToggle={() => toggleSection("skills")}
      >
        <Skills />
      </Accordion>

      <Accordion
        title="Projects"
        icon="🚀"
        isOpen={openSections.projects}
        onToggle={() => toggleSection("projects")}
      >
        <div className="reuseable-border">
        <Projects />
        </div>
      </Accordion>
    </div>
  );
};

export default ResumeForm;
