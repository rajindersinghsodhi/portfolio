'use client';
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import { useState } from "react";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  const darkMode = false
  return (
    <div className={`flex flex-col gap-5 ${darkMode ? "bg-black" : ""}`}>
      <div className="w-full flex justify-between items-center p-5">
      <div
          className={`border-2 p-1 rounded-full cursor-pointer p-2 ${
            darkMode ? 'border-neutral-50' : 'border-black'
          }`}
          // onClick={toggleMode}
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
        <div className="flex">
        <a
          href="#contact"
          className={`focus:outline-none font-medium rounded-full text-sm px-5 py-3 ${
            darkMode ? 'bg-white text-black' : 'text-white bg-black'
          }`}
        >
          Contact Me
        </a>
      </div>
      </div>
    </div>
  );
}
