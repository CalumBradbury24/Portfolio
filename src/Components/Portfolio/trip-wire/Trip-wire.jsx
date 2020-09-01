import React from "react";
import "./Trip-wire.styles.scss";
import Lilly1 from "../../../assets/lilly1.jpg";
import Lilly2 from "../../../assets/lilly2.jpg";
import Lilly3 from "../../../assets/lilly3.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const TripWire = () => {
  return (
    <React.Fragment>
      <Carousel
        showStatus={false}
        autoPlay
        showThumbs={false}
        showArrows={false}
      >
        <div>
          <img src={Lilly1} className="trip-image" alt="lilly" />
        </div>
        <div>
          <img src={Lilly2} className="trip-image" alt="lilly" />
        </div>
        <div>
          <img src={Lilly3} className="trip-image" alt="lilly" />
        </div>
      </Carousel>
      <div className="text-container">
        <h2 className="card-title">Laser Trip Wire</h2>
        <p>
          A laser trip wire project using a Rasbperry Pi, photo
          resistor, laser pointer, pi camera module and Python. My cat is
          notorious for bringing mice into the house and leaving them alive
          for us to find later on. A trip wire placed infront of her
          cat-flap triggers a camera everytime she passes by, thus we
          know when she has brought a mouse in!
        </p>
      </div>
      <div className="links" id="laser" />
    </React.Fragment>
  );
};

export default TripWire;
