import React from "react";
import PortfolioPic from "../../assets/port-ci.png";
import { ReactComponent as GitHub } from "../../assets/github.svg";
import { ReactComponent as LinkedIn } from "../../assets/linkedin.svg";


import "./SplashScreen.styles.scss";

const SplashScreen = () => {
  return (
    <div className="splash">
      <div className="splash-container ">
        <div className="position-image">
          <img className="portfolio-image" src={PortfolioPic} alt="Author" />
        </div>
        <div className="info">
          <h1 className="H1">Calum Bradbury</h1>
          <h4 className="H4">
            MEng Electrical & Electronic Engineering Graduate
          </h4>
          <p className="P">
            <strong>PHONE:</strong> +44 7383514483
          </p>
          <p className="P">
            <strong>EMAIL: </strong>cs.bradbury@outlook.com
          </p>
        </div>
        <div className="position-git">
          <a href="https://github.com/CalumBradbury24">
            <GitHub className="dimensions" />
          </a>
          <a href="https://www.linkedin.com/in/calum-bradbury-1507761b3/">
            <LinkedIn className="dimensions" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
