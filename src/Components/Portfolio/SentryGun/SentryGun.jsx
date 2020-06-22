import React from "react";
import "./SentryGun.styles.scss";
import sentryGun from "../../../assets/sentryGun.png";

const SentryGun = () => {
  return (
    <div className="Thesis ">
      <img className="thesis-image" src={sentryGun} alt="Sentry Gun" />
      <div className="container">
        <h2>Arduino Sentry Gun</h2>
        <p>
          A sentry gun project built using an Arduino Uno microcontroller and a
          plastic toy gun. Using a webcam to track its target, the sentry gun was able to
          distinguish between colours and stationary/non-stationary objects. Thus, for example, 
          it could be set so that it would only shoot if you were wearing red clothes.
        </p>
        <h3>Project Software & Hardware:</h3>
        <span className="stack3">
          <p className="stack-item3">C Programming Language</p>
          <p className="stack-item3">Project Sentry Gun software</p>
          <p className="stack-item3">Arduino Uno Micro-Controller</p>
        </span>
      </div>
    </div>
  );
};

export default SentryGun;
