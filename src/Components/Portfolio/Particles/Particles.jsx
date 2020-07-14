import React from "react";
import "./Particles.styles.scss";
import { ReactComponent as Logo } from "../../../assets/github.svg";

const SentryGun = () => {
  return (
    <div className="ParticleProject">
     <video className = 'particle-image' autoPlay loop muted playsInline>
     <source src="particles.webm" type="video/webm"/>
         <source src="particles.mp4" type="video/mp4" />
     </video>
      <div className="part-container">
        <h2>Particle explosion</h2>
        <p className = 'par'>
         A particle explosion effect built as a mini C++ project.
        </p>
        <h4 className ='particle-stack'>Project Stack:</h4>
        <span className="stack">
          <p className="stack-item par"><i>C++</i></p>
          <p className="stack-item par"><i>SDL C++ Library</i></p>
        </span>
        <span className='ima'>
        <a href="https://github.com/CalumBradbury24/Phoenix-Clothing">
          <Logo />
        </a>
        </span>
      </div>
    </div>
  );
};

export default SentryGun;
