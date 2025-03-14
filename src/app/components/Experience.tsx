"use client";
import React from "react";
import Image from 'next/image';
const Experience = () => {// example toggle, handle as needed
  const darkMode = false;
  return (
    <section
      id="about"
      className={`flex flex-col justify-evenly items-center md:gap-10 ${
        darkMode ? "bg-black" : ""
      }`}
    >
      {/* About Heading */}
      <div className="flex justify-center mt-20 mb-10 lg:m-0">
        <h1 className={`text-3xl md:text-4xl font-bold ${darkMode ? "text-white" : ""}`}>
          Experience
        </h1>
      </div>

      {/* About Description */}
      <div className="grid grid-cols-1 md:grid-cols-2 p-2">
        <div className="flex"> 
          <p className={`flex text-center md:text-justify${darkMode ? "text-white" : ""}`}>
            Software Engineer with 1 year of experience. Currently working as Full Stack Developer at Humanli.ai
          </p>
        </div>
      </div>

    </section>
  );
};

export default Experience;