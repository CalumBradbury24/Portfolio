import React from "react";
import "./NavBar.styles.scss";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  let location = useLocation(); //React Router hook to get current path

  return (
    <div className="nav sticky">
      <ul className="list">
        <Link
          className={
            "navbar-item " +
            (location.pathname === "/" ? "stayOrange" : "default")
          }
          to="/"
        >
          Home
        </Link>
        <Link
          className={
            "navbar-item " +
            (location.pathname === "/resume" ? "stayOrange" : "default")
          }
          to="/resume"
        >
          Resume
        </Link>
        <Link
          className={
            "navbar-item " +
            (location.pathname === "/projects" ? "stayOrange" : "default")
          }
          to="projects"
        >
          Portfolio
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
