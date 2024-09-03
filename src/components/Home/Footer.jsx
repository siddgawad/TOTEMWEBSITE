import React from 'react';
import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import logo from '../../assets/logo.png';


const Footer = () => {
  return (
    <footer className="bg-[#000e00] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Logo and Company Name */}
          <div className="mb-8 md:mb-0 md:w-1/4">
            <div className="flex items-center">
              <img src={logo} alt="Totem Interactive Logo" className="h-10 w-10 mr-3" />
              <h2 className="text-xl font-bold">Totem Interactive</h2>
            </div>
          </div>

          {/* Our Services and Social Icons */}
          <div className="mb-8 md:mb-0 md:w-1/8">
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 mb-6">
              <li>Saas</li>
              <li>Game Development</li>
              <li>Web Design & Development</li>
              <li>VFX</li>
              <li>Design Consultancy</li>
              <li>AR/VR</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <FaTwitter className="h-6 w-6" />
              <FaInstagram className="h-6 w-6" />
              <FaYoutube className="h-6 w-6" />
              <FaLinkedin className="h-6 w-6" />
            </div>
          </div>

          {/* Explore */}
          <div className="md:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>About us</li>
              <li>Services</li>
              <li>Case Studies</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;