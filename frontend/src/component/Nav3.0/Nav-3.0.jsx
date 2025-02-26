import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "./../../assets/public/logo-2.png";
import Banner from "./Banner/Banner";
import Link from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu state
  };

  useEffect(() => {
    // Define the handleResize function
    const handleResize = () => {
      // Check if the window width is greater than 640px
      if (window.innerWidth > 640) {
        // Close the menu by setting isOpen to false
        setIsOpen(false);
      }
    };

    // Attach the resize event listener to the window
    window.addEventListener("resize", handleResize);

    // Cleanup function: Remove the resize event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this effect runs only once (on mount)

  return (
    <>
      <nav className="block  bg-lightPink-200 border-red p-4 h-full w-full">
        <div
          className={`flex flex-row justify-between items-center w-full h-[15vh]   relative`}
        >
          {/* Logo */}
          <div className="blockw-auto  sm:w-[10vw] text-stone-950 font-bold bg-lightPink-200 gap-2 text-xl  z-0">
            <img className="w-[15vw] rounded-lg" src={logo} alt="logo" />
          </div>

          {/* Hamburger Menu Button (for small screens) */}
          <button
            className={`flex sm:hidden items-center justify-center w-10 h-10 bg-gray-200 rounded-md cursor-pointer  z-10 ${
              isOpen ? "absolute right-0" : "relative"
            }`}
            onClick={toggleMenu}
          >
            <div
              className={`{'transition-transform duration-300 ease-in-out' }
            `}
            >
              {isOpen ? (
                <X size={24} className="text-black" />
              ) : (
                <Menu size={24} className="text-black" />
              )}
            </div>
          </button>

          <ul
            className={`flex flex-row justify-between items-center gap-2 h-20 w-full sm:w-[43rem] text-lightPink-900 bg-lightPink-200 text-center font-bold
            ${
              isOpen
                ? "flex flex-col absolute top-[7.7rem] w-full h-fit rounded-[2rem_0_2rem_0] "
                : "hidden sm:flex"
            }`}
          >
            <li>
              <Link
                href=""
                className="block py-2 px-4 hover:bg-Heather-600 hover:text-Heather-50 hover:rounded-md"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-4 hover:bg-Heather-600 hover:text-Heather-50 hover:rounded-md"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-4 hover:bg-Heather-600 hover:text-Heather-50 hover:rounded-md"
              >
                Search
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-4 hover:bg-Heather-600 hover:text-Heather-50 hover:rounded-md"
              >
                Contact
              </Link>
            </li>
            <button>
              <a
                href="#"
                className={`block w-[12vw] h-[6vh] bg-stone-500 hover:bg-lightPink-700 active:bg-Heather-950 px-4 py-2 rounded-[50rem] text-Heather-50
                  ${isOpen ? "  w-[17vh] h-[6vh]" : ""}`}
              >
                Login
              </a>
            </button>
          </ul>
        </div>
      </nav>
      <Banner />{" "}
    </>
  );
}

export default Navbar;
