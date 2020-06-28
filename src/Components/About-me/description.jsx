import React from "react";
import "./description.styles.scss";

const Description = () => {
  return (
    <div className="description">
      <p className="text">
        Hello I am Calum! A <span className='red'>Masters of Electrical & Electronic Engineering 
        (MEng)</span> graduate with a passion for <span className='blue'>software and writing code</span>. I am very
        enthusiastic about technology and have a  <span className='orange'>wide range of software and
        hardware experience!</span>
        <br />
        <br />
        In my free time I enjoy working on my own technology related personal
        projects (including this website itself), a number of which can be found
        here. I also love to dance! As a Member of the University of Nottingham
        DanceSport Team I have competed in multiple national Ballroom & Latin
        dance competitions. Including the Inter Varsity Dance Championships
        (IVDC) at the Winter Gardens in Blackpool, UK.
      </p>
    </div>
  );
};

export default Description;
