import React from "react";
import "./Stock.styles.scss";
import { ReactComponent as Logo } from "../../../assets/github.svg";

const StockTracker = () => {
  return (
    <React.Fragment>
      <video className="stock-image" autoPlay loop muted playsInline>
        <source src="Stock.mp4" type="video/mp4" />
        Your browser does not support this video
      </video>
      <div className="text-container">
        <h2 className="card-title">Personal Portfolio</h2>
        <p>As an avid investor I decided to build a Web application using React.js (Hooks, Redux), Firebase and the IEX cloud API to track my investment portfolio.</p>
        <p>Due to the sensitive nature of this project it is not hosted on the web. Source code is viewable on my github account.</p>
      </div>
      <div className="links" id='stocks'>
        <div className="link-item">
          <a href="https://github.com/CalumBradbury24/stock-tracker">
            <Logo />
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StockTracker;