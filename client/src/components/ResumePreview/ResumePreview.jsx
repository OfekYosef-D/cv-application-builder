import React from "react";
import Button from "../Button";
import Header from "../Header";
import Section from "../Section";
import ProfessionalSummary from "./ProfessionalSummary";
import ProfessionalExperienceSec from "./ProfessionalExperienceSec";
import EducationSec from "./EducationSec";
import SkillsSec from "./SkillsSec";
import ProjectSec from "./ProjectsSec";

const ResumeReview = () => {
  return (
    <>
      <div className="input-row-spaced">
        <Button
          text="📄 Download PDF"
          className="download-button"
          onClick={() => {
            // Logic to download the resume as PDF
            console.log("Download PDF clicked");
          }}
        />

        <Button
          text="💾 Save Resume"
          className="save-button"
          onClick={() => {
            // Logic to download the resume as PDF
            console.log("Save PDF clicked");
          }}
        />
      </div>

      <div className="pdf-preview-container">
        <Header
          title="John Doe"
          email="johnDoe@example.com"
          phone="(123) 456-7890"
          location="New York, NY"
        />
        <div className="pdf-preview-content">
          <Section title="Professional Summary">
            <ProfessionalSummary />
          </Section>
          <Section title="Professional Experience">
            <ProfessionalExperienceSec />
          </Section>
          <Section title="Education">
            <EducationSec />
          </Section>
          <Section title="Skills">
            <SkillsSec />
          </Section>
          <Section title="Projects">
            <ProjectSec />
          </Section>
        </div>
      </div>
    </>
  );
};

export default ResumeReview;
