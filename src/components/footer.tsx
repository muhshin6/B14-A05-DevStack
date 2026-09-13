import img from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="flex flex-col container mx-auto gap-14 px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Logo */}
        <div className="flex flex-col items-center lg:items-start lg:col-span-2  gap-3 ">
          <img src={img} alt="logo" />
          <p className=" text-center lg:text-left text-gray-600 max-w-md">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>

          <ul className="flex font-semibold list-disc lg:list-none gap-7 lg:text-gray-700 text-gray-600 ">
            <li className=" list-none">
              <a href="#">GitHub</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>

            <li>
              <a href="#">Linkedln</a>
            </li>
          </ul>
        </div>

        {/* Product */}
        <div className=" hidden lg:grid col-span-1 text-gray-600">
          <h3 className="font-semibold text-black">PRODUCT</h3>
          <a href="#">Home</a>
          <a href="#">Technologies</a>
          <a href="#">Projects</a>
        </div>

        {/* Company */}
        <div className=" hidden lg:grid col-span-1 text-gray-600 ">
          <h3 className="font-semibold text-black ">COMPANY</h3>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Careers</a>
        </div>

        {/* Legal */}
        <div className=" hidden lg:grid col-span-1 text-gray-600 ">
          <h3 className="font-semibold text-black ">LEGAL</h3>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>

      <div className="flex justify-between text-gray-400 ">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="">Privacy</a>
          <a href="">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
