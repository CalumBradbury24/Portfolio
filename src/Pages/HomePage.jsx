import React from "react";
import "./HomePage.styles.scss";
import Contact from "../Components/Contact/Contact";
import AboutMe from "../Components/About-me/About-me";
import Resume from "../Components/Resume/Resume";
import Portfolio from "../Components/Portfolio/Portfolio";

const HomePage = () => {
  return (
    <div>
      <Contact />
      <div className="HomePage">
        <AboutMe />
        <Resume />
        <Portfolio />
      </div>
      <div className='footer'></div>
    </div>
  );
};

export default HomePage;
