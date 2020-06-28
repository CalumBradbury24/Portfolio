import React from "react";
import "./CustomButton.styles.scss";

const ThesisButton = () => {
  return (
    <div className="custom-button">
      <span>
        <a className = 'button' href="CalumBradburyThesis.pdf" download>
          DOWNLOAD THESIS
        </a>
      </span>
    </div>
  );
};

export default ThesisButton;