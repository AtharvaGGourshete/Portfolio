import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="bg-[#00171F] text-gray-400 p-10 h-40 font-[Poppins]">
      <div className="grid grid-cols-3 items-center ">
        <div className="text-white text-3xl font-bold mb-10">
          <span className="text-gray-400 text-sm">All rights reserved by</span>
          <br />
          Atharva Gourshete
        </div>
        <div className="flex gap-10 justify-center">
          <ul className="cursor-pointer hover:underline" onClick={() => handleScroll('home')}>Home</ul>
          <ul className="cursor-pointer hover:underline" onClick={() => handleScroll('about')}>About</ul>
          <ul className="cursor-pointer hover:underline" onClick={() => handleScroll('skills')}>Skills</ul>
          <ul className="cursor-pointer hover:underline" onClick={() => handleScroll('projects')}>Projects</ul>
          <ul className="cursor-pointer hover:underline" onClick={() => handleScroll('contact')}>Contact Me</ul>
        </div>
        <div className="flex justify-center gap-5">
          <Link to={"https://www.linkedin.com/in/atharva-gourshete-b2a66927b/"}>
          
          <div className="cursor-pointer hover:underline flex"><img src="./linkedin(2).png" height={20} width={20}/></div></Link>
          <Link to={"https://github.com/AtharvaGGourshete"}><div className="cursor-pointer hover:underline flex"><img src="./github.png" height={23} width={23}/></div></Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
