import About from "./component/about/About";
//import Admin from "../src/component/admin/Admin";
import Search from "./component/search/Search";
import Home from "./component/Home/Home";
import Header from "./component/header/Header";
import Footer from "./component/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import Login from "./component/login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

            <Route path="search" element={<Search />} />
            <Route path="about" element={<About />} />
      
          {/* <Route path="/contact" element={<Contact/> } /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

