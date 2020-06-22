import React from "react";
import "./Thesis.styles.scss";
import thesis from "../../../assets/thesis.PNG";
import ThesisButton from "../../CustomButton/ThesisButton";

const Thesis = () => {
  return (
    <div className="Thesis ">
      <img className="thesis-image" src={thesis} alt="Thesis title page" />
      <div className="container">
        <h2>
          Photonic Reservoir Computing for High Bandwidth Signal Processing
          Applications
        </h2>
        <p>
          My Master's thesis presented in partial fullfilment for the degree of
          MEng Electrical & Electronic Engineering at the University of
          Nottingham.
        </p>
        <h3>Project Software:</h3>
        <span className="stack3">
          <p className="stack-item3">MATLAB</p>
          <p className="stack-item3">Lumerical Photonic Simulation Software</p>
        </span>
        <span>
        <ThesisButton className="pad" />
        </span>
      </div>
    </div>
  );
};

export default Thesis;
