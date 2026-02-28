import React, { useState } from "react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDownToLine, Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const sections = ["home", "about", "skills", "projects", "certifications"];

  return (
    <motion.nav
      className="fixed top-4 left-1/2 w-[95%] max-w-7xl z-50 bg-black/80 backdrop-blur-md px-6 py-3 rounded-lg text-white text-sm"
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between">
        {/* Logo & Branding */}
        <div className="flex items-center gap-6">
          <motion.div
            className="text-xl font-bold tracking-tighter cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleScroll("home")}
          >
            Atharva<span className="text-green-400 text-extrabold">.</span>
          </motion.div>

          {/* Desktop Menu - Sliding Text Animation */}
          <div className="hidden md:flex items-center gap-6 ml-4">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => handleScroll(section)}
                className="relative overflow-hidden h-6 group text-gray-300 hover:text-white transition-colors"
              >
                <span className="cursor-pointer">
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => handleScroll("contact")}
            className="border border-slate-600 hover:bg-emerald-500 px-5 py-2 rounded-full text-sm font-medium transition duration-300 cursor-pointer"
          >
            Contact
          </button>
          <a
            href="/public/Atharva_Resume.pdf"
            className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium transition duration-300 
            shadow-[0px_0px_20px_2px_rgba(255,255,255,0.3)] cursor-pointer flex items-center gap-2 hover:bg-slate-100"
          >
            <ArrowDownToLine size={16} />
            Resume
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-gray-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden flex flex-col items-center gap-4 pt-4 pb-2"
          >
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => handleScroll(section)}
                className="text-gray-400 hover:text-white text-lg"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
            <div className="flex flex-col w-full gap-3 pt-2">
              <button className="w-full border border-slate-600 py-3 rounded-full">
                Contact
              </button>
              <a
                href="/public/Atharva_Resume(updated).pdf"
                className="w-full text-center bg-white text-black py-3 rounded-full font-bold"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
