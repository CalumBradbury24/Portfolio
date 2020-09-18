import React from "react";
import "./PortfolioPage.styles.scss";
import Ecommerce from "../../Components/Portfolio/Ecommerce/ecommerce";
import AirQualityMonitor from "../../Components/Portfolio/AirQualityMonitor/AirQualityMonitor";
import Thesis from "../../Components/Portfolio/Thesis/Thesis";
import GuitarProject from "../../Components/Portfolio/Guitar/Guitar";
import ParticleProject from "../../Components/Portfolio/Particles/Particles";
import LaserTripWire from "../../Components/Portfolio/trip-wire/Trip-wire";
import FaceIdentification from '../../Components/Portfolio/face-identification/face-identification';
import StockTracker from '../../Components/Portfolio/Stock-tracker/Stock-tracker';

const Portfolio = () => {
  return (
    <div className="Portfolio">
      <div className="container"><Ecommerce/></div>
      <div className="container"><AirQualityMonitor/></div>
      <div className="container"><StockTracker/></div>
      <div className="container"><ParticleProject/></div>
      <div className="container"><LaserTripWire/></div>
      <div className="container"><FaceIdentification/></div>
      <div className="container"><Thesis/></div>
      <div className="container"><GuitarProject/></div>
    </div>
  );
};

export default Portfolio;
