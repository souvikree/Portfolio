import React from 'react';
import HeroBgAnimation from '../HeroBgAnimation';
import HeroImg from '../../images/myim.jpg';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const HeroSection = () => {
  return (
    <div id="about" className='relative top-4 md:top-10 z-0'>
      <div className='flex justify-center relative p-8 sm:p-4 z-10 clip-path-custom'>
        <div className="relative flex flex-col-reverse md:flex-row justify-between w-full max-w-[1200px] z-10">
          <div id="Left" className='w-full flex-1 mb-8 md:mb-0 flex flex-col items-center md:items-start text-center md:text-left'>
            <div className='font-bold text-4xl sm:text-5xl lg:text-5xl xl:text-5xl text-white leading-tight sm:leading-tight mb-4 pt-10 md:pt-0'>
              Hi, I am <br /> {Bio.name}
            </div>
            <div className='font-semibold text-2xl sm:text-3xl lg:text-3xl xl:text-3xl text-center md:text-left flex flex-wrap gap-3 text-white leading-tight sm:leading-tight mb-4'>
              <span>I am a</span>
              <span className='text-blue-700 cursor-pointer whitespace-nowrap'>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>
            <div className='text-gray-400 text-sm sm:text-base lg:text-lg xl:text-xl leading-8 mb-10'>
              {Bio.description}
            </div>
            <a href={Bio.resume} target='_blank' rel='noopener noreferrer' className='appearance-none text-decoration-none w-full max-w-[300px] text-center py-3 sm:py-4 text-white rounded-lg cursor-pointer text-lg sm:text-xl lg:text-xl transition-transform duration-200 ease-in-out bg-gradient-to-r from-[#8e2de2] to-[#3f0071] shadow-lg hover:scale-105 hover:shadow-xl hover:brightness-100'>
              Check Resume
            </a>
          </div>

          <div id="Right" className='w-full flex-1 flex flex-col justify-center items-center md:justify-end relative md:mb-0'>
            <div className="absolute w-full h-full max-w-[1760px] left-1/2 transform -translate-x-1/2 flex justify-center items-center md:justify-end order-last md:order-first">
              <HeroBgAnimation />
            </div>
            <img src={HeroImg} alt="hero-image" className='relative w-full max-w-[300px] max-h-[300px] md:max-w-[400px] md:max-h-[400px] border-2 border-custom-primary rounded-full z-10' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
