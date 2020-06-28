import React from "react";
import "./NavBar.styles.scss";
import { Link } from "react-scroll";

class NavBar extends React.Component {
  state = {
    isSelected: "",
    status: "top",
  };
  listener = null;

  componentDidMount() {
    this.listener = document.addEventListener("scroll", () => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 700) {
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
          background: this.state.status === "top" ? "" : "white",
          border:
            this.state.status === "top" ? "" : "solid 1px black",
            color: this.state.status === "top" ? "white" : "black",
            fontWeight:"bold"       
           }}
      >
        <ul className="list">
          <Link
            className={
              "navbar-item " +
              (isSelected === "SplashScreen" ? "stayOrange" : "default")
            }
            activeClass="active"
            to="splash"
            spy={true}
            smooth={true}
            offset={-83}
            duration={600}
            isDynamic={true}
            onClick={this.handleClick("SplashScreen")}
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
