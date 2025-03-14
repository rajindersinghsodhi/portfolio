import React from 'react';
import resume_data from '../data';
import { ArrowUpRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/aceternityComponents/ui/carousel";

const Projects = () => {
  const darkMode = false;
  return (
    <section id="projects" className={`flex flex-col gap-5 md:gap-10 items-center justify-center ${darkMode ? 'bg-black' : ''}`}>
      <div className="flex">
        <span className='text-3xl md:text-4xl font-bold'>Projects</span>
      </div>
      <div className="flex flex-col md:flex-row gap-5 p-5">
        {resume_data.projects.map((project, projectIndex) => (
          <div key={projectIndex} className="flex flex-col border-slate-100 border-2 rounded-xl md:h-[70vh] md:w-[30vw]">
            <div className="relative overflow-hidden border-b rounded-t-xl">
              <Carousel>
                <CarouselContent className="flex">
                  {project.img_url.map((img, imgIndex) => (
                    <CarouselItem key={imgIndex} className="flex-shrink-0 w-full">
                      <img src={img} alt={`Project ${projectIndex + 1} Image ${imgIndex + 1}`} className='rounded-xl object-contain w-full' />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
                  &lt;
                </CarouselPrevious>
                <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
                  &gt;
                </CarouselNext>
              </Carousel>
            </div>
            <div className="flex justify-between p-3">
              <div className="flex flex-col justify-between gap-2">
                <span className='font-medium text-xl'>{project.title}</span>
                <div className="flex justify-center items-center gap-2 flex-wrap">
                  {project.tech_stack.map((tech, techIndex) => (
                    <span key={techIndex} className='border shadow-sm rounded-md px-2 py-1 text-xs'>{tech}</span>
                  ))}
                </div>
              </div>
              <div className="flex items-center">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div className="flex border rounded-md p-3 shadow md transform transition-transform hover:scale-110">
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
