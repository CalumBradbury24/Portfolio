import React from "react";
import "./NavBar.styles.scss";
import Particles from "react-particles-js";
import { Link } from "react-scroll";

const particlesOptions = {
  particles: {
    number: {
      value: 400, //How many particles on screen
      density: {
        enable: true,
        value_area: 1000,
      },
    },
    color: "#e85656",
    line_linked: {
      enable_auto: false,
      color: "#413d3d",
      opacity: 0,
    },
    size: {
      value: 3,
      random: true,
    },
  },
};

class NavBar extends React.Component {
  state = {
    isSelected: "",
    status: "top",
  };
  listener = null;

  componentDidMount() {
    this.listener = document.addEventListener("scroll", () => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 350) {
        if (this.state.status !== "moved") {
          this.setState({ status: "moved" });
        }
      } else {
        if (this.state.status !== "top") {
          this.setState({ status: "top" });
        }
      }
    });
  }

  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }

  handleClick = (event) => () => {
    this.setState({ isSelected: event });
    console.log(event);
  };

  render() {
    const { isSelected } = this.state;
    return (
      <div
        className="nav sticky"
        style={{
          backgroundColor: this.state.status === "top" ? "#dbffe1" : "white",
          border: this.state.status === "top" ? "solid 1px rgb(219, 255, 225)" : "",
        }}
      >
        <Particles className="particles" params={particlesOptions} />
        <ul className="list">
          <Link
            className={
              "navbar-item " +
              (isSelected === "Contact" ? "stayOrange" : "default")
            }
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
            className={
              "navbar-item " +
              (isSelected === "About-me" ? "stayOrange" : "default")
            }
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
            className={
              "navbar-item " +
              (isSelected === "Resume" ? "stayOrange" : "default")
            }
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
            className={
              "navbar-item " +
              (isSelected === "Portfolio" ? "stayOrange" : "default")
            }
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
