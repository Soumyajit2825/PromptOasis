import React, { useState } from 'react';
import DarkLogo from '../Assets/Dark logo.jpeg';
import Logo from '../Assets/Logo.jpeg';
import Navbar from './Navbar';
const Body = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
    <Navbar />
    <div className='flex flex-col items-center justify-center min-h-screen bg-black'>
      <img
        src={isDarkMode ? DarkLogo : Logo}
        alt="Logo"
        className="cursor-pointer mb-4"
        onClick={toggleMode}
      />
      <input
        type="text"
        className="py-2 px-4 mb-4 rounded"
        placeholder="Enter your text"
      />
      <button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 text-white py-2 px-14 rounded-full focus:shadow-outline">
        Submit
      </button>
    </div>
    </>
  );
};

export default Body;
