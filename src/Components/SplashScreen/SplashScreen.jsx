import React from "react";
import PortfolioPic from "../../assets/port-circle.png";
import { ReactComponent as Logo } from "../../assets/github.svg";
import "./SplashScreen.styles.scss";

const SplashScreen = () => {
  return (
    <div className="splash">
      <div className="splash-container ">
        <div className="position-image animated zoomIn delay-1s">
          <img className="portfolio-image" src={PortfolioPic} alt="Author" />
        </div>
        <div className="info animated zoomIn delay-1s">
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
        <div className="position-git animated zoomIn delay-1s">
          <a href="https://github.com/CalumBradbury24">
            <Logo className="dimensions" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
