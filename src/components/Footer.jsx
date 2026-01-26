import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0D0D0D] text-gray-500 py-16 px-6 relative border-t-2 border-emerald-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          
          {/* Bold Branding */}
          <div className="text-center md:text-left space-y-2">
            <h2 className="text-white text-3xl font-black tracking-tighter uppercase">
              ATHARVA <span className="text-emerald-500">GOURSHETE.</span>
            </h2>
          </div>

          {/* Heavy Navigation */}
          <div className="flex justify-center gap-6 flex-wrap">
            {["home", "about", "skills", "projects", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => handleScroll(section)}
                className="text-[11px] font-black uppercase text-gray-500 hover:text-emerald-400 transition-colors duration-300 relative group cursor-pointer"
              >
                {section}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-emerald-500 transition-all group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* High-Contrast Socials */}
          <div className="flex justify-center md:justify-end gap-4">
            <button
              onClick={() => handleScroll("home")}
              className="cursor-pointer p-3 bg-emerald-500 text-black rounded-xl hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)]"
            >
              <ArrowUp size={20} strokeWidth={3} />
            </button>
          </div>
        </div>

        {/* Final Metadata Line */}
        <div className="mt-16 pt-8 border-t border-white/5 flex justify-center md:flex-row items-center gap-4 text-[10px] font-mono font-black uppercase tracking-widest text-gray-700">
          <p className="text-sm">© {new Date().getFullYear()} Atharva Gourshete. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;