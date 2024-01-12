import React, { useState } from "react";
import './Navbar.css';

import logo from "../../../assets/images/BattleXO_Logo_Small.png";
import logo_on_hover from "../../../assets/images/BattleXO_Logo_On_Hover_Small.png";

const Navbar:React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <>
			<nav className="navbar" id="desktop-nav">
				<div className="logo">
          <a href="/">
            <img
              src={isHovered ? logo_on_hover : logo}
              alt="qush"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
          </a>
        </div>
				<div>
					<ul className="nav-links">
						<li><a className="navLink" data-name="about" href="#about">about</a></li>
						<li><a className="navLink" data-name="experience" href="#experience">experience</a></li>
						<li><a className="navLink" data-name="projects" href="#projects">projects</a></li>
						<li><a className="navLink" data-name="contact" href="#contact">contact</a></li>
					</ul>
				</div>
			</nav>
    </>
  );
}

export default Navbar;