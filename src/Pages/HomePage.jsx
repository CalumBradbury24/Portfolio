import React from "react";
import "./HomePage.styles.scss";
import AboutMe from "../Components/About-me/About-me";
import Resume from "../Components/Resume/Resume";
import Portfolio from "../Components/Portfolio/Portfolio";


const HomePage = () => {
  return (
    <div className="HomePage">
      <AboutMe />
      <Resume />
      <Portfolio />
    </div>
  );
};

export default HomePage;
