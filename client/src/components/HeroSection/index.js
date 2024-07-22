import React from 'react';
import HeroBgAnimation from '../HeroBgAnimation';
import HeroImg from '../../images/myim.jpg';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const HeroSection = () => {
  return (
    <div id="about" className='relative z-0'>
      <div className='flex justify-center relative p-8 sm:p-4 z-10 clip-path-custom'>
        <div className="absolute w-full h-full max-w-[1760px] top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center md:justify-end z-0">
          <HeroBgAnimation />
        </div>
        <div className="relative flex flex-col md:flex-row justify-between w-full max-w-[1200px] z-10">
          <div id="Left" className='w-full flex-1 mb-8 md:mb-0 flex flex-col items-start text-left'>
            <div className='font-bold text-4xl sm:text-5xl text-white leading-tight sm:leading-tight mb-4'>
              Hi, I am <br /> {Bio.name}
            </div>
            <div className='font-semibold text-2xl sm:text-3xl text-left flex gap-3 text-white leading-tight sm:leading-tight mb-4'>
              I am a
              <div className='text-blue-700 cursor-pointer'>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>
            <div className='text-gray-400 text-sm sm:text-base leading-8 mb-10'>
              {Bio.description}
            </div>
            <a href={Bio.resume} target='_blank' rel='noopener noreferrer' className='appearance-none text-decoration-none w-full max-w-[300px] text-center py-3 sm:py-4 text-white rounded-lg cursor-pointer text-lg sm:text-xl font-semibold transition-transform duration-200 ease-in-out bg-gradient-to-r from-[#8e2de2] to-[#3f0071] shadow-lg hover:scale-105 hover:shadow-xl hover:brightness-100'>
              Check Resume
            </a>
          </div>

          <div id="Right" className='w-full flex-1 flex justify-center items-center md:justify-end'>
            <img src={HeroImg} alt="hero-image" className='relative w-full max-w-[300px] max-h-[300px] md:max-w-[400px] md:max-h-[400px] border-2 border-custom-primary rounded-full z-10' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
