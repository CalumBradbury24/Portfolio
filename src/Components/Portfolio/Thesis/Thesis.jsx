import React from "react";
import "./Thesis.styles.scss";
import clothesPic from "../../../assets/phoenixClothing.PNG";


const Thesis = () => {
  return (
    <div className="Ecommerce ">
      <img src={clothesPic} alt="Phoenix Clothing" />
      <div>
        <h2>Photonic Reservoir Computing for High Bandwidth Signal Processing Applications</h2>
        <p>
          My Master's thesis presented in partial fullfilment for the degree of
          MEng Electrical & Electronic Engineering at the University of Nottingham.
        </p>
        <h3>Project Software:</h3>
        <span className="stack">
          <p className="stack-item">MATLAB</p>
          <p className="stack-item">Lumerical Photonic Simulation Software</p>
        </span>
      </div>
    </div>
  );
};

export default Thesis;
