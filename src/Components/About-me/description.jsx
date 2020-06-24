import React from "react";
import "./description.styles.scss";
import dance from "../../assets/dance.jpeg";

const Description = () => {
  return (
    <div className="description">
      <p className="text">
        I am a driven and adaptable Masters of Electrical & Electronic
        Engineering (MEng) with a passion for software. Analytically minded and
        very enthusiastic about technology, I have experience in a wide
        assortment of software and programming languages and have a great desire
        to learn new skills and improve existing ones further.
        <br />
        <br />
        In my free time I enjoy working on my own technology related personal
        projects (including this website itself), a number of which can be found
        here. I also love to dance! As a Member of the University of Nottingham
        DanceSport Team I have competed in multiple national Ballroom & Latin
        dance competitions. Including the Inter Varsity Dance Championships
        (IVDC) at the Winter Gardens in Blackpool.
      </p>
      <img style={{ padding: "0" }} src={dance} alt="dance"></img>
    </div>
  );
};

export default Description;
