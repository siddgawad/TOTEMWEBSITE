import React from 'react';

const JoinOurTribeBanner = () => {
  return (
    <div className="relative p-6 sm:p-8 text-center overflow-hidden">
      <div className="relative z-10 bg-[#02c503] border-t-4 border-b-4 border-black py-6 sm:py-8 rounded-t-lg">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">JOIN OUR TRIBE</h2>
        <p className="mb-6 max-w-xl sm:max-w-2xl mx-auto">
          Are you driven by innovation and creativity? Totem Interactive is always looking for talented individuals ready to push digital boundaries. Join our team and help shape the future of digital experiences.
        </p>
        <button className="bg-black text-white px-6 py-2 w-full sm:w-auto font-semibold hover:bg-gray-800 transition-colors">
          Explore Career Opportunities
        </button>
      </div>
      <div className="absolute inset-0 bg-repeat-x bg-center top-0 left-0 w-full h-full" style={{ backgroundImage: 'url(/path-to-your-scalloped-border-image.png)' }}></div>
    </div>
  );
};

export default JoinOurTribeBanner;
