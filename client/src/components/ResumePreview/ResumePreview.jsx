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
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const ResumePreview = ({ resumeData }) => {
  const downloadPDF = async () => {
    const element = document.querySelector(".pdf-preview-content");

    // Capture the element
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      allowTaint: false,
      backgroundColor: "#ffffff",
      height: element.scrollHeight,
      windowHeight: element.scrollHeight,
    });

    const imgData = canvas.toDataURL("image/png");

    // Calculate dimensions
    const imgWidth = 210; // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    // Create PDF with exact height needed
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: [210, Math.min(imgHeight + 20, 297)], // Max A4 height or content height + padding
    });

    pdf.addImage(imgData, "PNG", 10, 10, imgWidth - 20, imgHeight);
    pdf.save(`${resumeData.personalInfo.fullName}_Resume.pdf`);
  };

  return (
    <>
      <div className="input-row-spaced button-row">
        <Button
          text="📄 Download PDF"
          className="download-button"
          onClick={() => {
            downloadPDF();
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
            <div className="section-list">
              {resumeData.experience.map((exp) => (
                <div className="section-item" key={exp.id}>
                  <ProfessionalExperienceSec
                    desc={
                      exp.desc ||
                      "Led development of web applications using React and Node.js. Improved application performance by 40% through code optimization and database query improvements."
                    }
                    jobTitle={exp.jobTitle || "Senior Software Developer"}
                    companyName={exp.companyName || "Tech Solutions Inc."}
                    dateRange={formatDateRange(
                      exp.startDate,
                      exp.endDate,
                      "January 2022",
                      "Present"
                    )}
                  />
                </div>
              ))}
            </div>
          </Section>
          <Section title="Education">
            <div className="section-list">
              {resumeData.education.map((edu) => (
                <div className="section-item" key={edu.id}>
                  <EducationSec
                    title={
                      edu.degree || "Bachelor of Science in Computer Science"
                    }
                    name={edu.schoolOrUniversity || "Tech University"}
                    dateRange={formatDateRange(
                      edu.startDate,
                      edu.endDate,
                      "October 2020",
                      "October 2024"
                    )}
                  />
                </div>
              ))}
            </div>
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
            <div className="section-list">
              {resumeData.projects.map((project) => (
                <div className="section-item" key={project.id}>
                  <ProjectSec
                    projectName={
                      project.projectName || "E-commerce Website"
                    }
                    projectTech={
                      project.projectTech &&
                      project.projectTech.trim() !== ""
                        ? project.projectTech
                            .split(",")
                            .map((tech) => tech.trim())
                        : ["React", "Node.js", "MongoDB", "Express"]
                    }
                    projectDesc={
                      project.projectDesc ||
                      "Developed a full-stack e-commerce application with user authentication, product management, and payment integration."
                    }
                    projectLink={project.projectLink || ""}
                  />
                </div>
              ))}
            </div>
          </Section>
        </div>
      </div>
    </>
  );
};

export default ResumePreview;
