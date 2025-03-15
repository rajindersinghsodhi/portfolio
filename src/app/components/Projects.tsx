import React from 'react';
import resume_data from '../data';
import Image from "next/image";
import { ArrowUpRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/aceternityComponents/ui/carousel";

const Projects = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <section
      id="projects"
      className={`flex flex-col gap-5 md:gap-10 items-center justify-center transition-colors duration-300`}
      style={{
        backgroundColor: darkMode ? "#121212" : "#FFFFFF",
      }}
    >
      <div className="flex">
        <span className='text-3xl md:text-4xl font-bold'>Projects</span>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-5 p-5 w-11/12">
        {resume_data.projects.map((project, projectIndex) => (
          <div
            key={projectIndex}
            className={`flex flex-col rounded-xl md:h-[70vh] md:w-[30vw] transition-colors duration-300 border shadow-md ${
              darkMode ? 'bg-[#121212] border-[#2C2C2C]' : 'bg-white border-[#E5E7EB]'
            }`}
          >
            <div className="relative overflow-hidden rounded-t-xl">
              <Carousel>
                <CarouselContent className="flex">
                  {project.img_url.map((img, imgIndex) => (
                    <CarouselItem
                      key={imgIndex}
                      className="flex-shrink-0 w-full"
                    >
                      <Image
  src={img}
  alt={`Project ${projectIndex + 1} Image ${imgIndex + 1}`}
  width={500} // Arbitrary number, won't change your Tailwind style
  height={300}
  className="w-full object-cover rounded"
/>


                    </CarouselItem>
                  ))}
                </CarouselContent>

                <CarouselPrevious
                  className={`absolute left-0 top-1/2 transform -translate-y-1/2 rounded-full p-2 transition-all duration-300 border ${
                    darkMode
                      ? 'bg-[#1A1A1A] text-[#F5F5F5] border-[#2C2C2C] hover:bg-[#2C2C2C]'
                      : 'bg-white text-[#121212] border-[#E5E7EB] hover:bg-gray-100'
                  }`}
                />
                <CarouselNext
                  className={`absolute right-0 top-1/2 transform -translate-y-1/2 rounded-full p-2 transition-all duration-300 border ${
                    darkMode
                      ? 'bg-[#1A1A1A] text-[#F5F5F5] border-[#2C2C2C] hover:bg-[#2C2C2C]'
                      : 'bg-white text-[#121212] border-[#E5E7EB] hover:bg-gray-100'
                  }`}
                />
              </Carousel>
            </div>

            <div className="flex justify-between p-3">
              <div className="flex flex-col justify-between gap-2">
                <span className='font-medium text-xl'>
                  {project.title}
                </span>

                <div className="flex items-center gap-2 flex-wrap">
                  {project.tech_stack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`rounded-md px-2 py-1 text-xs transition-colors duration-300 ${
                        darkMode
                          ? 'bg-[#2C2C2C] border border-[#3A3A3A] text-[#C0C0C0]'
                          : 'bg-[#F9FAFB] border border-[#E5E7EB] text-[#374151]'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className={`flex border rounded-md p-3 shadow-md transform transition-transform hover:scale-110 ${
                      darkMode
                        ? 'bg-[#1A1A1A] border-[#2C2C2C] text-[#F5F5F5]'
                        : 'bg-white border-[#E5E7EB] text-[#121212]'
                    }`}
                  >
                    <ArrowUpRight />
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
