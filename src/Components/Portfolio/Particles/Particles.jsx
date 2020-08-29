import React from "react";
import "./Particles.styles.scss";
import { ReactComponent as Logo } from "../../../assets/github.svg";

const ParticleProject = () => {
  return (
    <React.Fragment>
      <video className="particle-image" autoPlay loop muted playsInline>
        <source src="particles.webm" type="video/webm" />
        <source src="particles.mp4" type="video/mp4" />
      </video>
      <div className="text-container">
        <h2 className="card-title">Particle Explosion</h2>
        <p>A particle explosion effect built as a mini C++ project.</p>
      </div>
      <div className="links" id='particles'>
        <div className="link-item">
          <a href="https://github.com/CalumBradbury24/Particle-explosion/tree/master/Particle-explosion/src">
            <Logo />
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ParticleProject;
