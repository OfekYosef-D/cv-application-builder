import React from 'react'
import "../../styles/styles.css";

const Skills = () => {
  return (
    <>
      <div className="input-group">
          <label htmlFor="skills">
            Skills (comma seperated, Press enter after finishing all the skils)
          </label>
          <input
            id="skills"
            placeholder="Javascript, React, Node.js, HTML, CSS"
          />
        </div>
    </>
  )
}

export default Skills
