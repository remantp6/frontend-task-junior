import React from "react";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-10 bg-[#000245] backdrop-filter backdrop-blur-lg bg-opacity-15">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <img
            src={logo}
            alt="logo"
            className=" w-14 h-14 lg:w-16 lg:h-16 object-fill rounded-full"
          />
        </div>
        <ul className="flex space-x-6 lg:space-x-10 text-white">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
