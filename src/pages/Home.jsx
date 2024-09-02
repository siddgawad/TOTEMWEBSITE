import React, { useState, Suspense, useEffect, useRef } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { useSpring, animated, config } from '@react-spring/web';
import Loader from '../components/Home/Loader';
import Totem from '../models/totem';
import Sky from '../models/Sky';
import Navbar from '../components/Home/Navbar';
import { ChevronDown } from 'lucide-react';

const AnimatedTotem = ({ scrollProgress, ...props }) => {
  const { position, scale, rotation } = useSpring({
    position: [
      scrollProgress < 0.33 ? 3 : scrollProgress < 0.67 ? -2 : 2,
      scrollProgress < 0.33 ? -1.5 : scrollProgress < 0.67 ? 0 : -1.75,
      5 - scrollProgress * 3
    ],
    scale: [1.5, 1.5, 1.5],
    rotation: [0, Math.PI * 2 * scrollProgress, 0],
    config: { mass: 1, tension: 280, friction: 120 }
  });

  return <Totem position={position} scale={scale} rotation={rotation} {...props} />;
};

const CameraController = ({ scrollProgress }) => {
  const { camera } = useThree();
  useFrame(() => {
    camera.position.z = 5 - scrollProgress * 2;
    camera.position.x = 0 - scrollProgress;
    camera.lookAt(0, 0, 0);
  });
  return null;
};

const Home = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [navOpen, setNavOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = window.scrollY;
        const containerHeight = containerRef.current.offsetHeight;
        const windowHeight = window.innerHeight;
        const progress = Math.min(scrollPosition / (containerHeight - windowHeight), 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNavbar = () => {
    setNavOpen(!navOpen);
  };

  const animations = {
    leftOverlay: useSpring({
      left: scrollProgress < 0.33 ? '0%' : '-100%',
      config: config.slow,
    }),
    rightOverlay: useSpring({
      right: scrollProgress > 0.67 ? '0%' : '-100%',
      config: config.slow,
    }),
    content: useSpring({
      opacity: scrollProgress < 0.33 ? 1 : 0,
      transform: `translateX(${scrollProgress < 0.33 ? '0%' : '-100%'})`,
      config: config.slow,
    }),
    aboutContent: useSpring({
      opacity: scrollProgress > 0.33 && scrollProgress < 0.67 ? 1 : 0,
      transform: `translateX(${scrollProgress > 0.33 && scrollProgress < 0.67 ? '0%' : scrollProgress <= 0.33 ? '100%' : '-100%'})`,
      config: config.slow,
    }),
  };

  return (
    <>
      <Navbar navOpen={navOpen} setNavOpen={setNavOpen} />
      <div ref={containerRef} className="relative w-full min-h-[300vh] bg-black">
        <div className="sticky top-0 w-full h-screen flex overflow-hidden">
          <div className="w-full h-full p-4 md:p-8">
            <div className="w-full h-full rounded-3xl overflow-hidden border-4 border-black">
              <Canvas 
                className="w-full h-full"
                camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}
              >
                <CameraController scrollProgress={scrollProgress} />
                <Suspense fallback={<Loader />}>
                  <Sky />
                  <AnimatedTotem scrollProgress={scrollProgress} />
                </Suspense>
              </Canvas>
            </div>
          </div>

          <animated.div 
            style={animations.leftOverlay}
            className="absolute top-0 left-0 w-1/2 h-full bg-black z-10"
          />

          <animated.div 
            style={animations.rightOverlay}
            className="absolute top-0 right-0 w-full h-full bg-black z-10"
          />

          <animated.div 
            style={animations.content}
            className="absolute top-0 left-0 w-1/2 h-full flex flex-col justify-center items-start p-8 md:p-16 z-20"
          >
            <div className="w-full">
              <p className="text-sm text-white mb-2">Bringing the revolution by</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-white mb-2">
                Crafting Innovation <br/>
                from<br/>
                <span className="text-green-500">Inspiration</span>
              </h1>
              <p className="text-sm md:text-base text-white mt-4 max-w-md">
                We leverage our product-based thinking to craft service solutions for Brands & businesses
              </p>
            </div>
            <button
              onClick={toggleNavbar}
              className="mt-8 md:mt-40 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-2 transition-all duration-300 ease-in-out"
            >
              <ChevronDown size={24} />
            </button>
          </animated.div>

          <animated.div 
            style={animations.aboutContent}
            className="absolute top-0 right-0 w-1/2 h-full flex flex-col justify-center items-center p-8 md:p-16 z-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-4">Who We Are?</h2>
            <p className="text-lg md:text-xl text-white text-center">
              From gaming roots to a multi-faceted startup, we're ready to scale and drive innovation in software development.
            </p>
          </animated.div>
        </div>
      </div>
    </>
  );
};

export default Home;