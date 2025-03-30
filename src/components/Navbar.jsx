import React from 'react';

const Navbar = () => {
  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="p-5 h-16 bg-[#00171F] text-white font-[Poppins] text-xl fixed top-0 w-full z-50">
      <div className="grid grid-cols-2">
        <div className="ml-14 font-bold text-2xl">Portfolio</div>
        <div className="flex gap-5 justify-end mr-10">
          <ul className="cursor-pointer hover:underline" onClick={() => handleScroll('home')}>Home</ul>
          <ul className="cursor-pointer hover:underline" onClick={() => handleScroll('about')}>About</ul>
          <ul className="cursor-pointer hover:underline" onClick={() => handleScroll('skills')}>Skills</ul>
          <ul className="cursor-pointer hover:underline" onClick={() => handleScroll('projects')}>Projects</ul>
          <ul className="cursor-pointer hover:underline" onClick={() => handleScroll('contact')}>Contact Me</ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
