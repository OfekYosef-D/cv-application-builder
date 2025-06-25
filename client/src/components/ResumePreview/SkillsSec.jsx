import React from "react";

const SkillsSec = ({ skills }) => {
  return (
    <div className="skills-grid">
      {skills
      .filter(skill => skill && skill.trim() !== '').map((skill, index) => (
        <div key={index} className="skill-tag">
          {skill}
        </div>
      ))}
    </div>
  );
};

export default SkillsSec;
