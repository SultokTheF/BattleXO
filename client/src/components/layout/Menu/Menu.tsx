import React, { useState } from "react";
import { Link } from "react-router-dom";

// static files 
import "./Menu.css";
import logo from "../../../assets/images/BattleXO_Logo.png";
import logo_on_hover from "../../../assets/images/BattleXO_Logo_On_Hover.png";

const Menu: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div className="menu flex">
        <img
          src={isHovered ? logo_on_hover : logo}
          alt="qush"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
        <ul>
          <li className="menu-link">
            <h1 data-name="start"><Link to="/register">start</Link></h1>
          </li>
          <li className="menu-link">
            <h1 data-name="dashboard"><Link to="/dashboard">dashboard</Link></h1>
          </li>
          <li className="menu-link">
            <h1 data-name="contact"><Link to="/contact">contact</Link></h1>
          </li>
          <li className="menu-link">
            <h1 data-name="home"><Link to="/home">home</Link></h1>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Menu;