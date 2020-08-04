import React from "react";
import "./HomePage.styles.scss";
import SplashScreen from '../../Components/SplashScreen/SplashScreen';
import AboutMe from "../../Components/About-me/About-me";

const HomePage = () => {
  return (
    <div className="HomePage">
      <SplashScreen />
      <AboutMe/>
    </div>
  );
};

export default HomePage;
