import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/eristar.png";

const imgStyle = {
  width: "150px",
};
const hrStyle = {
  margin: "1rem 0",
  borderTop: "2px solid black",
};
const Footer = () => {
  return (
    <footer className="flex flex-col lg:bottom-0 bg-Heather  text-black text-center font-bold bg-blue-100 ">
      <div className="flex flex-col items-center justify-around lg:flex-row lg:justify-between lg:px-20">
        <img style={imgStyle} src={logo} alt="logo" />
        <ul className="flex flex-col gap-10 mt-4 sm:flex-col md:flex-row lg:flex-row lg:gap-20">
          <li>
            <h3 className="font-bold text-2xl">About</h3>
            <ul>
              <li>
                <a
                  href="#"
                  className="hover:text-stone-500 active:text-stone-500 font-medium text-decoration-none"
                >
                  Who we are!
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-stone-500 active:text-stone-500 font-medium text-decoration-none"
                >
                  What we do!
                </a>
              </li>
            </ul>
          </li>
          <li>
            <h3 className="font-bold text-2xl">Services</h3>
            <ul>
              <li>
                <a
                  href="#"
                  className="hover:text-stone-500 active:text-stone-900 font-medium text-decoration-none"
                >
                  Our Services!
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-stone-500 active:text-stone-900 font-medium text-decoration-none"
                >
                  Prices!
                </a>
              </li>
            </ul>
          </li>
          <li>
            <h3 className="font-bold text-2xl">Contact Us</h3>
            <ul>
              <li>
                <a
                  href=""
                  className="hover:text-stone-500 active:text-stone-900 font-medium text-decoration-none"
                >
                  How to reach us!
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-stone-500 active:text-stone-900 font-medium text-decoration-none"
                >
                  Our Address!
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <hr style={hrStyle} />
      <div className="flex flex-col lg:max-h-screen justify-around items-center pb-4 md:flex-row">
        <p className="text-center md:text-left">
          All rights reserved. &copy; ERI STARS 2025.
        </p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook
              size={24}
              className="text-blue-600 hover:text-blue-800"
            />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter
              size={24}
              className="text-blue-400 hover:text-blue-600"
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              size={24}
              className="text-pink-600 hover:text-pink-800"
            />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              size={24}
              className="text-blue-600 hover:text-blue-900"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
