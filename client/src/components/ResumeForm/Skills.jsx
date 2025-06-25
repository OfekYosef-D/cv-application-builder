import React from 'react'
import "../../styles/styles.css";

const Skills = ({ skills, updateSkills }) => {
  const handleSkillsChange = (e) => {
    const skillsInput = e.target.value;
    const skillsArray = skillsInput.split(',').map(skill => skill.trim());
    updateSkills(skillsArray);
  }

  return (
    <>
      <div className="input-group">
          <label htmlFor="skills">
            Skills (comma separated, Press enter after finishing all the skills)
          </label>
          <input
            id="skills"
            placeholder="Javascript, React, Node.js, HTML, CSS"
            onChange={handleSkillsChange}
            value={skills.join(', ')}
          />
        </div>
    </>
  )
}

export default Skills
