import React from 'react';

const Skills = ({darkMode} : {darkMode: boolean}) => {
  return (
    <section id="skills" className={darkMode ? 'bg-black' : ''}>
      <div className="flex flex-col justify-evenly items-center md:gap-10" id="skills-container">
        <div className="flex justify-center mt-20 mb-5 lg:m-0">
          <h1 className={`text-5xl font-semibold ${darkMode ? 'text-white' : ''}`}>
            Skills
          </h1>
        </div>

        <div className="flex lg:flex-row flex-col justify-evenly lg:items-stretch items-center gap-10 mx-3">

          {/* Frontend Development */}
          <div className={`flex flex-col items-center border rounded-3xl p-5 lg:w-1/3 w-11/12 ${darkMode ? 'bg-black' : 'bg-white'}`}>
            <h1 className={`text-xl ${darkMode ? 'text-white' : ''}`}>
              Frontend Development
            </h1>
            <div className="flex flex-col items-center">
              <div className="flex flex-wrap gap-3 p-5">
                {['HTML', 'CSS', 'Angular', 'Reactjs', 'Bootstrap', 'Tailwind CSS', 'Gen Ai'].map((skill, index) => (
                  <p
                    key={index}
                    className={`border-black border rounded-md p-2 ${
                      darkMode ? 'bg-white text-black' : 'bg-slate-950 text-white'
                    }`}
                  >
                    {skill}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Backend Development */}
          <div className={`flex flex-col items-center border rounded-3xl p-5 lg:w-1/3 w-11/12 ${darkMode ? 'bg-black' : 'bg-white'}`}>
            <h1 className={`text-xl ${darkMode ? 'text-white' : ''}`}>
              Backend Development
            </h1>
            <div className="flex flex-col items-center">
              <div className="flex flex-wrap gap-3 p-5">
                {['Python', 'Flask', 'Express', "REST API's", 'Git', 'Firebase', 'MongoDB'].map((skill, index) => (
                  <p
                    key={index}
                    className={`border-black border rounded-md p-2 ${
                      darkMode ? 'bg-white text-black' : 'bg-slate-950 text-white'
                    }`}
                  >
                    {skill}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Programming Languages */}
          <div className={`flex flex-col border rounded-3xl p-5 lg:w-1/3 w-11/12 ${darkMode ? 'bg-black' : 'bg-white'}`}>
            <div className="flex justify-center">
              <h1 className={`text-xl ${darkMode ? 'text-white' : ''}`}>
                Programming Languages
              </h1>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex flex-wrap gap-3 p-5">
                {['Java', 'JavaScript', 'Typescript', 'Python', 'Data Structures & Algorithms'].map((lang, index) => (
                  <p
                    key={index}
                    className={`border-black border rounded-md p-2 ${
                      darkMode ? 'bg-white text-black' : 'bg-slate-950 text-white'
                    }`}
                  >
                    {lang}
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

export default Skills;
