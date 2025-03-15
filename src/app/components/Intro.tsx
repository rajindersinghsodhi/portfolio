import { TypewriterEffect } from '@/aceternityComponents/ui/typewriter-effect';
import Image from 'next/image';

const Intro = ({ darkMode }: { darkMode: boolean }) => {
  const words = [
    { text: "Rajinder" },
    { text: "Singh" },
    { text: "Sodhi" },
  ];

  return (
    <section
      className={`flex flex-col items-center justify-center transition-colors duration-300`}
      style={{
        height: "80vh",
        backgroundColor: darkMode ? "#121212" : "#FFFFFF",  // Dark BG / Light BG
        color: darkMode ? "#F5F5F5" : "#121212"             // Text color toggle
      }}
    >
      <div
        className="flex flex-col lg:flex-row justify-center items-center lg:gap-20 gap-10"
        id="home-container"
      >
        {/* Image Container */}
        <div className="flex justify-center">
        <Image
  src="/profile.jpeg"
  alt="Rajinder Singh Sodhi"
  width={240} // equivalent to w-60 (60 * 4px = 240px)
  height={240} // equivalent to h-60
  className={`rounded-full h-40 w-40 md:h-60 md:w-60 transition-all duration-300 ${
    darkMode ? "border-4" : "border-2"
  }`}
  style={{
    borderColor: darkMode ? "#F5F5F5" : "#121212",
  }}
  id="logo"
/>
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-center gap-7">
          <div className="flex flex-col items-center gap-2">
            <span
              className={`lg:text-lg transition-colors duration-300`}
              style={{
                color: darkMode ? "#C0C0C0" : "#333333",
              }}
            >
              Hello, I am
            </span>

            {/* Typewriter Effect */}
            <TypewriterEffect words={words} darkMode={darkMode} />

            <span
              className="lg:text-2xl font-semibold"
              style={{
                color: darkMode ? "#C0C0C0" : "rgb(114, 111, 111)",  // Secondary Text
              }}
            >
              Software Engineer
            </span>
          </div>

          {/* Download Resume Button */}
          <div className="flex items-center">
            <a
              href="/documents/resumeRajindersinghsodhi.pdf"
              id="downloadCV"
              download
              className={`focus:outline-none font-medium rounded-full text-sm px-5 me-2 mb-2 py-3 transition-colors duration-300`}
              style={{
                backgroundColor: darkMode ? "#F5F5F5" : "black",
                color: darkMode ? "#121212" : "#FFFFFF",
              }}
            >
              Download Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-10">
            <a
              href="https://github.com/rajindersinghsodhi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={darkMode ? "/dark-github-icon.png" : "/github-icon.png"}
                alt="GitHub"
                width={40}
                height={40}
              />
            </a>

            <a
              href="https://www.linkedin.com/in/rajindersinghsodhi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={darkMode ? "/dark-linkedin-icon.png" : "/linkedin-icon.png"}
                alt="LinkedIn"
                width={32}
                height={32}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
