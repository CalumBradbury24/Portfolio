import React from "react";
import "./ecommerce.styles.scss";
import clothesPic from "../../../assets/phoenixclothing.jpg";
import { ReactComponent as Logo } from "../../../assets/github.svg";

const Ecommerce = () => {
  return (
    <div>
      <img className='eco-image' src={clothesPic} alt="Phoenix Clothing" />
      <div className='text-container'>
        <h2>Ecommerce Web Application</h2>
        <p>
          An ecommerce clothing store web application built as a hobby and in
          order to learn advanced features of React.js such as Redux and Hooks.
        </p>
        <h4 className ='ecommerce-stack'>Project Stack:</h4>
        <span className="stack">
          <p className="stack-item"><i>HTML5</i></p>
          <p className="stack-item"><i>CSS</i></p>
          <p className="stack-item"><i>React.js</i></p>
          <p className="stack-item"><i>Firebase</i></p>
        </span>
        <p className="stack-item"><a href='https://phoenix-live.herokuapp.com/'>https://phoenix-live.herokuapp.com/ </a></p>
        <span className='git-image'>
        <a href="https://github.com/CalumBradbury24/Phoenix-Clothing">
          <Logo />
        </a>
        </span>
      </div>
    </div>
  );
};

export default Ecommerce;
