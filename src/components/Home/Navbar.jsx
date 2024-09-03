import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import CustomIcon from '../../assets/navassets/icon1.svg';
import CustomIcon2 from '../../assets/navassets/icon2.svg';

import bg from '../../assets/Isolation_Mode.png';
import saas from '../../assets/navassets/saas.png';
import arvr1 from '../../assets/navassets/arvr1.png';
import design from '../../assets/navassets/design.png';
import game from '../../assets/navassets/game.png';
import web from '../../assets/navassets/webdesign.png';
import vfx from '../../assets/navassets/vfx.png';
import logo from '../../assets/logo.png';

const services = [
  { name: 'SaaS', image: saas, link: '/saas' },
  { name: 'Game Development', image: game, link: '/game' },
  { name: 'Web Design & Development', image: design, link: '/web' },
  { name: 'VFX', image: vfx, link: '/vfx' },
  { name: 'Design Consultancy', image: web, link: '/design' },
  { name: 'AR/VR', image: arvr1, link: '/ar-vr' },
];

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const toggleNav = (section) => {
    setActiveSection(section);
    setNavOpen(!navOpen);
  };

  return (
    <div className="font-['Exo 2']">
      {/* Transparent Navbar */}
      <nav className="fixed top-1 w-full flex justify-between items-center p-4 sm:p-6 md:p-8 bg-transparent z-20">
        <div className="flex items-center">
          {/* Logo */}
          <button onClick={() => toggleNav('/')} className="text-white">
          <img src={logo} alt="Logo" className="h-8 sm:h-10" />
          </button>
        </div>
        <div className="flex space-x-2 sm:space-x-4">
          <button onClick={() => toggleNav('main')} className="text-white">
            <img src={CustomIcon2} alt="Custom Icon" className="h-5 sm:h-6" />
          </button>
          <button onClick={() => toggleNav('services')} className="text-white">
            <img src={CustomIcon} alt="Custom Icon" className="h-5 sm:h-6" />
          </button>
        </div>
      </nav>

      {/* Full-screen Navigation Overlay */}
      {navOpen && (
        <div className="fixed inset-0 bg-[#000e00] z-30 flex">
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none bg-cover bg-center"
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: 'cover',
            }}
          />
          <button onClick={() => toggleNav(null)} className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 text-white z-40">
            <FiX size={24} className="sm:h-8 md:h-10" />
          </button>
          {activeSection === 'main' && (
            <div className="flex flex-col sm:flex-row w-full p-8 sm:p-12 md:p-16">
              <div className="w-full sm:w-1/2 mb-8 sm:mb-0">
                <h2 className="text-[#979797] text-base sm:text-lg font-medium mb-6 sm:mb-8">SITEMAP</h2>
                <ul className="text-white space-y-4 sm:space-y-6">
                  <li className="text-2xl sm:text-3xl md:text-[42px] font-semibold">          <a href="/about" className="hover:text-white transition-colors duration-200">ABOUT</a>
                  </li>
                  <li className="text-2xl sm:text-3xl md:text-[42px] font-semibold"><a href="/services">OUR SERVICES</a></li>
                  {/* <li className="text-2xl sm:text-3xl md:text-[42px] font-semibold"><a href="/case-studies">CASE STUDIES</a></li> */}
                  <li className="text-2xl sm:text-3xl md:text-[42px] font-semibold"><a href="/contact">CONTACT</a></li>
                  <li className="text-2xl sm:text-3xl md:text-[42px] font-semibold"><a href="#articles">ARTICLES</a></li>
                  <li className="text-2xl sm:text-3xl md:text-[42px] font-semibold"><a href="/join">CAREERS</a></li>
                </ul>
              </div>
              <div className="w-full sm:w-1/2 flex flex-col justify-between">
                <div>
                  <h2 className="text-[#979797] text-base sm:text-lg font-medium mb-4">OTHER</h2>
                  <ul className="text-[#d5d5d5] text-xl sm:text-2xl md:text-[26px] font-medium space-y-4 sm:space-y-6">
                    <li><a href="#faqs">FAQs</a></li>
                    <li><a href="#media">Media</a></li>
                    <li><a href="#privacy">Privacy Policy</a></li>
                  </ul>
                </div>
                <div className="mt-8 sm:mt-0">
                  <h2 className="text-[#979797] text-base sm:text-lg font-medium mb-4">Socials</h2>
                  <ul className="text-[#d5d5d5] text-xl sm:text-2xl md:text-[26px] font-medium space-y-2">
                    <li><a href="https://www.linkedin.com/company/totem-interactive/">LinkedIn</a></li>
                    <li><a href="https://www.instagram.com/totem.interactive/">Instagram</a></li>
                    <li><a href="#facebook">Facebook</a></li>
                    <li><a href="#twitter">Twitter</a></li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          {activeSection === 'services' && (
            <div className="w-full p-4 sm:p-8 md:p-12 lg:p-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {services.map((service, index) => (
                <a 
                  key={index} 
                  href={service.link} 
                  className="relative border border-gray-700 rounded-lg overflow-hidden flex items-center justify-center group hover:border-white"
                >
                  <div className="aspect-w-1 aspect-h-1 w-full">
                    <div className="relative w-full h-full">
                      <h3 className="absolute inset-0 flex items-center justify-center text-white text-lg sm:text-xl md:text-2xl font-semibold z-10 p-4">
                        {service.name}
                      </h3>
                      <div 
                        className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ backgroundImage: `url(${service.image})` }}
                      />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}