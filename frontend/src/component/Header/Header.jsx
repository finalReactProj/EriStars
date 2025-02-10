import logo from "../../../logo.png";


const Header = () => {
  return (
    <header className=" ">
      <div className="flex items-center border-4  p-2">
        <img src={logo} alt="Eri-logo" className="h-10 mr-2" />
        <h1 className="text-2xl font-bold   p-2">
          ERI STARS
        </h1>
      </div>
      <nav className="mt-4">
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Search
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
