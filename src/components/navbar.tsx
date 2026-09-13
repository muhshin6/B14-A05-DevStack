import img from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm ">
      {/* Mobile Navbar */}

      <div className="container mx-auto px-4 py-3 flex justify-between items-center text-gray-600">
        {/* Hamburger */}
        <button
          // onClick={() => setIsOpen(!isOpen)}
          className=" lg:hidden text-2xl text-gray-500"
        >
          ☰
        </button>

        {/* Logo */}
        <img src={img} alt="Logo" />

        {/* Menu bar  */}
        <ul className=" hidden lg:flex  gap-7 font-semibold">
          <li className="text-pink-600">
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Technologies</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <div>
          <button className="font-semibold">Sign In</button>
          <button className="bg-pink-600 font-semibold text-white px-5 py-2 rounded-4xl ml-4">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
