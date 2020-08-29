import React from "react";
import "./ResumePage.styles.scss";
import EducationTimeline from "../../Components/TimeLines/EducationTimeline";
import EmploymentTimeline from "../../Components/TimeLines/EmploymentTimeline";
import CustomButton from "../../Components/CustomButton/CustomButton";
import VolunteerTimeline from '../../Components/TimeLines/VolunteerTimeline';
const ResumePage = () => {
  return (
    <div className="Resume">
      <div className="description">
      <p className="text">
        Hello I am Calum! A Masters of Electrical & Electronic Engineering
        (MEng) graduate with a passion for software and writing code. I am very
        enthusiastic about technology and have a wide range of software and
        hardware experience!
        <br />
        <br />
        In my free time I enjoy working on my own technology related personal
        projects, including this website itself. I also love to dance! As a
        Member of the University of Nottingham DanceSport Team I have competed
        in multiple national Ballroom & Latin dance competitions. Including the
        Inter Varsity Dance Championships (IVDC) at the Winter Gardens in
        Blackpool, UK.
      </p>
      <CustomButton link={"Calum Bradbury CV.pdf"} text={'DOWNLOAD RESUME'}/>
    </div>
      <h4 className="Title">EDUCATION</h4>
      <EducationTimeline />
      <br />
      <h4 className="Title">EMPLOYMENT</h4>
      <EmploymentTimeline />
      <br />
      <h4 className="Title">VOLUNTEERING</h4>
      <VolunteerTimeline />
      <br />
    </div>
  );
};

export default ResumePage;
