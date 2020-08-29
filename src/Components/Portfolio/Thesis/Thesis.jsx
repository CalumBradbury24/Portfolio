import React from "react";
import "./Thesis.styles.scss";
import thesis from "../../../assets/thesis.jpg";
import CustomButton from "../../CustomButton/CustomButton";

const Thesis = () => {
  return (
    <React.Fragment>
      <img src={thesis} className="thesis-image" alt="thesis" />
      <div className="text-container">
        <h2 className="card-title">Photonic Reservoir Computing</h2>
        <p>
          My Master's thesis presented in partial fullfilment for the degree of
          MEng Electrical & Electronic Engineering at the University of
          Nottingham. This project consisted of the sucessful design of a novel
          type of Artificial Neural Network (Reservoir Computer) for the optical
          processing of high bandwidth signals.
        </p>
      </div>
      <div className="links" id="thesis">
        <div className="link-item" />
        <div className="link-item">
          <CustomButton
            link={"CalumBradburyThesis.pdf"}
            text={"DOWNLOAD THESIS"}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Thesis;
