import React from "react";
import "./CustomButton.styles.scss";

const CustomButton = () => {
  return (
    <div className="custom-button">
      <span>
        <a href="CalumBradburyCV.pdf" download>
          DOWNLOAD RESUME
        </a>
      </span>
    </div>
  );
};

export default CustomButton;
