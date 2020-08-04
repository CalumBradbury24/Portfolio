import React from "react";
import "./CustomButton.styles.scss";

const CustomButton = () => {
  return (
    <div className="custom-button thesis-button'">
      <span className>
        <a className = 'button' href="Calum Bradbury CV.pdf" download>
          DOWNLOAD RESUME
        </a>
      </span>
    </div>
  );
};

export default CustomButton;
