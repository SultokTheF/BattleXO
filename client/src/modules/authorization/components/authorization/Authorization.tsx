import React, { useState ,useEffect, FormEvent } from "react";
import axios from "axios"

import "./Authorization.css";

import User from "../../../../types/User";
import { loginEndpoint, registerEndpoint } from "../../../../store/endpoints";

import logo from "../../../../assets/images/BattleXO_Logo.png";
import logo_on_hover from "../../../../assets/images/BattleXO_Logo_On_Hover.png";

const Authorization: React.FC = () => {
  useEffect(() => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    if (signUpButton && signInButton && container) {
      signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
      });

      signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
      });
    }

    // Cleanup event listeners when component unmounts
    return () => {
      if (signUpButton && signInButton) {
        signUpButton.removeEventListener('click', () => {
          container?.classList.add("right-panel-active");
        });

        signInButton.removeEventListener('click', () => {
          container?.classList.remove("right-panel-active");
        });
      }
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const [userData, setUserData] = useState<(User & {password: string})>({
    username: "",
    email: "",
    role: "user",
    user_level: 1,
    password: ""
  });

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(registerEndpoint, userData);

      if (response.status === 201) {
        setUserData({
          username: "",
          email: "",
          role: "user",
          user_level: 1,
          password: ""
        });

        alert("Registration successful");
      } else {
        // Handle registration error
        alert("Registration failed")
      }
    } catch (e) {
      return console.error("Error:", e);
    }
  };

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(loginEndpoint, userData);

      if (response.status === 200) {
        const accessToken = response.data.access;
        localStorage.setItem("accessToken", accessToken);
        // You can redirect the user or perform other actions here
        alert("Login successful")
      } else {
        // Handle authentication error
        alert("Authentication failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <>
      <div className="authorization flex">
        <a href="/">
          <img
            src={isHovered ? logo_on_hover : logo}
            alt="qush"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
        </a>
        <div className="container" id="container">
          <div className="form-container sign-up-container">
            <form onSubmit={handleRegister}>
              <h1 className="active">Create Account</h1>
              <div className="social-container">
                <button type="button" className="login-with-google-btn" >
                  Sign up with Google
                </button>
              </div>
              <span>or use your email for registration</span>
              <input 
                type="text" 
                placeholder="username"
                value={userData.username}
                onChange={(e) => setUserData({ ...userData, username: e.target.value })}
              />
              <input 
                type="email" 
                placeholder="Email" 
                value={userData.email}
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
              />
              <input 
                type="password" 
                placeholder="Password" 
                value={userData.password}
                onChange={(e) => setUserData({ ...userData, password: e.target.value })}
              />
              <button>Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form onSubmit={handleLogin}>
              <h1 className="active">Sign in</h1>
              <div className="social-container">
                <button type="button" className="login-with-google-btn" >
                  Sign in with Google
                </button>
              </div>
              <span>or use your account</span>
              <input 
                type="email" 
                placeholder="Email" 
                value={userData.email}
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
              />
              <input 
                type="password" 
                placeholder="Password"
                value={userData.password}
                onChange={(e) => setUserData({ ...userData, password: e.target.value })}
              />
              <a href="#">Forgot your password?</a>
              <button>Login</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Already have an account?</h1>
                <p>Then go use system!</p>
                <button className="ghost" id="signIn">Login</button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Dont have an account?</h1>
                <p>Then join our community!</p>
                <button className="ghost" id="signUp">Sign up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Authorization;