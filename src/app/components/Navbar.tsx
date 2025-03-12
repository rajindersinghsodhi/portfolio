'use client'; // If you're using App Router and want to use hooks/events

import { useState } from 'react';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav
      className={`flex items-center justify-between lg:p-3 lg:px-8 py-5 lg:w-full w-11/12 border-b border-gray rounded-3xl m-auto ${
        darkMode ? 'bg-black text-white' : 'bg-white'
      }`}
      aria-label="Global"
    >
      {/* Left Section */}
      <div className="hidden lg:flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="text-2xl">Rajinder Singh Sodhi</span>
        </a>
      </div>

      {/* Center Section */}
      <div className="lg:flex flex lg:justify-center justify-evenly items-center lg:gap-x-12 w-full lg:w-6/12">
        <a
          href="#about"
          className={`text-lg leading-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}
        >
          About
        </a>
        <a
          href="#skills"
          className={`text-lg leading-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}
        >
          Skills
        </a>
        <a
          href="#projects"
          className={`text-lg leading-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}
        >
          Projects
        </a>

        {/* Toggle Mode Button */}
        <div
          className={`border-2 p-1 rounded-xl cursor-pointer ${
            darkMode ? 'border-neutral-50' : 'border-black'
          }`}
          onClick={toggleMode}
        >
          {darkMode ? (
            // Dark Mode Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75
                0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75
                21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          ) : (
            // Light Mode Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386
                6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591
                1.591M5.25 12H3m4.227-4.773L5.636
                5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1
                7.5 0Z"
              />
            </svg>
          )}
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a
          href="#contactMe"
          className={`focus:outline-none font-medium rounded-full text-sm px-5 me-2 mb-2 py-3 ${
            darkMode ? 'bg-white text-black' : 'text-white bg-black'
          }`}
        >
          Contact Me
        </a>
      </div>
    </nav>
  );
}
