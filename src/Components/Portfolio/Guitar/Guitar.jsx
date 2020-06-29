import React from "react";
import "./Guitar.styles.scss";
import Guitar from "../../../assets/Guitar.jpg";

const GuitarProject = () => {
  return (
    <div className="Guitar ">
      <img className="guitarImage" src={Guitar} alt="Guitar" />
      <div className="container">
        <h2>Electric Guitar</h2>
        <p>
          I’m a huge rock music fan and have always loved playing the guitar.
          Thus building my own electric guitar was a huge passion project of
          mine!
        </p>
      </div>
    </div>
  );
};

export default GuitarProject;
