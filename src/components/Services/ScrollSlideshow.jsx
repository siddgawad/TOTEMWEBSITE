import React, { useState, useEffect, useRef } from 'react';
import saas from '../../assets/service/saas.png';
import webd from '../../assets/service/webdesign.jpg';
import game from '../../assets/service/game.png';

const slides = [
  {
    id: 1,
    title: 'Software Development',
    buttonText: 'View Our Work',
    imageUrl: saas,
    buttonLink: '/web',
  },
  {
    id: 2,
    title: 'AR/VR Applications',
    buttonText: 'Learn More',
    imageUrl: webd,
    buttonLink: '#',
  },
  {
    id: 3,
    title: 'iOS/Android App Development',
    buttonText: 'Learn More',
    imageUrl: game,
    buttonLink: '#',
  },
  {
    id: 4,
    title: 'Web Development',
    buttonText: 'View Our Work',
    imageUrl: saas,
    buttonLink: '/web',
  },
  {
    id: 5,
    title: 'Game Development',
    buttonText: 'Learn More',
    imageUrl: webd,
    buttonLink: '#',
  },
  {
    id: 6,
    title: '3D Pipeline Services',
    buttonText: 'Learn More',
    imageUrl: game,
    buttonLink: '#',
  },
  {
    id: 7,
    title: 'UI/UX Design',
    buttonText: 'Learn More',
    imageUrl: webd,
    buttonLink: '#',
  },
  {
    id: 8,
    title: 'Creative Consulting',
    buttonText: 'Learn More',
    imageUrl: game,
    buttonLink: '#',
  },
  // Add more slides as needed
];

const ScrollSlideshow = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();
      const delta = event.deltaY;
      const newPosition = scrollPosition + delta;
      const maxScroll = (slides.length - 1) * window.innerHeight;

      setScrollPosition(Math.max(0, Math.min(newPosition, maxScroll)));
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleScroll, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleScroll);
      }
    };
  }, [scrollPosition]);

  const currentIndex = Math.floor(scrollPosition / window.innerHeight);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => {
        const offset = scrollPosition - index * window.innerHeight;
        const translateY = Math.max(0, offset);
        const opacity = 1 - Math.min(1, Math.max(0, offset / window.innerHeight));

        return (
          <div
            key={slide.id}
            className="absolute inset-0 h-full w-full"
            style={{
              backgroundImage: `url(${slide.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: `translateY(${translateY}px)`,
              opacity: opacity,
              zIndex: slides.length - index,
              transition: 'transform 0.1s ease-out, opacity 0.1s ease-out',
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
              <h2 className="text-white text-4xl md:text-6xl font-bold mb-4">{slide.title}</h2>
              <a href={slide.buttonLink} className="bg-green-500 text-white px-6 py-3 rounded-full">
                {slide.buttonText}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ScrollSlideshow;