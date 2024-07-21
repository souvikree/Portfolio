import React, { useState } from 'react';
import ProjectCard from '../Cards/ProjectCards';  // Ensure this is the correct import path
import { projects } from '../../data/constants';

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');

  // Filter projects based on the selected category
  const filteredProjects = toggle === 'all' 
    ? projects 
    : projects.filter((item) => item.category === toggle);

  return (
    <div 
      id="projects" 
      className="relative z-10 flex flex-col items-center justify-center bg-gradient-to-tl from-[#843bce]/6 to-transparent clip-path-custom"
    >
      <div className="relative flex flex-col items-center justify-between w-full max-w-[1350px] py-2.5 px-0 gap-3 md:flex-col">
        <h2 className="text-4xl text-center font-semibold mt-5 text-white md:text-2xl md:mt-3">Projects</h2>
        <p className="text-lg text-center max-w-[600px] text-gray-400 md:text-base md:mt-3">
          I have worked on a wide range of projects. From web apps to ML projects and android apps. Here are some of my projects.
        </p>
        <div className="flex text-white text-lg rounded-full font-medium my-5 gap-3 md:text-sm md:gap-2">
          {['all', 'web app', 'android app', 'machine learning'].map((category) => (
            <React.Fragment key={category}>
              <div 
                className={`py-2 px-4 rounded-lg cursor-pointer ${toggle === category ? 'bg-blue-700 text-white' : 'bg-transparent'} hover:bg-blue-700 hover:text-white`}
                onClick={() => setToggle(category)}
              >
                {category.toUpperCase()}
              </div>
              {category !== 'machine learning' && <div className="w-px bg-primary"></div>}
            </React.Fragment>
          ))}
        </div>
        <div className="flex justify-center items-center gap-7 flex-wrap">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))
          ) : (
            <p className="text-xl text-gray-300 text-center font-medium mt-10">
              There are no projects available in this category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
