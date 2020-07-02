import React from "react";
import "./SentryGun.styles.scss";
import sentryGun from "../../../assets/sentryGun.jpg";

const SentryGun = () => {
  return (
    <div className="Sentry ">
      <img className="sentry-image" src={sentryGun} alt="Sentry Gun" />
      <div className="sentry-container">
        <h2>Arduino Sentry Gun</h2>
        <p className = 'par'>
          A sentry gun project built using an Arduino Uno microcontroller and a
          plastic toy gun. Using a webcam to track its target, the sentry gun was able to
          distinguish between colours and stationary/non-stationary objects. Thus, for example, 
          it could be set so that it would only shoot if you were wearing red clothes.
        </p>
        <h4 className ='sentry-stack'>Project Software & Hardware:</h4>
        <span className="stack">
          <p className="stack-item par"><i>C Programming Language</i></p>
          <p className="stack-item par"><i>Project Sentry Gun software</i></p>
          <p className="stack-item par"><i>Arduino Uno Micro-Controller</i></p>
        </span>
      </div>
    </div>
  );
};

export default SentryGun;
