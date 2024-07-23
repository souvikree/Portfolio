import React, { useState } from 'react';
import ProjectCard from '../Cards/ProjectCards'; // Ensure this is the correct import path
import { projects } from '../../data/constants';
import Slider from 'react-slick';
import './Project.css'; // Import the custom CSS file

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');

  // Filter projects based on the selected category
  const filteredProjects = toggle === 'all' 
    ? projects 
    : projects.filter((item) => item.category === toggle);

  // Log filtered projects for debugging
  console.log(filteredProjects);

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: filteredProjects.length < 1 ? 1 : 3, // Show 1 slide if there's only one project
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: filteredProjects.length < 1 ? 1 : 2, // Show 1 slide if there's only one project
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: filteredProjects.length < 1 ? 1 : 1, // Show 1 slide if there's only one project
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div 
      id="projects" 
      className="relative z-0 mt-12 flex flex-col items-center justify-center bg-gradient-to-tl from-[#843bce]/6 to-transparent"
      style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%)' }}
    >
      <div className="relative flex flex-col items-center justify-between w-full max-w-[1350px] py-5 px-4 sm:px-6 lg:px-8 gap-4">
        <h2 className="text-3xl font-semibold text-center text-white mb-4 sm:text-4xl md:text-4xl">
          Projects
        </h2>
        <p className="text-base text-center text-gray-400 max-w-lg mb-6 sm:text-lg md:text-xl">
          I have worked on a wide range of projects. From web apps to ML projects and android apps. Here are some of my projects.
        </p>
        <div className="flex flex-wrap justify-center text-white text-sm rounded-full font-medium my-5 gap-3 sm:text-sm md:text-sm">
          {['all', 'web app', 'Mobile app', 'machine learning'].map((category) => (
            <React.Fragment key={category}>
              <div 
                className={`py-2 px-4 rounded-lg cursor-pointer ${toggle === category ? 'bg-blue-700 text-white' : 'bg-transparent'} hover:bg-blue-700 hover:text-white`}
                onClick={() => setToggle(category)}
              >
                {category.toUpperCase()}
              </div>
              {category !== 'machine learning' && <div className="w-px bg-primary hidden sm:block"></div>}
            </React.Fragment>
          ))}
        </div>
        <div className="slider-container w-full py-4 px-2 sm:px-4 md:px-6 lg:px-12 relative">
          {filteredProjects.length > 0 ? (
            filteredProjects.length === 1 ? (
              <div className="px-2 sm:px-4 inline-block">
                <div className="project-card-wrapper">
                  <ProjectCard project={filteredProjects[0]} openModal={openModal} setOpenModal={setOpenModal} />
                </div>
              </div>
            ) : (
              <Slider {...settings}>
                {filteredProjects.map((project) => (
                  <div className="px-2 sm:px-4 inline-block" key={project.id}>
                    <div className="project-card-wrapper">
                      <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
                    </div>
                  </div>
                ))}
              </Slider>
            )
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
