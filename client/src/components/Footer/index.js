import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Bio } from '../../data/constants';

const Footer = () => {
  return (
    <div className="w-full py-8 text-white flex flex-col items-center clip-path-custom3 ">
      <div className="w-full max-w-4xl flex flex-col items-center gap-4 px-4">
        <h1 className="text-2xl font-semibold text-primary">Souvik Ghosh</h1>
        <div className="flex gap-4 mt-4">
          <a href={Bio.facebook} target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-blue-600 transition-colors">
            <FacebookIcon />
          </a>
          <a href={Bio.twitter} target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-blue-400 transition-colors">
            <TwitterIcon />
          </a>
          <a href={Bio.linkedin} target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-blue-700 transition-colors">
            <LinkedInIcon />
          </a>
          <a href={Bio.insta} target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-pink-500 transition-colors">
            <InstagramIcon />
          </a>
        </div>
        <p className="mt-4 text-gray-400 text-sm text-center">
          &copy; 2024 Souvik Ghosh. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
