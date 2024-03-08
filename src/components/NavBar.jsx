import React from "react";
import logo from '../assets/logo.png';

const NavBar = () => {
  return (
    <div>
      <nav className="bg-[#000235] px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
          <img src={logo} alt="logo" className="w-28 h-16 object-fill"/>
          </div>
          <ul className="flex space-x-10">
            <li className="text-white">Home</li>
            <li className="text-white">About</li>
            <li className="text-white">Services</li>
            <li className="text-white">Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
