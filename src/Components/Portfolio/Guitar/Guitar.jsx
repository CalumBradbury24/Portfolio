import React from "react";
import "./Guitar.styles.scss";
import Guitar from "../../../assets/Guitar.jpg";

const GuitarProject = () => {
  return (
    <React.Fragment>
      <img src={Guitar} className="guitar-image" alt='guitar'/>
      <div className="text-container">
        <h2 className="card-title">Electric Guitar</h2>
        <p>
          Being a huge rock music fan (Van Halen in particular) and having
          always loved playing the guitar, building my own electric guitar was a
          huge passion project of mine!
        </p>
      </div>
      <div className="links" id='guitar'/>
    </React.Fragment>
  );
};

export default GuitarProject;

