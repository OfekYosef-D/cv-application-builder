import React from "react";
import "../../styles/styles.css";

const ProffesionalSummary = ({
  desc = "Experienced software developer with 5+ years of experience in full-stack development. Passionate about creating efficient, scalable solutions and staying current with emerging technologies.",
}) => {
  return <div className="section-description">{desc}</div>;
};

export default ProffesionalSummary;
