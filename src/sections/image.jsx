import React from 'react';
import { Canvas } from '@react-three/fiber';
import Shape from '../components/bubble';

const Image = () => {
  return (
    <div className="relative w-full md:h-screen h-[50vh] overflow-hidden">
      
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 flex justify-center sm:block mt-0">
        <div className="w-72 sm:w-full h-72 sm:h-full relative z-0 mt-1 sm:mt-0">
          <Canvas className="w-full h-full sm:scale-100 scale-110 transform origin-center">
            <Shape />
          </Canvas>
        </div>
      </div>

      {/* Clickable Image */}
      <div className="absolute z-10 inset-0 flex justify-center sm:mt-[100px] mt-5">
        <a
          href="https://www.example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="hero1.png"
            alt="Hero"
            className="w-40 sm:w-[358px] md:w-[410px] lg:w-[200px] xl:w-[370px] object-contain transition-transform duration-300 md:-mt-20"
          />
        </a>
      </div>
    </div>
  );
};

export default Image;
