import React from "react";
import Image from "next/image";

const Contact = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center px-4 md:px-8 py-8 gap-5 md:gap-10 transition-colors duration-300"
      style={{
        backgroundColor: darkMode ? "#121212" : "#FFFFFF",
        color: darkMode ? "#F5F5F5" : "#121212",
      }}
    >
      {/* Title */}
      <div className="flex flex-col items-center justify-center mt-20 mb-10 lg:m-0">
        <span
          className="transition-colors duration-300"
          style={{
            color: darkMode ? "#F5F5F5" : "#121212",
          }}
        >
          Get in Touch
        </span>
        <h1
          className={`text-3xl md:text-4xl font-bold tracking-wide pb-2 transition-colors duration-300`}
          style={{
            color: darkMode ? "#F5F5F5" : "#121212",
          }}
        >
          Contact Me
        </h1>
      </div>

      {/* Contact Box */}
      <div className="flex justify-evenly gap-10 mx-3 w-fit">
        <div
          className={`flex flex-col lg:flex-row items-center gap-10 rounded-2xl p-6 w-full transition-all duration-300 shadow-md`}
          style={{
            backgroundColor: darkMode ? "#1A1A1A" : "#FFFFFF",
            border: `1px solid ${darkMode ? "#2C2C2C" : "#E5E7EB"}`,
          }}
        >
          {/* Email */}
          <div className="flex items-center gap-3">
            <Image
              src={!darkMode ? "/email-icon.png" : "/dark-email-icon.png"}
              alt="Email Icon"
              width={24}
              height={24}
            />
            <span
              className="text-lg transition-colors duration-300"
              style={{
                color: darkMode ? "#C0C0C0" : "#374151",
              }}
            >
              rajindersodhi181&#64;gmail.com
            </span>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-3">
            <Image
              src={
                !darkMode ? "/linkedin-icon.png" : "/dark-linkedin-icon.png"
              }
              alt="LinkedIn Icon"
              width={24}
              height={24}
            />
            <span
              className="text-lg transition-colors duration-300"
              style={{
                color: darkMode ? "#C0C0C0" : "#374151",
              }}
            >
              rajindersinghsodhi
            </span>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="flex justify-center w-full">
        <span
          className="text-sm transition-colors duration-300"
          style={{
            color: darkMode ? "#C0C0C0" : "#6B7280",
          }}
        >
          Feel free to reach out anytime!
        </span>
      </div>
    </section>
  );
};

export default Contact;
