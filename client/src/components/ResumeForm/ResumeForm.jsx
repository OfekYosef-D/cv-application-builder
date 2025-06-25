import React, { useState } from "react";
import Accordion from "../Accordion";
import "../../styles/styles.css";
import Education from "./Education";
import ProfessionalExperience from "./ProfessionalExperience";
import Projects from "./Projects";
import PersonalInformation from "./PersonalInformation";
import Skills from "./Skills";
import Button from "../Button";

const ResumeForm = ({ resumeData, updateResumeData }) => {
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

  const addNewEntry = (section) => {
    const newId = Date.now(); // Simple unique ID
    let newEntry;

    switch (section) {
      case "experience":
        newEntry = {
          id: newId,
          jobTitle: "",
          companyName: "",
          startDate: "",
          endDate: "",
          desc: "",
        };
        break;
      case "education":
        newEntry = {
          id: newId,
          degree: "",
          schoolOrUniversity: "",
          startDate: "",
          endDate: "",
        };
        break;
      case "projects":
        newEntry = {
          id: newId,
          projectName: "",
          projectTech: "",
          projectDesc: "",
          projectLink: "",
        };
        break;
      default:
        return;
    }

    updateResumeData(section, [...resumeData[section], newEntry]);
  };

  const updateEntry = (section, entryId, updatedData) => {
    const updatedEntries = resumeData[section].map((entry) =>
      entry.id === entryId ? { ...entry, ...updatedData } : entry
    );
    updateResumeData(section, updatedEntries);
  };

  const removeEntry = (section, entryId) => {
    if (resumeData[section].length > 1) {
      const filteredEntries = resumeData[section].filter(
        (entry) => entry.id !== entryId
      );
      updateResumeData(section, filteredEntries);
    }
  };

  return (
    <div className="form-container">
      <Accordion
        title="Personal Information"
        icon="👤"
        isOpen={openSections.personal}
        onToggle={() => toggleSection("personal")}
      >
        <PersonalInformation
          personalInfo={resumeData.personalInfo}
          professionalSummary={resumeData.professionalSummary}
          updatePersonalInfo={(newInfo) =>
            updateResumeData("personalInfo", newInfo)
          }
          updateProfessionalSummary={(newSummary) =>
            updateResumeData("professionalSummary", newSummary)
          }
        />
      </Accordion>

      <Accordion
        title="Professional Experience"
        icon="💼"
        isOpen={openSections.experience}
        onToggle={() => toggleSection("experience")}
      >
        {resumeData.experience.map((exp, index) => (
          <div key={exp.id} className="reuseable-border">
            <div className="entry-header">
              <span className="entry-number">Experience #{index + 1}</span>
              {resumeData.experience.length > 1 && (
                <Button
                  text="🗑️ Remove"
                  className="remove-button"
                  onClick={() => removeEntry("experience", exp.id)}
                />
              )}
            </div>
            <ProfessionalExperience
              experience={exp}
              updateExperience={(updatedData) =>
                updateEntry("experience", exp.id, updatedData)
              }
            />
          </div>
        ))}
        <Button
          text="➕ Add More Experience"
          className="add-more-button"
          onClick={() => addNewEntry("experience")}
        />
      </Accordion>

      <Accordion
        title="Education"
        icon="🎓"
        isOpen={openSections.education}
        onToggle={() => toggleSection("education")}
      >
        {resumeData.education.map((edu, index) => (
          <div key={edu.id} className="reuseable-border">
            <div className="entry-header">
              <span className="entry-number">Education #{index + 1}</span>
              {resumeData.education.length > 1 && (
                <Button
                  text="🗑️ Remove"
                  className="remove-button"
                  onClick={() => removeEntry("education", edu.id)}
                />
              )}
            </div>
            <Education
              education={edu}
              updateEducation={(updatedData) =>
                updateEntry("education", edu.id, updatedData)
              }
            />
          </div>
        ))}
        <Button
          text="➕ Add More Education"
          className="add-more-button"
          onClick={() => addNewEntry("education")}
        />
      </Accordion>

      <Accordion
        title="Skills"
        icon="⚡"
        isOpen={openSections.skills}
        onToggle={() => toggleSection("skills")}
      >
        <Skills
          skills={resumeData.skills}
          updateSkills={(newSkills) => updateResumeData("skills", newSkills)}
        />
      </Accordion>

      <Accordion
        title="Projects"
        icon="🚀"
        isOpen={openSections.projects}
        onToggle={() => toggleSection("projects")}
      >
        {resumeData.projects.map((project, index) => (
          <div key={project.id} className="reuseable-border">
            <div className="entry-header">
              <span className="entry-number">Project #{index + 1}</span>
              {resumeData.projects.length > 1 && (
                <Button
                  text="🗑️ Remove"
                  className="remove-button"
                  onClick={() => removeEntry("projects", project.id)}
                />
              )}
            </div>
            <Projects
              projects={project}
              updateProjects={(updatedData) =>
                updateEntry("projects", project.id, updatedData)
              }
            />
          </div>
        ))}
        <Button
          text="➕ Add More Projects"
          className="add-more-button"
          onClick={() => addNewEntry("projects")}
        />
      </Accordion>
    </div>
  );
};

export default ResumeForm;
