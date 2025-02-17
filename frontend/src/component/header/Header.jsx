import React,{useEffect,useState} from "react";
import logo from "../../assets/eristar.png";
import Camels from "../../assets/camels.jpg";
import "./headers.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Header = ({ isAuthenticate, setUserAuthenticated }) => {
  //const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  // useEffect(() => {
  //   axios.get("http://localhost:3001/api/Auth", { withCredentials: true })
  //     .then((response) =>
  //       setIsAuthenticated(response.data.message))
  //     .catch((error) =>error.response.data.message);
  // }, [isAuthenticated]);

  const handleLogout = () => {
    const con = confirm("are you sure you want to logout?");
    if (con) {
      axios
        .post("http://localhost:3001/api/logout", {}, { withCredentials: true })
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
      <img className="camel_logo mb-6" src={Camels} alt="" />
    </>
  );
};

export default Header;
