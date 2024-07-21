import React, { useState } from 'react';
import ProjectCard from '../Cards/ProjectCards';  // Ensure this is the correct import path
import { projects } from '../../data/constants';
import Slider from 'react-slick';
import './Project.css'; // Import the custom CSS file

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');

  // Filter projects based on the selected category
  const filteredProjects = toggle === 'all' 
    ? projects 
    : projects.filter((item) => item.category === toggle);

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div 
      id="projects" 
      className="relative z-0 flex flex-col items-center justify-center bg-gradient-to-tl from-[#843bce]/6 to-transparent clip-path-custom"
    >
      <div className="relative flex flex-col items-center justify-between w-full max-w-[1350px] py-2.5 px-0 gap-3 md:flex-col">
        <h2 className="text-4xl text-center font-semibold mt-5 text-white md:text-3xl md:mt-3">Projects</h2>
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
        <div className="w-full py-4 px-2 pl-20  relative">
          <Slider {...settings}>
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <div className="px-10"> 
                  <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
                </div>
              ))
            ) : (
              <p className="text-xl text-gray-300 text-center font-medium mt-10">
                There are no projects available in this category.
              </p>
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Projects;
