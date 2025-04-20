import { useState, useEffect } from "react";
import { socialImgs } from "../constants";

import { navLinks } from "../constants";

const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          Tejash Rajput
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-6">
  <div className="socials flex gap-4">
    {socialImgs.map((socialImg, index) => (
      <div key={index} className="icon">
        <a href={socialImg.link}>
          <img src={socialImg.imgPath} alt="social icon" />
        </a>
      </div>
    ))}
  </div>

  <a href="#contact" className="contact-btn group">
    <div className="inner">
      <span>Contact me</span>
    </div>
  </a>
</div>

       
      </div>
    </header>
  );
}

export default NavBar;
