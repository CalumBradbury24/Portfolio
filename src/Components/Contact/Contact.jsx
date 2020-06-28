import React from "react";
import "./Contact.styles.scss";
import Pic from "../../assets/portfolio.jpg";
import WordCloud from './WordCloud';
const Contact = () => {
  return (
    <div className="Contact">
      <div className="wrapper animated zoomIn delay-1s">
        <img className='image' src={Pic} alt="Author" />
        <div className="text">
          <h1 className="H1">Calum Bradbury</h1>
          <h4 className ="H4">MEng Electrical & Electronic Engineering Graduate</h4>
          <p className ='P'><strong>AGE:</strong> 25</p>
          <p className ='P'><strong>PHONE:</strong> +44 7383514483</p>
          <p className ='P'><strong>EMAIL: </strong>cs.bradbury@outlook.com</p>
          <p className ='P'><strong>ADDRESS:</strong> 58 Priory Walk, Leicester, LE3 3PP</p>
        </div>
        <div> 
        <WordCloud />
        </div>
      </div>
    </div>
  );
};

export default Contact;
