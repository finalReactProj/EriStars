

import About from "./component/about/About";
import Search from "./component/search/Search";
import Home from "./component/Home/Home";
import Header from "./component/header/Header";
import Footer from "./component/Footer/Footer";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Login from "./component/login/Login";
import Register from "./component/register/Register";
import Contact from "./component/Contact/Contact";
import ProtectedRoute from "./component/protected/ProtectedRoute";
import {  useState } from "react";
import Admin from "./component/admin/Admin";
import ResetPass from "./component/login/ResetPass";

function LayOut({ children,isAuthenticate,setUserAuthenticated }) {
  const location = useLocation();
  const hideHeaderFooterPages = [
    "/login",
    "/register",
    "/admin",
    "/reset-password",
  ];
  const isLoggedIn = hideHeaderFooterPages.includes(location.pathname);
  return (
    <>
      {!isLoggedIn && <Header isAuthenticate={isAuthenticate } setUserAuthenticated={setUserAuthenticated} />}
      {children}
      {!isLoggedIn && <Footer />}
    </>
  );
}
function App() {
  
  const [userAuthenticated, setUserAuthenticated] = useState(null);
  const isAuthenticated = (value) => {
    setUserAuthenticated(value);
  };
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
        
          <Route path="/" element={<Home/> } />
          <Route path="/search" element={<Search/> } />
          <Route path="/about" element={<About/> } />
          {/* <Route path="/contact" element={<Contact/> } /> */}
        </Routes>
        <Footer/>
      </BrowserRouter>
      </>
  )
}

export default App

