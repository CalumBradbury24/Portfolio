import React, {useState} from "react";
import "./NavBar.styles.scss";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/hamburger.svg";
const NavBar = () => {
  let location = useLocation(); //React Router hook to get current path
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="responsive-toolbar" >
      <ul className={navOpen ? "active" : ""}>
      <figure onClick={() => setNavOpen(!navOpen)}>
          <img src={logo} height="40px" width="40px" alt="logo"></img>
        </figure>
        <Link
          className={
            "list-item " +
            (location.pathname === "/" ? "stayOrange" : "default")
          }
          to="/"
          onClick = {navOpen ? ()=>  setNavOpen(false) : null}
        >
          Home
        </Link>
        <Link
          className={
            "list-item " +
            (location.pathname === "/resume" ? "stayOrange" : "default")
          }
          to="/resume"
          onClick = {navOpen ? ()=>  setNavOpen(false) : null}
        >
          Resume
        </Link>
        <Link
          className={
            "list-item " +
            (location.pathname === "/projects" ? "stayOrange" : "default")
          }
          to="projects"
          onClick = {navOpen ? ()=>  setNavOpen(false) : null}
        >
          Portfolio
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
