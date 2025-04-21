import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import Image from "./image";


const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>
      

      <div className="hero-layout flex flex-col md:flex-row items-center justify-between">
        {/* Image section - will appear first on mobile */}
        <div className="w-full md:w-1/2 order-1 md:order-2 mb-0">
          <Image/>
        </div>
        
        {/* Text content - will appear second on mobile */}
        <header className="flex flex-col justify-center md:w-1/2 w-full md:px-20 px-5 order-2 md:order-1 -mt-32 md:mt-0">
          <div className="flex flex-col md:gap-7 gap-2">
            <div className="hero-text">
              <h1>
              Half-Baked
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
               
              <h1>into Buggy Projects</h1>
              <h1>that Kinda Work (Sometimes)</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I'm Tejash, a developer based in Delhi with a passion for
              code.
            </p>

            <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />
          </div>
        </header>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
