import React from 'react'


const SkillsSec = ({
    skills = [
        "JavaScript",
        "React",
        "Node.js",
        "CSS",
        "HTML",
        "Git",
        "SQL",
        "Python"
    ],
}) => {
  return (
    <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-tag">
            {skill}
          </div>
        ))}
    </div>
  )
}

export default SkillsSec
