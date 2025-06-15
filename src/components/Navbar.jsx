import React, { useState } from 'react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { ArrowDownToLine } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Close menu on click
  };

  // Animation variants
  const logoVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const navLinkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    hover: { scale: 1.1, color: '#d8b4fe', transition: { duration: 0.2 } },
  };

  const hamburgerVariants = {
    closed: { rotate: 0, scale: 1 },
    open: { rotate: 90, scale: 1.1, transition: { duration: 0.3 } },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: '-100%' },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.nav
      className="p-4 h-16 bg-blue-950 text-white font-[Poppins] text-xl fixed top-0 w-full z-50 items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-3 items-center mx-5 md:mx-14">
        {/* Logo */}
        <motion.div
          className="font-bold text-2xl"
          variants={logoVariants}
          initial="hidden"
          animate="visible"
        >
          Portfolio
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          className="hidden md:flex gap-5"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
            <motion.ul
              key={section}
              className="cursor-pointer hover:underline"
              onClick={() => handleScroll(section)}
              variants={navLinkVariants}
              whileHover="hover"
            >
              {section.charAt(0).toUpperCase() + section.slice(1).replace('contact', 'Contact Me')}
            </motion.ul>
          ))}
        </motion.div>

        {/* Hamburger Button */}
        <motion.button
          className="md:hidden flex items-center text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          variants={hamburgerVariants}
          animate={menuOpen ? 'open' : 'closed'}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </motion.button>

      <Button className="ml-64 transition-transform transform hover:scale-102 cursor-pointer"><ArrowDownToLine />Download Resume</Button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden absolute top-16 left-0 w-full bg-[#00171F] transition-transform duration-300 ease-in-out`}
        initial="hidden"
        animate={menuOpen ? 'visible' : 'hidden'}
        variants={mobileMenuVariants}
      >
        <motion.ul
          className="flex flex-col items-center gap-5 py-5"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
            <motion.li
              key={section}
              className="cursor-pointer hover:underline"
              onClick={() => handleScroll(section)}
              variants={mobileLinkVariants}
            >
              {section.charAt(0).toUpperCase() + section.slice(1).replace('contact', 'Contact Me')}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;