import React from "react";
import "./Guitar.styles.scss";
import Guitar from "../../../assets/Guitar.jpg";

const GuitarProject = () => {
  return (
    <div className="Guitar ">
      <img className="guitar-image" src={Guitar} alt="Guitar" />
      <div className="guitar-container">
        <h2>Electric Guitar</h2>
        <p>
          Being a huge rock music fan (Van Halen in particular) and having always loved playing the guitar,
          building my own electric guitar was a huge passion project of
          mine!
        </p>
      </div>
    </div>
  );
};

export default GuitarProject;
