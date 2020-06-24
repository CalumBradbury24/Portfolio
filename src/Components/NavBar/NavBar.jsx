import React from "react";
import "./NavBar.styles.scss";
import { Link } from "react-scroll";

class NavBar extends React.Component {

state = {
  isSelected : "",
}

handleClick = (event) => () => {
  this.setState({ isSelected: event });
  console.log(event);
};

  render() {
    const { isSelected } = this.state;
    return (
      <div className='nav sticky'>
        <ul className="list">
          <Link
            className={"navbar-item " + (isSelected === "Contact" ? 'stayOrange' : 'default') }
            activeClass="active"
            to="Contact"
            spy={true}
            smooth={true}
            offset={-83}
            duration={600}
            isDynamic={true}
            onClick={this.handleClick("Contact")}
          >
            CONTACT
          </Link>
          <Link
            className={"navbar-item " + (isSelected==='About-me' ? 'stayOrange' : 'default')}
            activeClass="active"
            to="About-me"
            spy={true}
            smooth={true}
            offset={-80}
            duration={600}
            isDynamic={true}
            onClick={this.handleClick("About-me")}
          >
            ABOUT ME
          </Link>
          <Link
            className={"navbar-item " + (isSelected==='Resume' ? 'stayOrange' : 'default')}
            activeClass="active"
            to="Resume"
            spy={true}
            smooth={true}
            offset={-73}
            duration={600}
            isDynamic={true}
            onClick={this.handleClick("Resume")}
          >
            RESUME
          </Link>
          <Link
           className={"navbar-item " + (isSelected === 'Portfolio' ? 'stayOrange' : 'default')}
            activeClass="active"
            to="Portfolio"
            spy={true}
            smooth={true}
            offset={-73}
            duration={600}
            isDynamic={true}
            onClick={this.handleClick("Portfolio")}
          >
            PORTFOLIO
          </Link>
        </ul>
      </div>
    );
  }
}

export default NavBar;
