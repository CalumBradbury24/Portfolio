import React from "react";
import "./Trip-wire.styles.scss";
import Lilly1 from "../../../assets/lilly1.jpg";

const TripWire = () => {
  return (
    <React.Fragment>
      <div>
        <img src={Lilly1} className="trip-image" alt="lilly" />
      </div>
      <div className="text-container">
        <h2 className="card-title">Laser Trip Wire</h2>
        <p className='description'>
          A laser trip wire project using a Rasbperry Pi, photo resistor, laser
          pointer, pi camera module and Python. My cat is notorious for bringing
          mice into the house and leaving them alive for us to find later on. A
          trip wire placed infront of her cat-flap triggers a camera everytime
          she passes by, thus we know when she has brought a mouse in!
        </p>
      </div>
      <div className="links" id="laser" />
    </React.Fragment>
  );
};

export default TripWire;
