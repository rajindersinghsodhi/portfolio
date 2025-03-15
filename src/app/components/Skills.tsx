import React from "react";
import resume_data from "../data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/aceternityComponents/ui/carousel";

const Skills = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <section
      className="flex flex-col items-center px-4 md:px-8 py-8 gap-5 md:gap-10 transition-colors duration-300"
      style={{
        backgroundColor: darkMode ? "#121212" : "#FFFFFF",
        color: darkMode ? "#F5F5F5" : "#121212",
      }}
    >
      {/* Title */}
      <div className="flex w-full justify-center">
        <h2
          className={`font-bold text-3xl md:text-4xl tracking-wide pb-2 transition-colors duration-300`}
          style={{
            color: darkMode ? "#F5F5F5" : "#121212",
          }}
        >
          Skills
        </h2>
      </div>

      {/* Carousel */}
      <div className="w-9/12 md:w-11/12">
        <Carousel className="w-full">
          <CarouselContent>
            {resume_data.categories.map((category, index) => (
              <CarouselItem
                key={index}
                className={`flex justify-center transition-colors duration-300`}
                style={{
                  backgroundColor: darkMode ? "#1A1A1A" : "#F9FAFB",
                  color: darkMode ? "#F5F5F5" : "#121212",
                  borderRadius: "1rem",
                }}
              >
                <div
                  className="flex flex-col flex-1 rounded-2xl p-6 w-full transition-all duration-300 shadow-md"
                  style={{
                    border: `1px solid ${darkMode ? "#2C2C2C" : "#E5E7EB"}`, // dark/light border
                    backgroundColor: darkMode ? "#1A1A1A" : "#FFFFFF",
                  }}
                >
                  {/* Category Title */}
                  <div className="flex justify-center mb-4">
                    <span
                      className="font-semibold text-xl md:text-2xl transition-colors duration-300"
                      style={{
                        color: darkMode ? "#F5F5F5" : "#121212",
                      }}
                    >
                      {category.title}
                    </span>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                    {category.skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col justify-center items-center gap-2 rounded-xl p-4 transition-all duration-300 hover:scale-105"
                        style={{
                          backgroundColor: darkMode ? "#2C2C2C" : "#F9FAFB",
                          border: `1px solid ${darkMode ? "#3A3A3A" : "#E5E7EB"}`,
                          color: darkMode ? "#C0C0C0" : "#374151",
                        }}
                      >
                        <div className="h-8 w-8 flex justify-center items-center">
                          <img
                            src={skill.img_url}
                            alt={skill.title}
                            className="h-8 w-8 object-contain rounded"
                          />
                        </div>
                        <span
                          className="text-sm font-medium text-center"
                          style={{
                            color: darkMode ? "#C0C0C0" : "#374151",
                          }}
                        >
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
          <CarouselPrevious
  className={`rounded-full p-2 transition-all duration-300 border ${
    darkMode
      ? 'bg-[#1A1A1A] text-[#F5F5F5] border-[#2C2C2C] hover:bg-[#2C2C2C]'
      : 'bg-white text-[#121212] border-[#E5E7EB] hover:bg-gray-100'
  }`}
/>
          <CarouselNext
  className={`rounded-full p-2 transition-all duration-300 border ${
    darkMode
      ? 'bg-[#1A1A1A] text-[#F5F5F5] border-[#2C2C2C] hover:bg-[#2C2C2C]'
      : 'bg-white text-[#121212] border-[#E5E7EB] hover:bg-gray-100'
  }`}
/>
        </Carousel>
      </div>

      {/* Footer Note */}
      <div className="flex justify-center w-full">
        <span
          className="text-sm transition-colors duration-300"
          style={{
            color: darkMode ? "#C0C0C0" : "#6B7280",
          }}
        >
          Use arrows to navigate
        </span>
      </div>
    </section>
  );
};

export default Skills;
