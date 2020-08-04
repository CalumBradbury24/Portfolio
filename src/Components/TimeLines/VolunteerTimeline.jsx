import React from "react";
import "./TimeLine.styles.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ReactComponent as Volunteer } from "../../assets/volunteer.svg";

const VolunteerTimeline = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="June 2019 - Sept 2019"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<Volunteer />}
      >
        <h3 className="vertical-timeline-element-title">Library Assistant</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Leicester Forest East Community Library, Leicester, UK
        </h4>
        <p>
          Summer volunteer at local library assisting patrons with the online
          catalogue system and any IT queries and issues.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Sept 2016 - June 2017"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<Volunteer />}
      >
        <h3 className="vertical-timeline-element-title">
          Course Representative
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          University of Nottingham, Nottingham, UK
        </h4>
        <p>
          Course representative in first year of undergraduate degree tasked with
          reporting any issues with the course to the heads of the department.
          Responsibilities included being the first port of call for students if
          they had problems of any kind and gathering feedback to be
          communicated at monthly meetings with lecturers and heads of the
          department.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default VolunteerTimeline;
