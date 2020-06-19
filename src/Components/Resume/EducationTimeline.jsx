import React from "react";
import "./Resume.styles.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {ReactComponent as Logo} from '../../assets/book.svg'; 
const EducationTimeline = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2016 - 2020"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
         icon={< Logo/>}
      >
        <h3 className="vertical-timeline-element-title">
          University of Nottingham
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Nottingham, UK</h4>
        <p>
          Masters of Electrical & Electronic Engineering (1st Class Degree with
          Honours).
        </p>
        <p>2017-2018 Study Abroad Year at Concordia University, QC, Canada.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2011 - 2013"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={< Logo/>}
      >
        <h3 className="vertical-timeline-element-title">Leicester College</h3>
        <h4 className="vertical-timeline-element-subtitle">Leicester, UK</h4>
        <p>
          BTEC Level 3 Extended Diploma in Electrical & Electronic Engineering
          (Grade awarded: Distinction*Distinction*Distinction).
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2009 - 2011"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={< Logo/>}
      >
        <h3 className="vertical-timeline-element-title">
          Bosworth Community College
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Leicester, UK</h4>
        <p>10 GCSE's achieved at grade A-C.</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default EducationTimeline;
