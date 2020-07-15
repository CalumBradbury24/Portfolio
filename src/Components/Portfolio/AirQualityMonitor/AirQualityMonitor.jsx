import React from "react";
import "./AirQualityMonitor.styles.scss";
import air from "../../../assets/AirQuality.jpg";
import { ReactComponent as Logo } from "../../../assets/github.svg";

const AirQualityMonitor = () => {
  return (
    <div className="AirQuality ">
      <img className="air-image" src={air} alt="Air Monitor Application" />
      <div className ='air-container'>
        <h2>Air Quality Monitor</h2>
        <p className='par'>
          An Air Quality Monitor web application built as a hobby. This project
          uses a Raspberry PI and an assortment of sensors to monitor
          particulate matter in the atmosphere and displays the readings on a
          dashboard.
        </p>
        <h4 className ='airQuality-stack'>Project Stack:</h4>
        <span className="air-stack">
          <p className="stack-item par"><i>HTML5</i></p>
          <p className="stack-item par"><i>CSS</i></p>
          <p className="stack-item par"><i>React.js</i></p>
          <p className="stack-item par"><i>Node.js</i></p>
          <p className="stack-item par"><i>MongoDB</i></p>
          <p className="stack-item par"><i>Express.js</i></p>
          <p className="stack-item par"><i>PMS5003 Python Library</i></p>
        </span>
        <h4 className ='airQuality-stack'>Hardware:</h4>
        <span className="air-stack">
          <p className="stack-item par">
            <i>Raspberry Pi 3 Model B+</i>
          </p>
          <p className="stack-item par">
            <i>PMS5003 Particulate Matter Sensor</i>
          </p>
        </span>
        <p className="stack-item">
          <a href="https://air-qual-monitor.herokuapp.com/">
            https://air-qual-monitor.herokuapp.com/
          </a>
        </p>
        <span className="ima">
          <a href="https://github.com/CalumBradbury24/AirQualityMonitor">
            <Logo />
          </a>
        </span>
      </div>
    </div>
  );
};

export default AirQualityMonitor;
