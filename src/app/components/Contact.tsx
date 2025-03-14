import React from "react";
import Image from 'next/image';

const Contact = () => {
  const darkMode = false;
  return (
    <section id="contact" className={`${darkMode ? "bg-black" : ""}`}>
      <div
        className="flex flex-col justify-evenly items-center py-5 md:gap-10"
        id="contact-container"
      >
        <div className="flex flex-col items-center justify-center mt-20 mb-10 lg:m-0">
          <span className={`${darkMode ? "text-white" : ""}`}>
            Get in Touch
          </span>
          <h1
            className={`text-3xl md:text-4xl font-bold ${
              darkMode ? "text-white" : ""
            }`}
          >
            Contact Me
          </h1>
        </div>

        <div className="flex justify-evenly gap-10 mx-3">
          <div
            className={`flex flex-col lg:flex-row items-center gap-10 border rounded-3xl p-5 ${
              darkMode ? "bg-black" : "bg-white"
            }`}
          >
            {/* Email */}
            <div className="flex items-center gap-3">
            <Image
              src={!darkMode ? '/email-icon.png' : '/dark-email-icon.png'}
              alt="Email Icon"
              width={24}     // 1.5rem ≈ 24px
              height={24}
            />
              <span className={`text-lg ${darkMode ? "text-white" : ""}`}>
                rajindersodhi181&#64;gmail.com
              </span>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center gap-3">
            <Image
              src={!darkMode ? '/linkedin-icon.png' : '/dark-linkedin-icon.png'}
              alt="LinkedIn Icon"
              width={24}  // 1.5rem = 24px
              height={24}
            />
              <span className={`text-lg ${darkMode ? "text-white" : ""}`}>
                rajindersinghsodhi
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
