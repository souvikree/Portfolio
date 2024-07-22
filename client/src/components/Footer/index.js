import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Bio } from '../../data/constants';

const Footer = () => {
  return (
    <footer className="w-full py-10 text-white flex flex-col items-center bg-gradient-to-tl from-gray-900 via-gray-800 to-gray-700">
      <div className="w-full max-w-4xl flex flex-col items-center gap-4 px-4">
        <h1 className="text-3xl font-semibold text-primary">Souvik Ghosh</h1>
        <p className="mt-2 text-gray-400 text-center text-sm max-w-md">
          Passionate developer with experience in web and mobile applications. Connect with me on social media!
        </p>
        <div className="flex gap-6 mt-6">
          <a href={Bio.facebook} target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-blue-600 transition-colors duration-300">
            <FacebookIcon fontSize="inherit" />
          </a>
          <a href={Bio.twitter} target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-blue-400 transition-colors duration-300">
            <TwitterIcon fontSize="inherit" />
          </a>
          <a href={Bio.insta} target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-pink-500 transition-colors duration-300">
            <InstagramIcon fontSize="inherit" />
          </a>
        </div>
        <p className="mt-6 text-gray-400 text-sm text-center">
          &copy; 2024 Souvik Ghosh. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
