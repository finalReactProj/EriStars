import { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="flex flex-col justify-between items-center w-8 h-6 cursor-pointer relative z-10"
        onClick={toggleMenu}
      >
        <span
          className={`block h-1 w-full bg-black transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block h-1 w-full bg-black transition-opacity duration-300 ease-in-out ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`block h-1 w-full bg-black transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-[-45deg] translate-y-[-2px]" : ""
          }`}
        ></span>
      </button>
    </>
  );
};

export default HamburgerMenu;
