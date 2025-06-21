import React from 'react'
import '../styles/styles.css' // make sure this contains .fullscreen-bg

const Title = ({
  title="Professional Resume Builder",
  subtitle="Create your resume in minutes"
}) => {
  return (
    <div className="hero">
      <h1>{title}</h1>
        <p>{subtitle}</p>
    </div>
  )
}

export default Title
