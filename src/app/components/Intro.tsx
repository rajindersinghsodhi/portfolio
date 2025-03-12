'use client'; // If you're using App Router and want to use hooks/events

const Intro = ({darkMode} : {darkMode: boolean}) => {// You can control darkMode from parent or context if needed

  return (
    <section
      className={`flex flex-col items-center justify-center ${darkMode ? "bg-black" : ""}`}
      style={{ height: "100vh" }}
    >
      <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-20 gap-10" id="home-container">
        {/* Image Container */}
        <div className="flex justify-center">
          <img
            src="/rajinder_image.jpeg"
            alt="Rajinder Singh Sodhi"
            className={`rounded-full border-2 border-black h-40 w-40 md:h-60 md:w-60 ${darkMode ? "border-4 border-neutral-100" : ""}`}
            id="logo"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-center gap-7">
          <div className="flex flex-col items-center gap-2">
            <span className={`lg:text-lg ${darkMode ? "text-white" : ""}`}>Hello, I am</span>
            <span className={`lg:text-4xl font-semibold lg:font-normal ${darkMode ? "text-white" : ""}`}>
              Rajinder Singh Sodhi
            </span>
            <span className="lg:text-2xl font-bold" style={{ color: "rgb(114, 111, 111)" }}>
              Software Engineer
            </span>
          </div>

          {/* Download Resume Button */}
          <div className="flex items-center">
            <a
              href="/documents/resumeRajindersinghsodhi.pdf"
              id="downloadCV"
              download
              className={`focus:outline-none font-medium rounded-full text-sm px-5 me-2 mb-2 py-3 ${
                darkMode ? "bg-white text-black" : "text-white bg-black"
              }`}
            >
              Download Resume
            </a>
          </div>

          {/* Social Icons */}
          {!darkMode ? (
            <div className="flex items-center gap-10">
              <a href="https://github.com/rajindersinghsodhi" target="_blank" rel="noopener noreferrer">
                <img src="/github-icon.png" alt="GitHub" style={{ height: "2.5rem", width: "2.5rem" }} />
              </a>
              <a
                href="https://www.linkedin.com/in/rajindersinghsodhi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/linkedin-icon.png" alt="LinkedIn" style={{ height: "2rem", width: "2rem" }} />
              </a>
            </div>
          ) : (
            <div className="flex items-center gap-10">
              <a href="https://github.com/rajindersinghsodhi" target="_blank" rel="noopener noreferrer">
                <img src="/dark-github-icon.png" alt="GitHub Dark" style={{ height: "2.5rem", width: "2.5rem" }} />
              </a>
              <a
                href="https://www.linkedin.com/in/rajindersinghsodhi-541744227/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/dark-linkedin-icon.png" alt="LinkedIn Dark" style={{ height: "2rem", width: "2rem" }} />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}


export default Intro