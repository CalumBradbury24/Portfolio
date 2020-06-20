import React from "react";
import "./About-me.styles.scss";
import CustomButton from "../../Components/CustomButton/CustomButton";
import Description from './description';

const AboutMe = () => {
  return (
    <div className="About-me animated fadeInLeft delay-1s">
      <h2>About Me</h2>
      <Description />
      <CustomButton />
    </div>
  );
};

export default AboutMe;
