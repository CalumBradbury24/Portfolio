import React from "react";
import "./CustomButton.styles.scss";

const CustomButton = ({link, text}) => {
  return (
    <div className="custom-button">
        <a className = 'button' href={link} download>
          {text}
        </a>
    </div>
  );
};

export default CustomButton;
