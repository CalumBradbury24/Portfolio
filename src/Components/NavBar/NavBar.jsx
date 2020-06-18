import React from "react";
import "./NavBar.styles.scss";
import { Link } from "react-scroll";

class NavBar extends React.Component {
  render() {
    return (
      <div className='nav sticky'>
        <ul className="list">
          <Link
            className="navbar-item"
            activeClass="active"
            to="Contact"
            spy={true}
            smooth={true}
            offset={-90}
            duration={600}
            isDynamic={true}
          >
            CONTACT
          </Link>
          <Link
            className="navbar-item"
            activeClass="active"
            to="About-me"
            spy={true}
            smooth={true}
            offset={-90}
            duration={600}
            isDynamic={true}
          >
            ABOUT ME
          </Link>
          <Link
            className="navbar-item"
            activeClass="active"
            to="Resume"
            spy={true}
            smooth={true}
            offset={-90}
            duration={600}
            isDynamic={true}
          >
            RESUME
          </Link>
          <Link
           className="navbar-item"
            activeClass="active"
            to="Portfolio"
            spy={true}
            smooth={true}
            offset={-90}
            duration={600}
            isDynamic={true}
          >
            PORTFOLIO
          </Link>
        </ul>
      </div>
    );
  }
}

export default NavBar;
