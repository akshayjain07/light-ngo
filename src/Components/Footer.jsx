import React from 'react';
// import { FaInstagram, FaFacebook, FaLinkedin, FaXTwitter } from 'react-icons/fa'; // Import the necessary icons from react-icons
import { close } from '../assets';
const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex items-center justify-center space-x-6">
          <span className="hidden md:block w-16 border-t border-gray-500"></span>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <img src={close} alt="Light Raipur Logo" className="w-9 h-9 object-contain" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <img src={close} alt="Light Raipur Logo" className="w-9 h-9 object-contain" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <img src={close} alt="Light Raipur Logo" className="w-9 h-9 object-contain" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <img src={close} alt="Light Raipur Logo" className="w-9 h-9 object-contain" />
            </a>
          <span className="hidden md:block w-16 border-t border-gray-500"></span>
        </div>
        <p className="text-white text-[15px] font-bold mt-4 text-center">Light Raipur</p>
        <p className="text-gray-100 text-[10px] text-sm text-center">Copyright © Light Raipur Web Team 2024</p>
        <a href="/privacy-policy" className="text-yellow-400 mt-2 text-sm hover:underline">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
