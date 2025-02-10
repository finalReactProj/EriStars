
const Header = () => {
    return (
        <header className="flex justify-between items-center bg-blue-800 text-white p-5 fixed w-full top-0 z-50 shadow-md">
            <div className="text-2xl font-bold">MyWebsite</div>
            <nav className="relative">
                <ul className="flex space-x-6">
                    <li>
                        <a href="#home" className="hover:underline">Home</a>
                    </li>
                    <li>
                        <a href="#about" className="hover:underline">About</a>
                    </li>
                    <li className="relative group">
                        <a href="#services" className="hover:underline">Services</a>
                        <ul className="absolute left-0 hidden bg-blue-800 p-2 group-hover:block">
                            <li>
                                <a href="#service1" className="block px-4 py-2 hover:bg-blue-700">Service 1</a>
                            </li>
                            <li>
                                <a href="#service2" className="block px-4 py-2 hover:bg-blue-700">Service 2</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#blog" className="hover:underline">Blog</a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </nav>
            <a href="#get-started" className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-500">Get Started</a>
        </header>
    );
};

export default Header;