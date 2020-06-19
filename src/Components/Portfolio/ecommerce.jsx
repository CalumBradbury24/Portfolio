import React from "react";
import "./ecommerce.styles.scss";
import clothesPic from "../../assets/phoenixClothing.PNG";
import { ReactComponent as Logo } from "../../assets/github.svg";

const Ecommerce = () => {
  return (
    <div className="Ecommerce ">
      <img src={clothesPic} alt="Phoenix Clothing" />
      <div>
        <h2>Ecommerce Web Application</h2>
        <p>
          An ecommerce clothing store web application built as a hobby and in
          order to learn advanced features of React.js such as Redux, Hooks and
          graphQL.
        </p>
        <h3>Project Stack:</h3>
        <span className="stack">
          <p className="stack-item">HTML5</p>
          <p className="stack-item">CSS</p>
          <p className="stack-item">React.js</p>
          <p className="stack-item">Firebase</p>
        </span>
        <a
          href="https://github.com/CalumBradbury24/Portfolio"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Logo />
        </a>
      </div>
    </div>
  );
};

export default Ecommerce;
