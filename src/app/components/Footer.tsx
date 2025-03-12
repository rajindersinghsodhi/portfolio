import React from "react";

const Footer = ({darkMode} : {darkMode: boolean}) => {
  return (
    <footer
      className={`mx-auto flex flex-col gap-10 w-full items-center justify-center p-6 ${
        darkMode ? "bg-black" : ""
      }`}
      aria-label="Global"
    >
      {/* Navigation Links */}
      <div
        className={`lg:flex flex lg:justify-evenly justify-evenly border rounded-3xl p-5 lg:gap-x-12 w-full lg:w-6/12 ${
          darkMode ? "bg-black" : "bg-white"
        }`}
      >
        <a
          href="#about"
          className={`text-lg leading-6 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          About
        </a>
        <a
          href="#skills"
          className={`text-lg leading-6 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Skills
        </a>
        <a
          href="#projects"
          className={`text-lg leading-6 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Projects
        </a>
      </div>

      {/* Footer Version */}
      <div
        className={`lg:flex flex lg:justify-center justify-evenly ${
          darkMode ? "bg-black" : "bg-white"
        }`}
      >
        <span
          className={`text-sm leading-6 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Version 1.0.5
        </span>
      </div>
    </footer>
  );
};

export default Footer;
