

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

function LayOut({ children }) {
  const location = useLocation();
  const isLoggedIn = location.pathname === "/login";
  return (
    <>
      {!isLoggedIn && <Header />}
      {children}
      {!isLoggedIn && <Footer />}
    </>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <LayOut>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={ <Login/>} />
          <Route
            path="/search"
            element={<ProtectedRoute element={<Search />} />}
          />
          <Route
            path="/about"
            element={<ProtectedRoute element={<About />} />}
          />
          <Route
            path="/contact"
            element={<ProtectedRoute element={<Contact />} />}
          />
          </Routes>
        </LayOut>
      </BrowserRouter>
    </>
  );
}

export default App