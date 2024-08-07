import React, { useState, Suspense, useEffect, useRef } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { useSpring, animated, config } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import Loader from '../components/Loader';
import Totem from '../models/totem';
import Sky from '../models/Sky';

const AnimatedTotem = ({ scrollProgress, ...props }) => {
  const { position, scale } = useSpring({
    position: [0, -1.75, 5 - scrollProgress * 3],
    scale: [1.5 + scrollProgress * 0.5, 1.5 + scrollProgress * 0.5, 1.5 + scrollProgress * 0.5],
    config: { mass: 1, tension: 280, friction: 120 }
  });

  return <Totem position={position} scale={scale} {...props} />;
};

const CameraController = ({ scrollProgress }) => {
  const { camera } = useThree();
  useFrame(() => {
    camera.position.z = 5 - scrollProgress * 2;
  });
  return null;
};

const Home = () => {
    const [isRotating, setIsRotating] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const containerRef = useRef(null);
    const scrollTimeout = useRef(null);

    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: false,
    });

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);

        const handleScroll = () => {
            if (containerRef.current) {
                const scrollPosition = window.scrollY;
                const containerHeight = containerRef.current.offsetHeight;
                const windowHeight = window.innerHeight;
                const progress = Math.min(scrollPosition / (containerHeight - windowHeight), 1);
                setScrollProgress(progress);
                setIsScrolling(true);

                if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
                scrollTimeout.current = setTimeout(() => {
                    setIsScrolling(false);
                }, 150);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('resize', checkMobile);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const leftContentAnimation = useSpring({
        opacity: 1 - scrollProgress,
        transform: `translateY(${scrollProgress * 50}%) scale(${1 - scrollProgress * 0.5})`,
        config: { mass: 1, tension: 280, friction: 60 },
    });

    const rightContentAnimation = useSpring({
        width: `${66.67 + scrollProgress * 43.33}%`, // Increased to 110% at full scroll
        config: { mass: 1, tension: 280, friction: 60 },
    });

    const newTextAnimation = useSpring({
        opacity: scrollProgress,
        transform: `translateY(${(1 - scrollProgress) * 30}px)`,
        config: { mass: 1, tension: 280, friction: 60 },
    });

    return (
        <div ref={containerRef} className="relative w-full h-[200vh] bg-black">
            <div className="sticky top-0 w-full h-screen flex overflow-hidden">
                {/* Left side content */}
                <animated.div 
                    style={leftContentAnimation} 
                    className="w-full md:w-1/3 h-full flex flex-col justify-center items-start p-8 md:p-16 z-10 origin-top-left"
                >
                    {/* Your existing left side content */}
                    <div className="w-full">
                        <p className="text-sm text-white mb-4">Bringing the revolution by</p>
                        <h1 className="text-2xl md:text-4xl text-white mb-2">
                            Bridging the Gap<br/>
                            between Curators<br/>
                            <span className="text-green-500">&</span> Users
                        </h1>
                        <p className="text-sm md:text-base text-white mt-4 max-w-md">
                            From humble beginnings to a leading agency, we
                            turn ideas into epic digital experiences
                        </p>
                    </div>
                </animated.div>

                {/* Right side 3D component */}
                <animated.div 
                    style={rightContentAnimation} 
                    className="hidden md:block h-full absolute right-0 top-0 overflow-hidden"
                >
                    <div className="w-full h-full bg-gradient-to-br from-green-900 to-blue-900 rounded-l-3xl overflow-hidden">
                        <Canvas 
                            className={`w-full h-full ${isScrolling ? '' : isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
                            camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}
                            style={{ width: '110%', marginRight: '-10%' }} // Extend rendering area
                        >
                            <CameraController scrollProgress={scrollProgress} />
                            <Suspense fallback={<Loader />}>
                                <Sky />
                                <AnimatedTotem
                                    scrollProgress={scrollProgress}
                                    isRotating={isRotating && !isScrolling}
                                    setIsRotating={setIsRotating}
                                />
                            </Suspense>
                        </Canvas>
                    </div>
                </animated.div>

                {/* New text appearing on top of 3D component */}
                <animated.div 
                    style={newTextAnimation} 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-20"
                >
                    <h2 className="text-3xl md:text-5xl mb-4">About Us</h2>
                    <p className="text-lg md:text-xl max-w-xl">
                        From humble beginnings to a leading agency, we turn ideas into epic digital experiences.
                    </p>
                </animated.div>

                {/* Mobile 3D component (full screen) */}
                {isMobile && (
                    <div className="absolute inset-0 z-0">
                        <Canvas 
                            className={`w-full h-full ${isScrolling ? '' : isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
                            camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}
                            style={{ width: '110%', marginRight: '-10%' }} // Extend rendering area for mobile too
                        >
                            <CameraController scrollProgress={scrollProgress} />
                            <Suspense fallback={<Loader />}>
                                <Sky />
                                <AnimatedTotem
                                    scrollProgress={scrollProgress}
                                    isRotating={isRotating && !isScrolling}
                                    setIsRotating={setIsRotating}
                                />
                            </Suspense>
                        </Canvas>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;