import React from "react";
import "./Resume.styles.scss";
import EducationTimeline from "./EducationTimeline";
import EmploymentTimeline from "./EmploymentTimeline";


const Resume = () => {
  return (
    <div className="Resume">
      <h2>Resume</h2>
      <h4 className="Title">EDUCATION</h4>
      <EducationTimeline />
      <br />
      <h4 className="Title">EMPLOYMENT</h4>
      <EmploymentTimeline />
      <br />
    </div>
  );
};

export default Resume;
