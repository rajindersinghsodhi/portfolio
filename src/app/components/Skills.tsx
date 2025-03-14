import React from "react";
import resume_data from "../data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Skills = () => {
  return (
    <section className="flex flex-col items-center px-4 md:px-8 py-8 gap-5 md:gap-10 bg-gradient-to-b from-white to-slate-50">
      <div className="flex w-full justify-center">
        <h2 className="font-bold text-3xl md:text-4xl text-slate-800 tracking-wide pb-2">
          Skills
        </h2>
      </div>

      <div className="w-11/12">
        <Carousel className="w-full">
          <CarouselContent>
            {resume_data.categories.map((category, index) => (
              <CarouselItem
                key={index}
                className="flex justify-center px-4 md:px-10"
              >
                <div className="flex flex-col flex-1 border border-slate-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow bg-white w-full">
                  {/* Category Title */}
                  <div className="flex justify-center mb-4">
                    <span className="font-semibold text-xl md:text-2xl">
                      {category.title}
                    </span>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                    {category.skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col justify-center items-center gap-2 border border-slate-100 rounded-xl p-4 bg-slate-50 hover:bg-white hover:scale-105 transition-all duration-300"
                      >
                        <div className="h-8 w-8 flex justify-center items-center">
                          <img
                            src={skill.img_url}
                            alt={skill.title}
                            className="h-8 w-8 object-contain rounded"
                          />
                        </div>
                        <span className="text-sm font-medium text-slate-700 text-center">
                          {skill.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Carousel Controls */}
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="flex justify-center w-full">
        <span className="text-sm text-slate-500">Use arrows to navigate</span>
      </div>
    </section>
  );
};

export default Skills;
