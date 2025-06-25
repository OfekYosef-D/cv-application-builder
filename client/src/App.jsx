import React, { useState } from "react";
import "./styles/styles.css"; // make sure this contains .fullscreen-bg
import Title from "./components/Title";
import ResumeForm from "./components/ResumeForm/ResumeForm";
import ResumePreview from "./components/ResumePreview/ResumePreview";

function App() {
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
    },
    professionalSummary: "",
    experience: {
      jobTitle: "",
      companyName: "",
      startDate: "",
      endDate: "",
      desc: "",
    },
    skills: [],
    education: {
      degree: "",
      schoolOrUniversity: "",
      startDate: "",
      endDate: "",
    },
    projects: {
      projectName: "",
      projectTech: "",
      projectDesc: "",
      projectLink: "",
    },
  });

  const updateResumeData = (section, newData) => {
    setResumeData((prevData) => ({
      ...prevData,
      [section]: typeof newData === 'object' && !Array.isArray(newData) 
      ? { ...prevData[section], ...newData } 
      : newData,
    }));
  }
  return (
    <div className="fullscreen-bg">
      <Title />
      <div className="container">
        <div className="form-sidebar">
          <ResumeForm 
            resumeData={resumeData} 
            updateResumeData={updateResumeData}
          />
        </div>
        <div className="form-sidebar">
          <ResumePreview 
            resumeData={resumeData}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
