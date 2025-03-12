import React from "react";

const Contact = ({darkMode} : {darkMode: boolean}) => {
  return (
    <section id="Contact" className={`${darkMode ? "bg-black" : ""}`}>
      <div
        className="flex flex-col justify-evenly items-center py-5 md:gap-10"
        id="contact-container"
      >
        <div className="flex flex-col items-center justify-center mt-20 mb-10 lg:m-0">
          <span className={`${darkMode ? "text-white" : ""}`}>
            Get in Touch
          </span>
          <h1
            className={`text-5xl font-semibold ${
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
              <img
                src={
                  !darkMode ? "/email-icon.png" : "/dark-email-icon.png"
                }
                alt="email icon"
                style={{ height: "1.5rem" }}
              />
              <span className={`text-lg ${darkMode ? "text-white" : ""}`}>
                rajindersodhi181&#64;gmail.com
              </span>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center gap-3">
              <img
                src={
                  !darkMode
                    ? "/linkedin-icon.png"
                    : "/dark-linkedin-icon.png"
                }
                alt="linkedin icon"
                style={{ height: "1.5rem", width: "1.5rem" }}
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
