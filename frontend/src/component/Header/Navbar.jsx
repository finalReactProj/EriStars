import { useState } from "react";
import { useEffect } from "react";
import logo from "../../../../public/logo-2.png";
import Banner from "./../Banner/Banner";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setIsOpen(false); // Close the menu when the screen size exceeds 600px
      }
    };

    // Attach the resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <nav className=" align-baseline  bg-lightPink-200 text-stone-950 font-bold  p-4">
        <div className="bg-lightPink-200 sm:relative row-reverse max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex w-[30vw] bg-lightPink-200 items-center gap-2 text-xl text-stone-900 lg:xl:flex-row md:flex-col ">
            <span className="w-auto sm:relative sm:left-60 md:flex md:left-0 lg:flex lg:left-0 xl:flex xl:left-0">
              <img className="w-[15vw] rounded-lg" src={logo} alt="logo" />
            </span>
          </div>
          <button
            className={`lg:hidden md:hidden text-xl sm:relative sm:z-10 transition-transform duration-300 
          `}
            onClick={() => setIsOpen(!isOpen)}
          >
            <HamburgerMenu isOpen={isOpen} />
          </button>

          <ul
            className={` flex-row justify-between  items-baseline w-full p-2 text-lightPink-900 bg-lightPink-200 text-center space-y-4 mt-1  lg:flex xl:flex md:flex 
              ${
                isOpen
                  ? "sm:p-[2.3rem] sm:border sm:border-red-800 sm:bg-Heather-200 sm:z-0 sm:absolute sm:-right-3 sm:top-[5rem] sm:rounded-md sm:w-40 sm:py-3 sm:text-center sm:flex-col sm:flex md:hidden lg:hidden xl:hidden"
                  : "hidden"
              } `}
          >
            <li>
              <a
                href="#"
                className="block py-2 px-4  hover:bg-Heather-600 hover:text-Heather-50 hover:border hover:border-black  hover:rounded-md active:bg-Heather-950 active:text-Heather-50 font-bold"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4   hover:bg-Heather-600 hover:text-Heather-50 hover:border hover:border-black  hover:rounded-md active:bg-Heather-950 active:text-Heather-50 font-bold"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4  hover:bg-Heather-600 hover:text-Heather-50 hover:border hover:border-black  hover:rounded-md active:bg-Heather-950 active:text-Heather-50 font-bold"
              >
                Search
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4  hover:bg-Heather-600 hover:text-Heather-50 hover:border hover:border-black  hover:rounded-md active:bg-Heather-950 active:text-Heather-50 font-bold"
              >
                Contact
              </a>
            </li>
            <button className="w-[12vw] h-[6vh] bg-stone-500  hover:bg-stone-700 active:bg-stone-950 px-4 py-2 rounded-[50px] text-Heather-50">
              Login
            </button>
          </ul>
        </div>
      </nav>
      <Banner />
    </>
  );
}

export default Navbar;
