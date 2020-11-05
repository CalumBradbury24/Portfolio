import React from "react";
import "./AirQualityMonitor.styles.scss";
import { ReactComponent as Logo } from "../../../assets/github.svg";
import CustomButton from '../../CustomButton/CustomButton';
const AirQualityMonitor = () => {
  return (
    <React.Fragment>
      <video className="stock-image" autoPlay loop muted playsInline>
        <source src="AirQualityMonitor.mp4" type="video/mp4" />
        Your browser does not support this video
      </video>
      <div className="text-container">
        <h2 className="card-title">Air Quality Monitor</h2>
        <p>
          A hobby project built using React.js, HTML5, CSS, Node.js, Express,js,
          MongoDB, Raspberry Pi, PMS5003 Particulate Matter Sensor
          and PMS5003 Python Library. This project monitors particulate matter in the
          atmosphere and displays and analyses the readings on a dashboard.
        </p>
      </div>
      <div className="links" id='air-background'>
        <div className="link-item">
          <a href="https://github.com/CalumBradbury24/AirQualityMonitor">
            <Logo />
          </a>
        </div>
        <div className="link-item">
          <CustomButton 
            link={"https://air-qual-monitor.herokuapp.com/"}
            text={"LIVE WEB APP"}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default AirQualityMonitor;
