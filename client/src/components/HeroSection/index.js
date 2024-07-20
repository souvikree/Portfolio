import React from 'react';
import HeroBgAnimation from '../HeroBgAnimation';
import { Bio } from '../../data/constants';
import HeroImg from '../../images/myim.jpg';
import Typewriter from 'typewriter-effect';

const HeroSection = () => {
    return (
        <section id="about" className="relative bg-gray-100 py-20 lg:py-32">
            <div className="absolute flex justify-end inset-0 w-full h-full max-w-screen-xl overflow-hidden px-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:justify-center lg:px-0">
                <HeroBgAnimation />
            </div>
            <div className="container mx-auto flex flex-col lg:flex-row items-center px-6 lg:px-8 relative z-10">
                {/* Left Container */}
                <div className="flex-1 lg:mr-16 lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                        Hi, I am <br /> {Bio.name}
                    </h1>
                    <div className="text-2xl lg:text-3xl font-semibold text-gray-700 mb-4">
                        I am a
                        <span className="text-indigo-600 ml-2">
                            <Typewriter
                                options={{
                                    strings: Bio.roles,
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                    </div>
                    <p className="text-lg lg:text-xl text-gray-600 mb-8">
                        {Bio.description}
                    </p>
                    <a
                        href={Bio.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 px-6 rounded-lg text-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
                    >
                        Check Resume
                    </a>
                </div>

                {/* Right Container */}
                <div className="flex-1 lg:w-1/2 flex justify-center lg:justify-end">
                    <img
                        src={HeroImg}
                        alt="hero-image"
                        className="w-full max-w-xs lg:max-w-md rounded-full border-4 border-indigo-500"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
