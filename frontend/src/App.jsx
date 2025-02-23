

import About from "./component/about/About";
//import Admin from "../src/component/admin/Admin";
import Search from "./component/search/Search";
import Home from "./component/Home/Home";
import Header from "./component/header/Header";
import Footer from "./component/Footer/Footer";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Login from "./component/login/Login";
import Register from "./component/register/Register";
import Contact from "./component/Contact/Contact";
import ProtectedRoute from "./component/protected/ProtectedRoute";
import { createContext, useState } from "react";
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
export const context = createContext();
function App() {
  
  const [userAuthenticated, setUserAuthenticated] = useState(null);
  const [weeklySearch, setWeeklySearch] = useState();
  const isAuthenticated = (value) => {
    setUserAuthenticated(value);
  };
  return (
    <>
      <context.Provider value={{ setWeeklySearch, weeklySearch }}>
        <BrowserRouter>
          <LayOut
            isAuthenticate={userAuthenticated}
            setUserAuthenticated={setUserAuthenticated}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/reset-password" element={<ResetPass />} />
              <Route path="/admin" element={<Admin />} />
              <Route
                path="/search"
                element={
                  <ProtectedRoute
                    element={<Search />}
                    isAuthenticate={isAuthenticated}
                  />
                }
              />
              <Route
                path="/about"
                element={
                  <ProtectedRoute
                    element={<About />}
                    isAuthenticate={isAuthenticated}
                  />
                }
              />
              <Route
                path="/contact"
                element={
                  <ProtectedRoute
                    element={<Contact />}
                    isAuthenticate={isAuthenticated}
                  />
                }
              />
            </Routes>
          </LayOut>
        </BrowserRouter>
      </context.Provider>
    </>
  );
}

export default App