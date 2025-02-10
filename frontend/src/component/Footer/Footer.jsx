import logo2 from "../../../../public/logo-2.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

// const divStyle1 = {
//   display: "flex",
//   flexDirection: "column",

//   backgroundColor: "#c4ceda",
//   color: "black",
//   textAlign: "center",
//   fontWeight: "bold",
// };

// const divStyle2 = {
//   display: "flex",
//   alignItems: "center",
//   gap: "16px",
//   justifyContent: "space-around",
// };

const imgStyle = {
  width: "150px",
};
const hrStyle = {
  margin: "1rem 0",
  borderTop: "2px solid black",
};
// const listContainerStyle = {
//   display: "flex",
//   justifyContent: "center",
//   gap: "40px",
//   marginTop: "1rem",
// };

const Footer = () => {
  return (
    <footer className="flex flex-col bg-Heather text-black text-center font-bold">
      <div className="flex items-center  justify-around sm:flex-col sm:justify-between  md:flex-col md:justify-around lxxg:bg-Heather lg:flex-row lg:justify-between lg:px-20 sm:bg-red-400 md:bg-pink-400 lg:bg-yellow-400 xl:bg-orange-400">
        <img style={imgStyle} src={logo2} alt="logo" />
        <ul className="flex justify-center gap-10 mt-4 sm:mb-5 ">
          <li>
            <h3 className="font-bold text-2xl">About</h3>
            <ul>
              <li>
                <a
                  href="#"
                  className="hover:text-stone-500 active:text-stone-500 font-medium"
                >
                  Who we are!
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-stone-500 active:text-stone-500 font-medium"
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
                  className="hover:text-stone-500 active:text-stone-900 font-medium"
                >
                  Our Services!
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-stone-500 active:text-stone-900 font-medium"
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
                  className="hover:text-stone-500 active:text-stone-900 font-medium"
                >
                  How to reach us!
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-stone-500 active:text-stone-900 font-medium"
                >
                  Our Address!
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <hr style={hrStyle} />
      <div className="flex flex-col md:flex-row justify-around items-center pb-4 md:flex-row ">
        <p className="text-center md:text-left text-gray-600">
          All rights reserved. &copy; ERI STARS 2024.
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
              className="text-pink-500 hover:text-pink-700"
            />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              size={24}
              className="text-blue-700 hover:text-blue-900"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
