import React from 'react';
import image1 from '../../assets/aboutassets/image1.png'
import image2 from '../../assets/aboutassets/image2.png'
import image3 from '../../assets/aboutassets/image3.png'
import image4 from '../../assets/aboutassets/image4.png'
import image5 from '../../assets/aboutassets/image5.png'
import image6 from '../../assets/aboutassets/image6.png'
import image7 from '../../assets/aboutassets/image7.png'
import smiley from '../../assets/SmileyFlower.png'
import banner from '../../assets/aboutassets/banner.png'
import TotemSquad from './TotemSquad';
import rish from '../../assets/aboutassets/team/rish.png'
import tammy from '../../assets/aboutassets/team/tammy.png'
import JoinOurTribeBanner from './AboutBanner';
import arm from '../../assets/aboutassets/team/arman.png'
import gogo from '../../assets/aboutassets/team/muku.png'
import button from '../../assets/aboutassets/button.png'
import ResponsiveImageGallery from './ResponsiveImageGallery';

const cards = [
  {
    name: 'Card 1',
    image: rish,
  },
  {
    name: 'Card 1',
    image: tammy,
  },
  {
    name: 'Card 1',
    image: arm,
  },
  {
    name: 'Card 1',
    image: gogo,
  },
  {
    name: 'Card 1',
    image: tammy,
  },
  {
    name: 'Card 1',
    image: tammy,
  },
  {
    name: 'Card 1',
    image: tammy,
  },
  {
    name: 'Card 1',
    image: tammy,
  },
  // Add more cards here
];


const AboutUsEntry = () => {
  return (
    <div className="w-full bg-[#000e00] text-white font-['Exo 2'] relative min-h-screen">
    {/* Title */}
    <h1 className="absolute left-1/2 transform -translate-x-1/2 top-20 md:top-16 lg:top-20 text-[20px] md:text-[40px] lg:text-[50px] font-semibold uppercase text-center">
      Crafting Tomorrow, Today
    </h1>
  
    {/* Subtitle */}
    <div className="absolute left-8 top-52 md:left-12 md:top-48 lg:left-16 lg:top-40">
      <p className="text-s font-medium font-['Inter']">This time we are</p>
      <p className="mt-4 text-[15px] md:text-[22px] lg:text-[26px] font-normal leading-tight">
        Coming in <br />stronger &<br />stronger
      </p>
    </div>
  
    {/* Watch button */}
    <div className="absolute right-8 top-52 md:right-12 md:top-48 lg:right-16 lg:top-40 w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full bg-transparent flex items-center justify-center">
      <img 
        src={button} 
        alt="Watch Button" 
        className="w-full h-full object-cover rounded-full"
      />
    </div>
  
    {/* Image Gallery - Adjusted for responsiveness */}
    <div className="pt-24">
      <ResponsiveImageGallery />
    </div>

      {/* Bottom text and smiley - Adjusted margin-top */}
      <div className="w-full flex flex-col md:flex-row justify-start items-start mt-12 md:mt-[200px] pb-20">
  <div className="text-[24px] md:text-[33.20px] font-medium font-['Inter'] text-white max-w-[90%] md:max-w-[800px] ml-8 md:ml-32">
    <p>
    At Totem Interactive, we don’t just aim to follow trends—we work to create them. Our dedicated team of creatives and tech experts brings challenging ideas to life, one line of code and one pixel at a time.    </p>
  </div>
  <div className="mt-12 md:mt-32 md:-ml-12 flex justify-center md:block">
    <img
      src={smiley}
      alt="Smiley Face"
      className="w-16 h-16 md:w-20 md:h-20"
    />
  </div>
</div>


        {/* Banner */}
        <div className="w-full flex justify-center items-center mt-8 sm:mt-12 px-4 sm:px-6 lg:px-8">
  <img
    src={banner}
    alt="Banner"
    className="w-full max-w-[1350px] sm:max-w-full object-cover rounded-2xl sm:rounded-3xl"
  />
</div>
      <TotemSquad cards = {cards} />
      <div className='pt-16 pb-32'>
      <JoinOurTribeBanner />
      </div>
          </div>
  );
};

export default AboutUsEntry;