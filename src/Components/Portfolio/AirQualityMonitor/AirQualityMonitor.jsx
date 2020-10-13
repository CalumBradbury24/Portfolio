import React from "react";
import "./AirQualityMonitor.styles.scss";
import air from "../../../assets/airMonitor.jpg";
import { ReactComponent as Logo } from "../../../assets/github.svg";
import CustomButton from '../../CustomButton/CustomButton';
const AirQualityMonitor = () => {
  return (
    <React.Fragment>
      <img src={air} className="air-image" alt='air monitor'/>
      <div className="text-container">
        <h2 className="card-title">Air Quality Monitor</h2>
        <p className='description'>
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
