import React from "react";
import "./TimeLine.styles.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ReactComponent as Logo } from "../../assets/suitcase.svg";

const EmploymentTimeline = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="Sept 2019 - May 2020"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<Logo />}
      >
        <h3 className="vertical-timeline-element-title">
          Student IT Support Tutor
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          University of Nottingham Medical School, Queen's Medical Centre, UK
        </h4>
        <p>
          Supporting medical school staff and students with the university IT
          services, and any issues with personal and professional electronic
          devices.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="April 2019 - May 2019"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<Logo />}
      >
        <h3 className="vertical-timeline-element-title">Software Developer</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Power Vigilance, Nottingham, UK
        </h4>
        <p>
          Two week internship working on the development of a new online client
          portal for a small Nottingham based start-up Company. Successfully
          suggested and implemented multiple new features for the client portal
          including a freshly designed progress bar for the illustration of
          power usage in a client’s building.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="June 2018 - Sept 2018"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<Logo />}
      >
        <h3 className="vertical-timeline-element-title">
          Advanced Manufacturing Labs Intern
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          University of Nottingham, UK
        </h4>
        <p>
          Working on the design and testing of a bespoke robot end-effector for
          the processing of bio-materials in order to allow a local company to
          automate their current processes.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Sept 2014 - July 2016"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<Logo />}
      >
        <h3 className="vertical-timeline-element-title">
          Operations Technician
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Caterpillar Inc, Leicester, UK
        </h4>
        <p>
          Employed full time within a team of colleagues manufacturing hydraulic
          values for backhoe loader diggers. Worked effectively and diligently
          in a high pressure and fast-paced environment.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default EmploymentTimeline;
