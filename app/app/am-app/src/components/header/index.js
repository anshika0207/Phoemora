//This component is used to display the header of the website
import "./index.css";

import React from "react";

import { Link } from "react-router-dom";

// import logo from "./logo.svg";
import profilepng from "./profile.png";

// import Cookies from "js-cookie";
// const jwtToken = Cookies.get("jwt_token");

const Header = () => {
  // const renderProfile = () => (
  //   <Link to="/profile">
  //     <img src={profilepng} alt="profile" className="profile-picture" />
  //   </Link>
  // );
  // const renderLoginOrRegister = () => (
  //   <Link to="/login" className="header-login-or-register">
  //     <p>Login/Register</p>
  //   </Link>
  // );
  return (
    <div className="header-container">
      <div className="logo-container">
        <h1 to="/" className="header-list-item">
          FindHer
        </h1>
      </div>
      <div className="links-container">
        <ul className="header-list-container">
          <Link to="/" className="header-list-item">
            <li className="header-list-button">Home</li>
          </Link>
          <Link to="/jobs" className="header-list-item">
            <li className="header-list-button">Jobs</li>
          </Link>
          <Link to="/postjobs" className="header-list-item">
            <li className="header-list-button">Post Job</li>
          </Link>
          <Link to="/signup">
            <img src={profilepng} alt="profile" className="profile-picture" />
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
