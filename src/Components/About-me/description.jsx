import React from "react";
import "./description.styles.scss";
import dance from "../../assets/dance.jpeg";

const Description = () => {
  return (
    <div className="description">
      <p className="text">
        I am a driven and adaptable Masters of Electrical & Electronic
        Engineering (MEng) graduate with real-world work experience in a range
        of positions. Analytically minded and very enthusiastic about
        technology, I have experience in a wide assortment of software and
        programming languages and have a great desire to learn new skills and
        improve existing ones further.
        <br />
        <br />
        In my free time I love to dance as a Member of the University of
        Nottingham DanceSport Team. I have competed in multiple national
        Ballroom & Latin dance competitions, including the Inter Varsity Dance
        Championships (IVDC) at the Winter Gardens in Blackpool. I also enjoy
        working on personal software and electronics related projects, may of
        which can be viewed on this website. (include guitar/maybe LED cube? etc). have 
        selection menu to view web apps or additional projects.
      </p>
      <img style={{ padding: "0" }} src={dance} alt="dance"></img>
    </div>
  );
};

export default Description;
