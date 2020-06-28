import React from "react";
import { ReactComponent as Logo } from "../../assets/github.svg";
import "./Footer.styles.scss";
import Particles from "react-particles-js";

const particlesOptions = {
  particles: {
    number: {
      value: 400, //How many particles on screen
      density: {
        enable: true,
        value_area: 1000,
      },
    },
    color: "#e85656",
    line_linked: {
      enable_auto: false,
      color: "#413d3d",
      opacity: 0,
    },
    size: {
      value: 3,
      random: true,
    },
  },
};

const Footer = () => {
  return (
    <div className="footer">
      <Particles className="Particles" params={particlesOptions} />
      <div className="footer-text">
        {" "}
        <p className="margin">All work by Calum Bradbury.</p>
        <p className="margin">
          Site built using React.js, HTML & SASS and hosted with Heroku.
        </p>
      </div>
      <div className="position-git">
        <a href="https://github.com/CalumBradbury24">
          <Logo className="dimensions" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
