import React, { useState, Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Totem from '../models/totem';
import { useSpring, animated } from '@react-spring/web';
import sky from '../models/sky'
import Sky from '../models/sky';
           

const Home = () => {
    const [isRotating, setIsRotating] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const checkMobile = () => {
          setIsMobile(window.innerWidth < 768);
      };
      
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
  }, []);

    // Animation for text overlay
    const textAnimation = useSpring({
      from: { opacity: 0, transform: 'translateY(-50px)' },
      to: { opacity: 1, transform: 'translateY(0)' },
      config: { duration: 1000 },
  });

  const adjustTotemForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0.3, -4, 4];
    let rotation = [-0.2, 6.3, 0];

    if(window.innerWidth < 768) {
      screenScale = [2, 0.9, 0.9];
    } else {
      screenScale = [6, 6, 6];
    }

    return [screenScale, screenPosition, rotation]
  }

  const [totemScale, totemPosition, rotation] = adjustTotemForScreenSize();

  return (
    
    <section className='w-full h-screen relative'>
  
  <Canvas 
className={`w-full h-full bg-black
    ${isRotating ?
        'cursor-grabbing' : 'cursor-grab'
    }`}
  camera={{near: 1, far: 1000}}
  >
    <Suspense fallback={<Loader/>}>
        
{/* {<Sky />} */}

    <Totem 
    position = {totemPosition}
    scale = {totemScale}
    rotation = {rotation}
    isRotating = {isRotating}
    setIsRotating = {setIsRotating}
    />
    
    </Suspense>
  </Canvas>
<animated.div 
              style={textAnimation} 
              className={`absolute z-10 ${
                  isMobile ? 'bottom-10 left-5 right-5' : 'top-72 left-10'
              }`}
          >
              <div className="relative">
                  <h1 className="text-5xl font-bold text-white mb-2">EPIC CREATIONS</h1>
                  <h2 className="absolute text-3xl font-semibold text-green-400 -bottom-4 left-40">Await</h2>
              </div>
          </animated.div>
          <animated.div 
              style={textAnimation} 
              className={`absolute z-10 flex flex-col items-start ${
                  isMobile ? 'bottom-10 left-5 right-5' : 'bottom-4 right-2'
              }`}
          >
              <p className="text-sm text-white mt-4 max-w-md">
                  We design and develop software and games that captivate and inspire
              </p>
          </animated.div>
          
    </section>
  )
}

export default Home
