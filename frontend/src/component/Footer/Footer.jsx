import logo2 from "../../assets/eristar.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const imgStyle = {
  width: "150px",
};
const hrStyle = {
  margin: "1rem 0",
  borderTop: "2px solid black",
};
const Footer = () => {
  return (
      <footer className="flex flex-col bg-Heather bg-blue-100 text-center font-bold text-gray-600">
        <div className="flex items-center  justify-around sm:flex-col sm:justify-between  md:flex-col md:justify-around lxxg:bg-Heather lg:flex-row lg:justify-between lg:px-20">
          <img style={imgStyle} src={logo2} alt="logo" />
          <ul className="flex justify-center gap-10 mt-4 sm:mb-5 ">
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
        <div className="flex flex-col justify-around items-center pb-4 md:flex-row ">
          <p className="text-center md:text-left ">
            All rights reserved. &copy; ERI STARS 2025.
          </p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
