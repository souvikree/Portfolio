import React from 'react';
import { skills } from '../../data/constants';  // Ensure this is the correct import path

const Skills = () => {
  return (
    <div id="skills" className="relative z-0 flex flex-col items-center justify-center">
      <div className="relative flex flex-col items-center justify-between w-full max-w-[1100px] gap-3 py-5 px-0 md:flex-col">
        <h2 className="text-4xl text-center font-semibold mt-5 text-white md:text-3xl md:mt-3">TECHNICAL SKILLS</h2>
        <p className="text-lg text-center max-w-[600px] text-gray-300 md:text-base md:mt-3">
          Here are some of my skills on which I have been working on for the past 2 years.
        </p>
        <div className="w-auto flex flex-wrap mt-8 gap-8 justify-center">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="w-full max-w-[550px] bg-gradient-to-r from-purple-800 via-purple-600 to-purple-400 border border-[#854CE6] shadow-2xl rounded-lg p-6 md:max-w-[450px] md:p-5"
            >
              <h3 className="text-2xl font-bold text-white mb-4 text-center">{skill.title}</h3>
              <div className="flex flex-wrap gap-4 mb-4 justify-center">
                {skill.skills.map((item) => (
                  <div
                    key={item.name}
                    className="text-base font-normal text-gray-100 bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 flex items-center gap-3 shadow-md md:text-sm md:px-3 md:py-2"
                  >
                    <img src={item.image} alt={item.name} className="w-8 h-8" />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
