import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from '../Assets/Logo.jpeg';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="flex items-center justify-between bg-black">
      <img
        src={Logo}
        alt="Logo"
        className="w-12 h-12 cursor-pointer border-2 border-white rounded"
      />
      <div className="hidden sm:flex space-x-4">
        <ul className="flex space-x-4 text-lg">
          <li>
            <Link
              activeClass="text-white"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white hover:text-blue-500 transition duration-300 cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="text-white"
              to="ideas"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white hover:text-blue-500 transition duration-300 cursor-pointer"
            >
              Ideas
            </Link>
          </li>
          <li>
            <Link
              activeClass="text-white"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white hover:text-blue-500 transition duration-300 cursor-pointer"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              activeClass="text-white"
              to="team"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white hover:text-blue-500 transition duration-300 cursor-pointer"
            >
              Team
            </Link>
          </li>
        </ul>
      </div>
      <div className="sm:hidden">
        <GiHamburgerMenu
          className="text-white text-2xl cursor-pointer"
          onClick={toggleMenu}
        />
        {showMenu && (
          <ul className="absolute right-8 top-16 bg-black py-4 px-6 space-y-4">
            <li>
              <Link
                activeClass="text-white"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-white hover:text-blue-500 transition duration-300 cursor-pointer"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="text-white"
                to="ideas"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-white hover:text-blue-500 transition duration-300 cursor-pointer"
                onClick={toggleMenu}
              >
                Ideas
              </Link>
            </li>
            <li>
              <Link
                activeClass="text-white"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-white hover:text-blue-500 transition duration-300 cursor-pointer"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                activeClass="text-white"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-white hover:text-blue-500 transition duration-300 cursor-pointer"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
