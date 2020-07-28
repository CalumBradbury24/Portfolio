import React, {lazy, Suspense} from "react";
import "./HomePage.styles.scss";
//import AboutMe from "../Components/About-me/About-me";
//import Resume from "../Components/Resume/Resume";
//import Portfolio from "../Components/Portfolio/Portfolio";
import Footer from '../Components/Footer/Footer';
import SplashScreen from '../Components/SplashScreen/SplashScreen';

const Portfolio = lazy(() => import("../Components/Portfolio/Portfolio"));
const Resume = lazy(() => import("../Components/Resume/Resume"));
const AboutMe = lazy(() => import("../Components/About-me/About-me"));

const HomePage = () => {
  return (
    <div>
      <SplashScreen />
      <div className="HomePage">
      <Suspense fallback={<div>...Loading</div>}>
        <AboutMe />
        <Resume />
        <Portfolio />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
