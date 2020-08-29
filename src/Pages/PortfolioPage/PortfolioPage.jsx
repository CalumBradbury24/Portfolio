import React from "react";
import "./PortfolioPage.styles.scss";
import Ecommerce from "../../Components/Portfolio/EcommerceWebApp/ecommerce";
import AirQualityMonitor from "../../Components/Portfolio/AirQualityMonitor/AirQualityMonitor";
import Thesis from "../../Components/Portfolio/Thesis/Thesis";
import GuitarProject from "../../Components/Portfolio/Guitar/Guitar";
import ParticleProject from "../../Components/Portfolio/Particles/Particles";

const Portfolio = () => {
  return (
    <div className="Portfolio">
      <div className="container"><Ecommerce/></div>
      <div className="container"><AirQualityMonitor/></div>
      <div className="container"><ParticleProject/></div>
      <div className="container"><Thesis/></div>
      <div className="container"><GuitarProject/></div>
    </div>
  );
};

export default Portfolio;
