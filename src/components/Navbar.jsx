import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Close menu on click
  };

  return (
    <nav className="p-5 h-16 bg-[#00171F] text-white font-[Poppins] text-xl fixed top-0 w-full z-50">
      <div className="flex justify-between items-center mx-5 md:mx-14">
        
        {/* Logo */}
        <div className="font-bold text-2xl">Portfolio</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-5">
          <ul className="cursor-pointer hover:underline" onClick={() => handleScroll('home')}>Home</ul>
          <ul className="cursor-pointer hover:underline" onClick={() => handleScroll('about')}>About</ul>
          <ul className="cursor-pointer hover:underline" onClick={() => handleScroll('skills')}>Skills</ul>
          <ul className="cursor-pointer hover:underline" onClick={() => handleScroll('projects')}>Projects</ul>
          <ul className="cursor-pointer hover:underline" onClick={() => handleScroll('contact')}>Contact Me</ul>
        </div>

        {/* Hamburger Button */}
        <button 
          className="md:hidden flex items-center text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-16 left-0 w-full bg-[#00171F] transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <ul className="flex flex-col items-center gap-5 py-5">
          <li className="cursor-pointer hover:underline" onClick={() => handleScroll('home')}>Home</li>
          <li className="cursor-pointer hover:underline" onClick={() => handleScroll('about')}>About</li>
          <li className="cursor-pointer hover:underline" onClick={() => handleScroll('skills')}>Skills</li>
          <li className="cursor-pointer hover:underline" onClick={() => handleScroll('projects')}>Projects</li>
          
          <li className="cursor-pointer hover:underline" onClick={() => handleScroll('contact')}>Contact Me</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
