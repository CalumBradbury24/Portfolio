import React from "react";
import "./Portfolio.styles.scss";
import Ecommerce from "./EcommerceWebApp/ecommerce";
import AirQualityMonitor from "./AirQualityMonitor/AirQualityMonitor";
import Thesis from "./Thesis/Thesis";

const Portfolio = () => {
  return (
    <div className="Portfolio">
      <h2>My Projects</h2>
      <Ecommerce />
      <br />
      <br />
      <AirQualityMonitor />
      <br />
      <br />
      <Thesis />
    </div>
  );
};

export default Portfolio;
