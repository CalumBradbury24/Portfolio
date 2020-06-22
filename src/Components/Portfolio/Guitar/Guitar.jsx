import React from "react";
import "./Guitar.styles.scss";
import Guitar from "../../../assets/Guitar.jpg";


const GuitarProject = () => {
  return (
    <div className="Thesis ">
      <img className="thesis-image" src={Guitar} alt="Guitar" />
      <div className="container">
        <h2>Electric Guitar</h2>
        <p>
          I’m a huge rock music fan and love to play the guitar. Thus when deciding
          on my next guitar to purchase, I thought it would be far more interesting
          to build my own instead!
        </p>
      </div>
    </div>
  );
};

export default GuitarProject;
