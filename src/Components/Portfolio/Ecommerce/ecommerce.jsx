import React from "react";
import "./ecommerce.styles.scss";
import { ReactComponent as Logo } from "../../../assets/github.svg";
import CustomButton from "../../CustomButton/CustomButton";
import ecom from "../../../assets/phoenixclothing.jpg";
const Ecommerce = () => {
  return (
    <React.Fragment>
      <img src={ecom} className="eco-image" alt="ecommerce" />
      <div className="text-container">
        <h2 className="card-title">Ecommerce Web App</h2>
        <p>
          An ecommerce clothing store hobby project built using React.js (Hooks,
          Redux), HTML5, CSS & Firebase.
        </p>
      </div>
      <div className="links" id="eco">
        <div className="link-item">
          <a href="https://github.com/CalumBradbury24/Phoenix-Clothing">
            <Logo />
          </a>
        </div>
        <div className="link-item">
          <CustomButton
            link={"https://phoenix-live.herokuapp.com/"}
            text={"LIVE WEB APP"}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Ecommerce;
