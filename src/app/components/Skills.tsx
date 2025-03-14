import React from "react";
import resume_data from "../data";

const Skills = () => {
  return (
    <section className="flex flex-col px-4 md:px-8 py-8 gap-10 bg-gradient-to-b from-white to-slate-50">
      <div className="flex w-full justify-center">
        <h2 className="font-bold text-3xl md:text-4xl text-slate-800 tracking-wide pb-2">
          Skills
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resume_data.tech_skills.map((tech_skill, index) => (
          <div
            key={index}
            className="flex flex-col flex-1 border border-slate-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow bg-white"
          >
            <div className="flex justify-center mb-4">
              <span className="font-semibold text-xl md:text-2xl">
                {tech_skill.title}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {tech_skill.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-center items-center gap-2 border border-slate-100 rounded-xl p-4 bg-slate-50 hover:bg-white hover:scale-105 transition-all duration-300"
                >
                  <div className="h-12 w-12 flex justify-center items-center">
                    <img
                      src={skill.img_url}
                      alt={skill.title}
                      className="h-12 w-12 object-contain rounded"
                    />
                  </div>
                  <span className="text-sm font-medium text-slate-700 text-center">
                    {skill.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
