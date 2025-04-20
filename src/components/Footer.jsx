import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#00171F] text-gray-400 p-6 md:p-10 font-[Poppins]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center text-center lg:text-left">
        
        {/* Brand Name */}
        <div className="text-white text-2xl md:text-3xl font-bold">
          <span className="text-gray-400 text-sm">All rights reserved by</span>
          <br />
          &copy;Atharva Gourshete
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-5 md:gap-10">
          <ul className="cursor-pointer hover:underline" onClick={() => handleScroll('home')}>Home</ul>
          <ul className="cursor-pointer hover:underline" onClick={() => handleScroll('about')}>About</ul>
          <ul className="cursor-pointer hover:underline" onClick={() => handleScroll('skills')}>Skills</ul>
          <ul className="cursor-pointer hover:underline" onClick={() => handleScroll('projects')}>Projects</ul>
          <ul className="cursor-pointer hover:underline" onClick={() => handleScroll('contact')}>Contact Me</ul>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center lg:justify-end gap-5">
          <Link to={"https://www.linkedin.com/in/atharva-gourshete-b2a66927b/"}>
            <img src="./linkedin(2).png" height={20} width={20} alt="LinkedIn"/>
          </Link>
          <Link to={"https://github.com/AtharvaGGourshete"}>
            <img src="./github.png" height={23} width={23} alt="GitHub"/>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Footer;
