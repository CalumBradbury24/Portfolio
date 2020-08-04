import React from "react";
import "./Thesis.styles.scss";
import thesis from "../../../assets/thesis.jpg";
import ThesisButton from "../../CustomButton/ThesisButton";

const Thesis = () => {
  return (
    <div>
      <img className="thesis-image" src={thesis} alt="Thesis title page" />
      <div className="thesis-container">
        <h2>Photonic Reservoir Computing</h2>
        <p>
          My Master's thesis presented in partial fullfilment for the degree of
          MEng Electrical & Electronic Engineering at the University of
          Nottingham. This project consisted of the sucessful design of a novel type of
          Artificial Neural Network (Reservoir Computer) for the optical
          processing of high bandwidth signals.
        </p>
        <h4 className ='thesis-stack'>Project Software:</h4>
        <span className="stack">
          <p className="stack-item"><i>MATLAB</i></p>
          <p className="stack-item"><i>Lumerical Photonic Simulation Software</i></p>
        </span>
        <span className='thesis-button'>
          <ThesisButton />
        </span>
      </div>
    </div>
  );
};

export default Thesis;
