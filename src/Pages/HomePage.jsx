import React from "react";
import "./HomePage.styles.scss";
import AboutMe from "../Components/About-me/About-me";
import Resume from "../Components/Resume/Resume";
import Portfolio from "../Components/Portfolio/Portfolio";
import Footer from '../Components/Footer/Footer';
import SplashScreen from '../Components/SplashScreen/SplashScreen';


const HomePage = () => {
  return (
    <div>
      <SplashScreen />
      <div className="HomePage">
        <AboutMe />
        <Resume />
        <Portfolio />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
