import React from "react";
import "./Resume.styles.scss";
import EducationTimeline from "./EducationTimeline";
import EmploymentTimeline from "./EmploymentTimeline";
import AdditionalSkills from './AdditionSkills';

const Resume = () => {
  return (
    <div className="Resume">
      <h2>Resume</h2>
      <h4 className="educationTitle">EDUCATION</h4>
      <EducationTimeline />
      <br />
      <h4 className="educationTitle">EMPLOYMENT</h4>
      <EmploymentTimeline />
      <br />
      <h4 className="Title shrink">GENERAL SKILLS</h4>
      <AdditionalSkills />
    </div>
  );
};

export default Resume;
