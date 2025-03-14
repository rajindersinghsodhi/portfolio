"use client";
import React from "react";
import Image from "next/image";
import resume_data from "../data";

const Experience = () => {
  // Example toggle, handle darkMode as needed
  const darkMode = false;

  return (
    <section
      id="experience"
      className={`flex flex-col justify-evenly items-center px-4 md:px-10 py-16 ${
        darkMode ? "bg-black text-white" : "bg-white text-gray-800"
      }`}
    >
      {/* Heading */}
      <div className="flex justify-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">Experience</h1>
      </div>

      {/* Intro Description */}
      <div className="max-w-4xl text-center mb-12">
        <p className="text-lg md:text-xl font-medium">
          Software Engineer with 1 year of experience. Currently working as Full
          Stack Developer at Humanli.ai
        </p>
      </div>

      {/* Work Experience Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* Left Section: Role + Company */}
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            Full Stack Developer
          </h2>
          <p className="text-md text-gray-600 dark:text-gray-400 mb-4">
            Humanli.ai – Jaipur, Rajasthan
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            April 2024 - Present
          </p>
          <div className="w-full max-w-6xl mt-12">
            <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-2 text-sm md:text-base">
              {resume_data.experience.technologies.map((tech) => (
                <span className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300 px-3 py-1 rounded-md">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section: Responsibilities */}
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <ul className="list-disc list-inside space-y-3 text-sm md:text-base">
            <li>
              Led the development of scalable Gen AI products and LLM-based
              solutions, ensuring responsive web applications with RxJS and
              Next.js.
            </li>
            <li>
              Built REST APIs for AI-generated content delivery and integrated
              MathJax/Markdown for LaTeX rendering on the frontend.
            </li>
            <li>
              Developed authentication with mobile OTP verification and
              integrated Razorpay for secure payments.
            </li>
            <li>
              Automated WhatsApp messaging using backend integrations, and
              deployed an AI-powered Sales Bot with Twilio.
            </li>
            <li>
              Streamlined CI/CD pipelines with Docker and Azure for efficient
              and consistent deployments.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
