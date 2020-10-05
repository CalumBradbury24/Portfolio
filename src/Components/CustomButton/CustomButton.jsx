import React from "react";
import "./CustomButton.styles.scss";

const CustomButton = ({link, text}) => {
  return (
    <div className="custom-button">
        <a className = 'button' href={link} data-test='button-test' download>
          {text}
        </a>
    </div>
  );
};

export default CustomButton;
