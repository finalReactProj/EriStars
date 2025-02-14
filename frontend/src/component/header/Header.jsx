import React from "react";
import logo from "../../assets/eristar.png";
import Camels from "../../assets/camels.jpg";
import "./headers.css";
import { Link } from "react-router-dom";
const Header = () => {


  
  return (
    <>
      <div className="header-container">
        <img src={logo} alt="EriStars-logo" className="logo" />
        <ul className="navLists">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Link to="/login">
          <button className="btn">Login</button>
        </Link>
      </div>
      <img className="camel_logo mb-6" src={Camels} alt="" />
    </>
  );
};

export default Header;
