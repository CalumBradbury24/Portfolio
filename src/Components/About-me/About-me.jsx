import React from "react";
import "./About-me.styles.scss";
import ReactRotatingText from "react-rotating-text";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div className="About-me">
      <h1 className = 'h1-size'>Hi I'm Calum, Welcome to my portfolio website!</h1>
      <h1 className = 'h1-size'>
        <span className = 'h1-size'>I love...</span>
        <ReactRotatingText
          items={[
            "Engineering",
            "Programming",
            "Web Development",
            "React.js",
            "C++",
            "HTML5",
            "CSS3",
            "Cats",
            "Ballroom Dancing",
          ]}
        />
      </h1>
      <h4 className = 'h4-size'>
        Please check out my <Link className='project-link'to="/projects">project portfolio</Link> to see some of my work!
      </h4>
    </div>
  );
};

export default AboutMe;
