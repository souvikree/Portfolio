import React from 'react';
import HeroBgAnimation from '../HeroBgAnimation';
// import { Img } from './HeroStyle';
import HeroImg from '../../images/myim.jpg';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const HeroSection = () => {
    return (
        <div id="about" className='relative z-0'>
            <div className='flex justify-center relative p-[80px_30px] z-10 clip-path-custom sm:p-[66px_16px] xs:p-[32px_16px]'>
                <div className="absolute flex justify-end ml-96 right-0 bottom-0 w-full h-full max-w-[1760px] overflow-hidden px-[30px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:justify-center md:px-0">
                    <HeroBgAnimation />
                </div>
                <div className="relative flex flex-col md:flex-row justify-between w-full max-w-[1200px]">
                    <div id="Left" className='w-full flex-1 mb-8 flex flex-col items-start text-left md:items-start md:text-left max-w-[600px] md:max-w-[800px]'>
                        <div className='font-bold text-[40px] sm:text-[50px] text-white leading-[48px] sm:leading-[68px] sm:mb-2'>
                            Hi, I am <br /> {Bio.name}
                        </div>
                        <div className='font-semibold text-[22px] sm:text-[32px] text-left flex gap-3 text-white leading-[48px] sm:leading-[68px] sm:mb-4'>
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
                        <a href={Bio.resume} target='display' className='appearance-none text-decoration-none w-full max-w-[300px] text-center py-3 sm:py-4 text-white rounded-lg cursor-pointer text-lg sm:text-xl font-semibold transition-transform duration-200 ease-in-out bg-gradient-to-r from-[#8e2de2] to-[#3f0071] shadow-lg hover:scale-105 hover:shadow-xl hover:brightness-100'>
                            Check Resume
                        </a>
                    </div>

                    <div id="Right" className='w-full flex-1 pb-40 pl-72 flex justify-center items-center'>
                        <img src={HeroImg} alt="hero-image" className='relative w-full h-full max-w-[400px] max-h-[400px] md:max-w-[400px] md:max-h-[400px] sm:max-w-[280px] sm:max-h-[280px] border-2 border-custom-primary rounded-full' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
