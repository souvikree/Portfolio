import React from 'react';
import { skills } from '../../data/constants';  

const Skills = () => {
  return (
    <div id="skills" className="relative z-0 flex flex-col items-center justify-center md:top-28 mt-24 px-7  sm:px-6 lg:px-8">
      <div className="relative flex flex-col items-center justify-between w-full max-w-[1100px] gap-6 py-5">
        <h2 className="text-3xl font-semibold text-center text-white mb-4 sm:text-4xl md:text-4xl">
          TECHNICAL SKILLS
        </h2>
        <p className="text-base text-center text-gray-300 max-w-lg mb-6 sm:text-lg md:text-xl">
          Here are some of my skills on which I have been working on for the past 2 years.
        </p>
        <div className="w-full flex flex-wrap gap-6 justify-center">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="w-full max-w-[400px] bg-gradient-to-r from-purple-800 via-purple-600 to-purple-400 border border-[#854CE6] shadow-2xl rounded-lg p-4 md:max-w-[350px] lg:max-w-[500px] lg:p-5"
            >
              <h3 className="text-xl font-bold text-white mb-4 text-center md:text-2xl">
                {skill.title}
              </h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {skill.skills.map((item) => (
                  <div
                    key={item.name}
                    className="text-sm font-normal text-gray-100 bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 flex items-center gap-2 md:text-base md:px-4 md:py-2"
                  >
                    <img src={item.image} alt={item.name} className="w-6 h-6 md:w-8 md:h-8 object-contain" />
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
