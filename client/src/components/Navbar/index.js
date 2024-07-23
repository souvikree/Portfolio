import React from 'react';
import { FaBars, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Icon } from "@iconify/react";
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  return (
    <div className="bg-[#191924] sticky top-0 z-10 h-[80px] flex items-center justify-center">
      <div className="flex justify-between items-center h-[60px] w-full px-6 max-w-[1200px]">
        <a 
          href="/" 
          className="flex items-center text-white mb-1 cursor-pointer"
        >
          <Icon icon="arcticons:zoro-to" width={50} />
          {/* <Icon icon="arcticons:sgame" width={50}  /> */}
          {/* <Icon icon="arcticons:easy-coder" width={50}  /> */}
          {/* <Icon icon="token:metf" width={50}  /> */}
          <span className="font-bold text-[18px] ml-2 mr-28">Portfolio</span>
        </a>
        
        <div 
          className="block lg:hidden text-white cursor-pointer" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars size="1.5rem" />
        </div>

        <div className="hidden lg:flex ml-24 text-white justify-center items-center gap-10">
          <a href="#about" className="font-medium transition-colors duration-200 hover:text-[#be1adb]">About</a>
          <a href='#skills' className="font-medium transition-colors duration-200 hover:text-[#be1adb]">Skills</a>
          <a href='#experience' className="font-medium transition-colors duration-200 hover:text-[#be1adb]">Experience</a>
          <a href='#projects' className="font-medium transition-colors duration-200 hover:text-[#be1adb]">Projects</a>
          <a href='#education' className="font-medium transition-colors duration-200 hover:text-[#be1adb]">Education</a>
        </div>

        <div className="hidden lg:flex items-center ml-auto">
          <a 
            href={Bio.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#be1adb] font-medium transition-all duration-600 hover:text-white hover:bg-black rounded-full p-2"
          >
            <FaGithub size="2.5rem" />
          </a>
          <a 
            href={Bio.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="ml-4 text-[#be1adb] font-medium transition-all duration-600 hover:text-white hover:bg-black rounded-lg p-2"
          >
            <FaLinkedin size="2.5rem" />
          </a>
          <a 
            href={Bio.twitter} 
            target="_blank" 
            rel="noopener noreferrer"
            className="ml-4 text-[#be1adb] font-medium transition-all duration-600 hover:text-white hover:bg-black rounded-full p-2"
          >
            <FaTwitter size="2.5rem" />
          </a>
        </div>

        {isOpen && (
          <div 
            className="fixed top-[80px] right-0 w-full bg-[#191924] p-6 flex flex-col items-center gap-4 transition-transform duration-600 transform translate-y-0 rounded-b-lg shadow-lg z-50"
          >
            <a href="#about" onClick={() => setIsOpen(false)} className="font-medium text-white transition-colors duration-200 hover:text-[#854cE6]">About</a>
            <a href='#skills' onClick={() => setIsOpen(false)} className="font-medium text-white transition-colors duration-200 hover:text-[#854cE6]">Skills</a>
            <a href='#experience' onClick={() => setIsOpen(false)} className="font-medium text-white transition-colors duration-200 hover:text-[#854cE6]">Experience</a>
            <a href='#projects' onClick={() => setIsOpen(false)} className="font-medium text-white transition-colors duration-200 hover:text-[#854cE6]">Projects</a>
            <a href='#education' onClick={() => setIsOpen(false)} className="font-medium text-white transition-colors duration-200 hover:text-[#854cE6]">Education</a>
            <div className="flex gap-4 mt-4">
              <a 
                href={Bio.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#be1adb] font-medium transition-all duration-600 hover:text-white hover:bg-[#be1adb] rounded-full p-2"
              >
                <FaGithub size="2.5rem" />
              </a>
              <a 
                href={Bio.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#be1adb] font-medium transition-all duration-600 hover:text-white hover:bg-[#be1adb] rounded-full p-2"
              >
                <FaLinkedin size="2.5rem" />
              </a>
              <a 
                href={Bio.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#be1adb] font-medium transition-all duration-600 hover:text-white hover:bg-[#be1adb] rounded-full p-2"
              >
                <FaTwitter size="2.5rem" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
