import React from "react";
import resume_data from "../data";

const Experience = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <section
      id="experience"
      className={`flex flex-col justify-evenly items-center px-4 md:px-10 py-16 transition-colors duration-300`}
      style={{
        backgroundColor: darkMode ? "#121212" : "#FFFFFF",
        color: darkMode ? "#F5F5F5" : "#121212",
      }}
    >
      {/* Heading */}
      <div className="flex justify-center mb-10">
        <h1
          className="text-3xl md:text-4xl font-bold tracking-wide"
          style={{
            color: darkMode ? "#F5F5F5" : "#121212",
          }}
        >
          Experience
        </h1>
      </div>

      {/* Intro Description */}
      <div className="max-w-4xl text-center mb-12">
        <p
          className="text-lg md:text-xl font-medium leading-relaxed"
          style={{
            color: darkMode ? "#C0C0C0" : "#374151",
          }}
        >
          Software Engineer with 1 year of experience. Currently working as Full
          Stack Developer at Humanli.ai.
        </p>
      </div>

      {/* Work Experience Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* Left Section: Role + Company */}
        <div
          className="rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
          style={{
            backgroundColor: darkMode ? "#1A1A1A" : "#FFFFFF",
            border: `1px solid ${darkMode ? "#2C2C2C" : "#E5E7EB"}`,
            color: darkMode ? "#F5F5F5" : "#121212",
          }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            Full Stack Developer
          </h2>

          <p
            className="text-md mb-4"
            style={{
              color: darkMode ? "#C0C0C0" : "#6B7280",
            }}
          >
            Humanli.ai – Jaipur, Rajasthan
          </p>

          <p
            className="text-sm"
            style={{
              color: darkMode ? "#A0A0A0" : "#9CA3AF",
            }}
          >
            April 2024 - Present
          </p>

          {/* Technologies */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>

            <div className="flex flex-wrap gap-2 text-sm md:text-base">
              {resume_data.experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-md transition-all duration-300 cursor-default"
                  style={{
                    backgroundColor: darkMode ? "#2C2C2C" : "#F9FAFB",
                    color: darkMode ? "#C0C0C0" : "#374151",
                    border: `1px solid ${darkMode ? "#3A3A3A" : "#E5E7EB"}`,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section: Responsibilities */}
        <div
          className="rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
          style={{
            backgroundColor: darkMode ? "#1A1A1A" : "#FFFFFF",
            border: `1px solid ${darkMode ? "#2C2C2C" : "#E5E7EB"}`,
            color: darkMode ? "#F5F5F5" : "#121212",
          }}
        >
          <h3 className="text-xl font-semibold mb-4">Key Responsibilities</h3>

          <ul className="list-disc list-inside space-y-3 text-sm md:text-base leading-relaxed">
            <li
              style={{
                color: darkMode ? "#C0C0C0" : "#374151",
              }}
            >
              Led the development of scalable Gen AI products and LLM-based
              solutions, ensuring responsive web applications with RxJS and
              Next.js.
            </li>
            <li
              style={{
                color: darkMode ? "#C0C0C0" : "#374151",
              }}
            >
              Built REST APIs for AI-generated content delivery and integrated
              MathJax/Markdown for LaTeX rendering on the frontend.
            </li>
            <li
              style={{
                color: darkMode ? "#C0C0C0" : "#374151",
              }}
            >
              Developed authentication with mobile OTP verification and
              integrated Razorpay for secure payments.
            </li>
            <li
              style={{
                color: darkMode ? "#C0C0C0" : "#374151",
              }}
            >
              Automated WhatsApp messaging using backend integrations, and
              deployed an AI-powered Sales Bot with Twilio.
            </li>
            <li
              style={{
                color: darkMode ? "#C0C0C0" : "#374151",
              }}
            >
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
