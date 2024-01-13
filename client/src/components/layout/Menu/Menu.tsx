import React, { useState } from "react";
import { Link } from "react-router-dom";

// static files 
import "./Menu.css";
import logo from "../../../assets/images/BattleXO_Logo.png";
import logo_on_hover from "../../../assets/images/BattleXO_Logo_On_Hover.png";

import User from "../../../types/User";

import useUserData from "../../../services/useUserData";

const Menu: React.FC = () => {
  const userData = useUserData();

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
          {localStorage.getItem("accessToken") ? (
            <>
              <li className="menu-link">
                <h1 data-name="start"><Link to="/games">start</Link></h1>
              </li>
            </>
          ) : (
            <>
              <li className="menu-link">
                <h1 data-name="start"><Link to="/authorization">start</Link></h1>
              </li>
            </>
          )}
          
          <li className="menu-link">
            <h1 data-name="profile"><Link to="/profile">profile</Link></h1>
          </li>
          <li className="menu-link">
            <h1 data-name="liderboard"><Link to="/liderboard">liderboard</Link></h1>
          </li>
          <li className="menu-link">
            <h1 data-name="chat"><Link to="/chat">chat</Link></h1>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Menu;