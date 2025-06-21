import React from 'react'

const Button = ({
    text="",
    className="",
    onClick,
    type="button",
    disabled=false,
    ...props
}) => {
  return (
    <div className="button-container">
      <button 
      className={`default-button ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...props}

      >
        {text}
      </button>
    </div>
  )
}

export default Button
