import React from 'react';
import { Link } from 'react-scroll';
import Logo from '../Assets/Logo.jpeg';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-8 bg-black">
      <img
        src={Logo}
        alt="Logo"
        className="w-12 h-12 cursor-pointer border-2 border-white rounded"
      />
      <ul className="flex space-x-4">
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
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-white hover:text-blue-500 transition duration-300 cursor-pointer"
          >
            About
          </Link>
        </li>
        {/* <li>
          <Link
            activeClass="text-white"
            to="book-online"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-white hover:text-blue-500 transition duration-300 cursor-pointer"
          >
            Book Online
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
