import React from 'react';
import team from '../../assets/join/team.png'

const CareersSections = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between bg-[#02c503] rounded-bl-[150px] px-8 py-12 sm:px-10 sm:py-16 md:h-96">
      {/* Text */}
      <div className="text-black text-center md:text-left mb-8 md:mb-0 md:ml-64 md:mt-16">
        <h1 className="text-3xl sm:text-4xl font-bold">CAREERS</h1>
        <h2 className="text-xl sm:text-2xl mt-2">@ TOTEM INTERACTIVE</h2>
        <p className="mt-4 max-w-md mx-auto md:mx-0">
          Ready to join a team that values creativity as much as you do? Explore our open positions,
          and let's create something amazing together.
        </p>
      </div>

      {/* Image */}
      <div className="relative md:absolute md:right-60 md:bottom-8 transform md:translate-x-1/4 md:translate-y-1/4">
        <img
          src={team}
          alt="Team"
          className="w-64 h-64 sm:w-80 sm:h-80 object-fit rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}

export default CareersSections;