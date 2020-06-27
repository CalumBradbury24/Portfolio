import React from "react";
import "./AirQualityMonitor.styles.scss";
//import clothesPic from "../../../assets/phoenixClothing.PNG";
import { ReactComponent as Logo } from "../../../assets/github.svg";

const AirQualityMonitor = () => {
  return (
    <div className="Ecommerce ">
      <img className = "air-image" alt="Air Monitor Application" />
      <div>
        <h2>Air Quality Monitor</h2>
        <p>
          An Air Quality Monitor web application built as a hobby. This project
          uses a Raspberry PI and an assortment of sensors to monitor
          particulate matter in the atmosphere and displays the readings in a
          web application.
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
        <h3>Hardware:</h3>
        <span className="stack">
          <p className="stack-item">Raspberry Pi 3 Model B+</p>
          <p className="stack-item">Particulate Matter Sensor</p>
        </span>
        <h3>This project can be found at:</h3>
        <p className="stack-item">
          <a href="https://air-qual-monitor.herokuapp.com/">
            https://air-qual-monitor.herokuapp.com/
          </a>
        </p>
        <span className="git-image">
          <a href="https://github.com/CalumBradbury24/AirQualityMonitor">
            <Logo />
          </a>
        </span>
      </div>
    </div>
  );
};

export default AirQualityMonitor;
