import React from "react";
import "./ecommerce.styles.scss";
import { ReactComponent as Logo } from "../../../assets/github.svg";

const Ecommerce = () => {
  return (
    <React.Fragment>
      <div className="eco-image" />
      <div className="text-container">
        <h2 className="card-title">Ecommerce Web Application</h2>
        <p>
          An ecommerce clothing store hobby project built using React.js (Hooks,
          Redux), HTML5, CSS & Firebase.
        </p>
      </div>
      <div className="links" id='eco'>
        <div className="link-item">
          <a href="https://github.com/CalumBradbury24/Phoenix-Clothing">
            <Logo />
          </a>
        </div>
        <div className="link-item">
          <button className="card-button ">
            <a href="https://phoenix-live.herokuapp.com/">LIVE WEB APP</a>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Ecommerce;

