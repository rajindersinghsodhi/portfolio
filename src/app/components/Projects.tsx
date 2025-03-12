import React from 'react';

const Projects = ({darkMode} : {darkMode: boolean}) => {
  return (
    <section id="projects" className={darkMode ? 'bg-black' : ''}>
      <div className="flex flex-col justify-evenly items-center" id="projects-container">
        {/* Title */}
        <div className="flex justify-center my-5 mt-20 mb-5 lg:m-0">
          <h1 className={`text-5xl font-semibold ${darkMode ? 'text-white' : ''}`}>Projects</h1>
        </div>

        {/* Projects Container */}
        <div className="flex flex-col lg:flex-row justify-evenly lg:items-stretch items-center gap-10 mx-3">

          {/* Project 1 */}
          <div className={`flex flex-col items-start border rounded-3xl p-5 lg:w-1/3 w-11/12 ${darkMode ? 'bg-black' : 'bg-white'}`}>
            <div className="flex w-full justify-between">
              <span className={`text-xl font-bold ${darkMode ? 'text-white' : ''}`}>Pragyan AI</span>
              <a href="https://competition.pragyan.humanli.ai" target="_blank" rel="noopener noreferrer">
                <button className={`text-base rounded-md px-2 py-1 ${darkMode ? 'bg-white text-black' : 'bg-slate-950 text-white'}`}>
                  Link
                </button>
              </a>
            </div>
            <div className="flex flex-col items-start">
              <h1 className={`${darkMode ? 'text-white' : ''}`}>AI-powered platform for NEET and JEE aspirants</h1>
              <div className="mt-5">
                <p className={`text-justify ${darkMode ? 'text-white' : ''}`}>
                  Designed and developed an AI-powered platform for personalized educational content and assessments. 
                  Implemented text-to-speech, speech-to-text, topic-wise tests, and AI-generated reports for interactive learning. 
                  Integrated MathJax and Markdown for rendering complex content, real-time notifications, and Razorpay for payment processing.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-5">
                {['Angular', 'Tailwind CSS', 'Angular Material UI', 'Rxjs', 'Flask', 'Firebase', 'Razorpay'].map((tech, index) => (
                  <p key={index} className={`border-black border rounded-md p-2 ${darkMode ? 'bg-white text-black' : 'bg-slate-950 text-white'}`}>
                    {tech}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className={`flex flex-col items-start border rounded-3xl p-5 lg:w-1/3 w-11/12 ${darkMode ? 'bg-black' : 'bg-white'}`}>
            <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : ''}`}>Convocraze</h1>
            <div className="flex flex-col items-start">
              <h1 className={`${darkMode ? 'text-white' : ''}`}>Chatting web app</h1>
              <div className="mt-5">
                <p className={`text-justify ${darkMode ? 'text-white' : ''}`}>
                  Developed a real-time chat web app with friend addition, user search, and text/photo messaging using HTML, CSS, Javascript, ReactJs, Firebase, and Material UI. 
                  Integrated Firebase for real-time data sync and user authentication. Implemented intuitive UI for seamless user experience.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-5">
                {['HTML', 'CSS', 'Javascript', 'ReactJs', 'Firebase', 'Material UI'].map((tech, index) => (
                  <p key={index} className={`border-black border rounded-md p-2 ${darkMode ? 'bg-white text-black' : 'bg-slate-950 text-white'}`}>
                    {tech}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className={`flex flex-col items-start border rounded-3xl p-5 lg:w-1/3 w-11/12 ${darkMode ? 'bg-black' : 'bg-white'}`}>
            <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : ''}`}>Disney Hotstar Clone</h1>
            <div className="flex flex-col items-start">
              <h1 className={`${darkMode ? 'text-white' : ''}`}>Frontend clone of Disney Hotstar</h1>
              <div className="mt-5">
                <p className={`text-justify ${darkMode ? 'text-white' : ''}`}>
                  Built a Disney+ Hotstar clone with identical frontend design using HTML, CSS, JavaScript, ReactJs, and React libraries including Axios and React-Icons.
                  Utilized TMDB API for fetching movies and TV shows data, ensuring seamless integration with the original website.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-5">
                {['HTML', 'CSS', 'Javascript', 'ReactJs', 'Axios', 'Material UI', 'TMDB API'].map((tech, index) => (
                  <p key={index} className={`border-black border rounded-md p-2 ${darkMode ? 'bg-white text-black' : 'bg-slate-950 text-white'}`}>
                    {tech}
                  </p>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
