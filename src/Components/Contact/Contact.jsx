import React from "react";
import "./Contact.styles.scss";
import Pic from "../../assets/portfolio.jpg";

const Contact = () => {
  return (
    <div className="Contact">
      <div className= 'wrapper'>
        <img src={Pic} alt="Author"/>
        <div className="text">
          <h1>Calum Bradbury</h1>
          <h4>MEng Electrical & Electronic Engineering Graduate</h4>
          <p>AGE: 25</p>
          <p>PHONE: +44 7383514483</p>
          <p>EMAIL: cs.bradbury@outlook.com</p>
          <p>ADDRESS: 58 Priory Walk, Leicester, LE3 3PP</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
