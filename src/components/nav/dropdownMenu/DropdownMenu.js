import { React, useState } from "react";
import "./DropdownMenu.css";
import Logo from "../../logo/Logo";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, AnimateScroll } from "react-scroll";
import resume from "../../../JacobWashingtonResume.pdf";

const DropdownMenu = (props) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav className="dropdown-menu">
      <div className="nav">
        <Logo />
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? "nav-list active" : "nav-list"}>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              className="nav-link "
              onClick={handleClick}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              className="nav-link "
              onClick={handleClick}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="portfolioProjects"
              className="nav-link"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              onClick={handleClick}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              className="nav-link"
              onClick={handleClick}
            >
              Tech
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="education"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              className="nav-link"
              onClick={handleClick}
            >
              Education
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="workHistory"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              className="nav-link "
              onClick={handleClick}
            >
              Experience
            </Link>
          </li>
          <li className="nav-item">
            <a className="menu-resume" href={resume} download="JacobWashingtonResume" onClick={handleClick}>Download Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DropdownMenu;
