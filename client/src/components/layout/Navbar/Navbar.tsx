import React, { useState } from "react";
import './Navbar.css';

import logo from "../../../assets/images/BattleXO_Logo_Small.png";
import logo_on_hover from "../../../assets/images/BattleXO_Logo_On_Hover_Small.png";

import useUserData from "../../../hooks/useUserData";

const Navbar:React.FC = () => {
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
						<li><a className="navLink" href="/liderboard">Liderboard</a></li>
						<li><a className="navLink" href="/games">Find game</a></li>
						<li><a className="navLink" href="/chat">Chat</a></li>
						<li>
              {localStorage.getItem("accessToken") ? (
                <>
                  <div className="navButtons">
                    <a href="/user/profile" className="btn">{userData?.username}</a>
                  </div>
                </>
              ) : (
                <>
                  <div className="navButtons">
                    <a href="/authorization" className="btn">Login</a>
                  </div>
                </>
              )}
            </li>
					</ul>
				</div>
			</nav>
    </>
  );
}

export default Navbar;