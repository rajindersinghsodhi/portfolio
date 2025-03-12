"use client";
import React, { useState } from "react";

const Experience = ({darkMode} : {darkMode: boolean}) => {// example toggle, handle as needed
  return (
    <section
      id="about"
      className={`flex flex-col justify-evenly items-center ${
        darkMode ? "bg-black" : ""
      }`}
    >
      {/* About Heading */}
      <div className="flex justify-center mt-20 mb-10 lg:m-0">
        <h1 className={`text-5xl font-semibold ${darkMode ? "text-white" : ""}`}>
          About
        </h1>
      </div>

      {/* About Description */}
      <div className="hidden lg:flex justify-start" style={{ width: "55vw" }}>
        <p className={`flex text-justify ${darkMode ? "text-white" : ""}`}>
          Full Stack Developer with 1 year of experience in Angular, Flask,
          Firebase, and Tailwind CSS. Skilled in developing REST APIs, designing
          dynamic user interfaces, and implementing efficient authentication
          systems. Proficient in integrating tools and technologies such as
          Razorpay, MathJax, and real-time databases. Strong expertise in frontend
          and backend development, with a focus on creating scalable and
          maintainable web solutions.
        </p>
      </div>

      {/* Experience and Education Cards */}
      <div className="flex lg:flex-row flex-col justify-evenly lg:items-stretch items-center gap-10 mx-3">
        {/* Work Experience Card */}
        <div
          className={`flex flex-col items-center border rounded-3xl p-5 lg:w-1/2 w-11/12 ${
            darkMode ? "bg-black" : "bg-white"
          }`}
        >
          <div className="flex items-center gap-2 my-2 lg:m-0">
            {!darkMode ? (
              <img src="experience-icon.png" alt="experience" style={{ height: "1.5rem" }} />
            ) : (
              <img
                src="dark-experience-icon.png"
                alt="dark experience"
                style={{ height: "2rem" }}
                className="px-2"
              />
            )}
            <h1 className={`text-xl font-bold ${darkMode ? "text-white" : ""}`}>
              Work Experience
            </h1>
          </div>

          <div className="w-full flex flex-col justify-center items-center" style={{ height: "100%" }}>
            <div className="flex flex-col w-full">
              <div className="flex justify-between items-center">
                <span className={`lg:text-lg ${darkMode ? "text-white" : ""}`}>
                  Humanli.ai
                </span>
                <span className={`ms-10 text-sm ${darkMode ? "text-white" : ""}`}>
                  15 April, 2024 - Present
                </span>
              </div>

              <div className="flex flex-wrap gap-3 p-5">
                {[
                  "Angular",
                  "Tailwind CSS",
                  "Angular Material UI",
                  "Rxjs",
                  "Flask",
                  "Firebase",
                  "REST APIs",
                  "MathJax",
                  "Razorpay",
                  "Gen Ai",
                  "GCP",
                ].map((tech, index) => (
                  <p
                    key={index}
                    className={`border-black border rounded-md p-2 ${
                      darkMode
                        ? "bg-white text-black"
                        : "text-white bg-slate-950"
                    }`}
                  >
                    {tech}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education Card */}
        <div
          className={`flex flex-col items-center border rounded-3xl p-5 lg:w-1/2 w-11/12 ${
            darkMode ? "bg-black" : "bg-white"
          }`}
        >
          <div className="flex items-center">
            {!darkMode ? (
              <img
                src="education-icon.png"
                alt="education"
                style={{ height: "2rem" }}
                className="px-2"
              />
            ) : (
              <img
                src="dark-education-icon.png"
                alt="dark education"
                style={{ height: "2rem" }}
                className="px-2"
              />
            )}
            <h1 className={`text-xl font-bold ${darkMode ? "text-white" : ""}`}>
              Education
            </h1>
          </div>

          <div className="flex flex-col items-center">
            <h1 className={`${darkMode ? "text-white" : ""}`}>
              BE Computer Science & Engineering
            </h1>

            <div className="flex flex-col mt-5">
              <div className="flex justify-center">
                <span className={`${darkMode ? "text-white" : ""}`}>
                  Relevant course work
                </span>
              </div>

              <div className="flex flex-wrap gap-3 p-5">
                {[
                  "Data Structures & Algorithms",
                  "Java",
                  "Operating System",
                  "DBMS",
                  "Computer Networks",
                ].map((course, index) => (
                  <p
                    key={index}
                    className={`border-black border rounded-md p-2 ${
                      darkMode
                        ? "bg-white text-black"
                        : "bg-slate-950 text-white"
                    }`}
                  >
                    {course}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Empty flex div (optional) */}
        <div className="flex"></div>
      </div>
    </section>
  );
};

export default Experience;
