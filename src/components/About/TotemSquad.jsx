import React, { useRef, useEffect } from 'react';
import { ArrowUpCircle } from 'lucide-react';
import heroicon from '../../assets/aboutassets/aboutimage.png';

const TotemSquad = ({ cards }) => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      const container = scrollContainerRef.current;
      if (container) {
        if (
          (container.scrollTop === 0 && e.deltaY < 0) ||
          (container.scrollHeight - container.clientHeight <= container.scrollTop && e.deltaY > 0)
        ) {
          e.preventDefault();
        }
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row bg-[#000e00] text-white p-8 pt-16">
      {/* Description Section */}
      <div className="w-full md:w-1/3 md:pr-8 mb-8 md:mb-0">
        <h1 className="text-4xl font-bold mb-4">TOTEM'S SQUAD</h1>
        <p className="mb-6">
        At Totem Interactive, our culture is built on innovation and execution. We’re not just creators; we’re a collective that turns visionary ideas into reality, constantly pushing the limits of what can be achieved.  </p>
        <img src={heroicon} alt="Totem Interactive Logo" className="w-24 h-24" />
      </div>

      {/* Card Section */}
      <div className="w-full md:w-2/3 relative">
        <div
          ref={scrollContainerRef}
          className="h-[400px] md:h-[500px] overflow-y-scroll mx-auto md:mx-0 grid grid-cols-2 md:grid-cols-2 gap-2 md:pr-2"
          style={{ maxWidth: '900px' }}
        >
          {cards.map((card, index) => (
            <div key={index} className="bg-[#000e00] rounded-lg shadow-lg relative">
              <img
                src={card.image}
                alt={card.name}
                className="w-full h-full object-cover rounded mb-4"
              />
            </div>
          ))}
        </div>
        {/* <button
          onClick={() => scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' })}
          className="absolute bottom-4 right-4 bg-blue-500 p-2 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
        >
          <ArrowUpCircle size={24} />
        </button> */}
      </div>
    </div>
  );
};

export default TotemSquad;