import React, {  useState,useContext } from "react";
import logo from "../../assets/eristar.png";
import Camels from "../../assets/camels.jpg";
import "./headers.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { GiHamburgerMenu } from "react-icons/gi";
import { myContext } from "../../App";
const Header = ({ isAuthenticate, setUserAuthenticated }) => {
    const url = useContext(myContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    const con = confirm("are you sure you want to logout?");
    if (con) {
      axios
        .post(`${url}/api/logout`, {}, { withCredentials: true })
        .then((res) => {
          setUserAuthenticated(false);
          console.log(res.data.message);
          navigate("/");
        })
        .catch((error) => alert(error.response.data.message));
    }
  };

  return (
    <>
      <div className="header-container">
        <img src={logo} alt="EriStars-logo" className="logo" />
        <div className="display">
          <GiHamburgerMenu className="burger-icon" />
          <div className="nav-cont">
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

            <div className="header-auth">
              {isAuthenticate ? (
                <button onClick={handleLogout} className="logout_btn">
                  Logout
                </button>
              ) : (
                <Link to="/login">
                  <button className="login_btn">Login</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <img className="camel_logo mb-6" src={Camels} alt="" />
    </>
  );
};

export default Header;
