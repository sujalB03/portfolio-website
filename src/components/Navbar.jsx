import React, { useState, useEffect } from "react";
import aboutmeIcon from "../assets/Sidebar/About me.png";
import connectIcon from "../assets/Sidebar/Connect.png";
import educationIcon from "../assets/Sidebar/Education.png";
import projectsIcon from "../assets/Sidebar/Projects.png";
import skillsIcon from "../assets/Sidebar/Skills.png";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div>
      <div
        id="menu-bar"
        className={isActive ? `fas fa-times` : `fas fa-bars`}
        onClick={handleClick}
      ></div>
      <nav className={`side-navbar sidebar navbar ` + (isActive && `active`)}>
        <ul className="navbar-list">
          <li>
            <a href="#about">
              <span className="nav-text">About Me</span>
              <img className="nav-icon" src={aboutmeIcon} alt="About Me Icon" />
            </a>
          </li>
          <li>
            <a href="#skills">
              <span className="nav-text">Skills</span>
              <img className="nav-icon" src={skillsIcon} alt="Skills Icon" />
            </a>
          </li>
          <li>
            <a href="#projects">
              <span className="nav-text">Portfolio</span>
              <img
                className="nav-icon"
                src={projectsIcon}
                alt="Projects Icon"
              />
            </a>
          </li>

          <li>
            <a href="#contact">
              <span className="nav-text">Connect</span>
              <img className="nav-icon" src={connectIcon} alt="Connect Icon" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
