import React from 'react';
import { Canvas } from '@react-three/fiber';
import Shape from '../components/bubble';

const Image = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 flex justify-center sm:block mt-5 sm:mt-0">
        <div className="w-40 sm:w-full h-40 sm:h-full relative z-0">
          <Canvas className="w-full h-full sm:scale-100 scale-75 transform origin-center">
            <Shape />
          </Canvas>
        </div>
      </div>

      {/* Clickable Image */}
      <div className="absolute z-10 inset-0 flex justify-center sm:mt-[200px] mt-5 pb-12">
        <a
          href="https://www.example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="hero1.png"
            alt="Hero"
            className="w-40 sm:w-[358px] md:w-[410px] lg:w-[200px] xl:w-[370px] sm: md: xl:mb-[120px] object-contain transition-transform duration-300"
          />
        </a>
      </div>
    </div>
  );
};

export default Image;
