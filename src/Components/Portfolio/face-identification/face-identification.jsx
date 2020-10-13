import React from "react";
import "./face-identification.styles.scss";
import face from "../../../assets/face.jpg";
import { ReactComponent as Logo } from "../../../assets/github.svg";
import CustomButton from "../../CustomButton/CustomButton";

const FaceIdentification = () => {
  return (
    <React.Fragment>
      <img src={face} className="face-image" alt="face" />
      <div className="text-container">
        <h2 className="card-title">Face Recognition Web App</h2>
        <p className='description'>
          A web application built using React.js and the Clarifai API that
          detects a face in an image.
        </p>
      </div>
      <div className="links" id="face">
        <div className="link-item">
          <a href="https://github.com/CalumBradbury24/Face-detection">
            <Logo />
          </a>
        </div>
        <div className="link-item">
          <CustomButton link={"https://face-identify.herokuapp.com/"} text={"LIVE WEB APP"} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default FaceIdentification;
