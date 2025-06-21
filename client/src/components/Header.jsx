import React from "react";

const Header = ({ title, email, phone, location }) => {
  return (
    <>
      <div className="pdf-preview-title">
        <h3>{title}</h3>
        <div className="input-row style">
          <p className="pdf-preview-email">{email}</p>
          <p>•</p>
          <p className="pdf-preview-phone">{phone}</p>
          <p>•</p>
          <p className="pdf-preview-location">{location}</p>
        </div>
      </div>
    </>
  );
};

export default Header;
