import React from "react";
import "./AirQualityMonitor.styles.scss";
import clothesPic from "../../../assets/phoenixClothing.PNG";
import { ReactComponent as Logo } from "../../../assets/github.svg";

const AirQualityMonitor = () => {
  return (
    <div className="Ecommerce ">
      <img src={clothesPic} alt="Air Monitor Application" />
      <div>
        <h2>Air Quality Monitor</h2>
        <p>
          An Air Quality Monitor web application built as a hobby. This project uses
          a Raspberry PI and an assortment of sensors to monitor particulate matter in the 
          atmosphere and displays the readings in a web application.
        </p>
        <h3>Project Stack:</h3>
        <span className="stack">
          <p className="stack-item">HTML5</p>
          <p className="stack-item">CSS</p>
          <p className="stack-item">React.js</p>
          <p className="stack-item">Node.js</p>
          <p className="stack-item">MongoDB</p>
          <p className="stack-item">Express.js</p>
        </span>
        <h3>This project can be found at:</h3>
        <p className="stack-item"><a href='https://phoenix-live.herokuapp.com/'>https://phoenix-live.herokuapp.com/ </a></p>
        <span>
        <a href="https://github.com/CalumBradbury24/Portfolio">
          <Logo />
        </a>
        </span>
      </div>
    </div>
  );
};

export default AirQualityMonitor;