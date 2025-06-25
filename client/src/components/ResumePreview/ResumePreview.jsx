import React from "react";
import Button from "../Button";
import Header from "../Header";
import Section from "../Section";
import ProfessionalSummary from "./ProfessionalSummary";
import ProfessionalExperienceSec from "./ProfessionalExperienceSec";
import EducationSec from "./EducationSec";
import SkillsSec from "./SkillsSec";
import ProjectSec from "./ProjectsSec";
import { formatDateRange } from "../../utils/dateUtils";

const ResumePreview = ({ resumeData }) => {
  return (
    <>
      <div className="input-row-spaced button-row">
        <Button
          text="📄 Download PDF"
          className="download-button"
          onClick={() => {
            console.log("Download PDF clicked");
          }}
        />

        <Button
          text="💾 Save Resume"
          className="save-button"
          onClick={() => {
            console.log("Save PDF clicked");
          }}
        />
      </div>

      <div className="pdf-preview-container">
        <Header
          title={resumeData.personalInfo.fullName || "John Doe"}
          email={resumeData.personalInfo.email || "johnDoe@example.com"}
          phone={resumeData.personalInfo.phone || "(123) 456-7890"}
          location={resumeData.personalInfo.location || "New York, NY"}
        />
        <div className="pdf-preview-content">
          <Section title="Professional Summary">
            <ProfessionalSummary
              desc={
                resumeData.professionalSummary ||
                "Experienced software developer with a strong background in building scalable web applications. Proven ability to lead projects and collaborate with cross-functional teams."
              }
            />
          </Section>
          <Section title="Professional Experience">
            <ProfessionalExperienceSec
              desc={
                resumeData.experience.desc ||
                "Led development of web applications using React and Node.js. Improved application performance by 40% through code optimization and database query improvements."
              }
              jobTitle={
                resumeData.experience.jobTitle || "Senior Software Developer"
              }
              companyName={
                resumeData.experience.companyName || "Tech Solutions Inc."
              }
              dateRange={formatDateRange(
                resumeData.experience.startDate,
                resumeData.experience.endDate,
                "January 2022",
                "Present"
              )}
            />
          </Section>
          <Section title="Education">
            <EducationSec
              title={
                resumeData.education.degree ||
                "Bachelor of Science in Computer Science"
              }
              name={
                resumeData.education.schoolOrUniversity || "Tech University"
              }
              dateRange={formatDateRange(
                resumeData.education.startDate,
                resumeData.education.endDate,
                "October 2020",
                "October 2024"
              )}
            />
          </Section>
          <Section title="Skills">
            <SkillsSec
              skills={
                resumeData.skills &&
                resumeData.skills.length > 0 &&
                resumeData.skills.some((skill) => skill.trim() !== "") // ← Check if any skill has content
                  ? resumeData.skills
                  : [
                      "JavaScript",
                      "React",
                      "Node.js",
                      "CSS",
                      "HTML",
                      "Git",
                      "SQL",
                      "Python",
                    ]
              }
            />
          </Section>
          <Section title="Projects">
            <ProjectSec
              projectName={
                resumeData.projects.projectName || "E-commerce Website"
              }
              projectTech={
                resumeData.projects.projectTech &&
                resumeData.projects.projectTech.trim() !== ""
                  ? resumeData.projects.projectTech
                      .split(",")
                      .map((tech) => tech.trim())
                  : ["React", "Node.js", "MongoDB", "Express"]
              }
              projectDesc={
                resumeData.projects.projectDesc ||
                "Developed a full-stack e-commerce application with user authentication, product management, and payment integration."
              }
              projectLink={resumeData.projects.projectLink || ""}
            />
          </Section>
        </div>
      </div>
    </>
  );
};

export default ResumePreview;
