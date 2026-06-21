import React from "react";
import akramLogo from "../assets/akramlogo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold text-[#fffff] tracking-widest">
            Akram
          </h1>
          <img
            src={akramLogo}
            alt="Logo"
            className="w-10 h-10 object-contain"
          />

          <h1 className="text-3xl font-bold text-[#8b1e3f] tracking-widest">
            ANOU
          </h1>
        </div>

        {/* NAV LINKS */}
        <ul className="hidden md:flex gap-10 text-sm uppercase tracking-wider">
          <li>
            <a
              href="#home"
              className="relative group hover:text-[#8b1e3f] duration-300"
            >
              Home
              <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-[#8b1e3f] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="relative group hover:text-[#8b1e3f] duration-300"
            >
              About
              <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-[#8b1e3f] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="relative group hover:text-[#8b1e3f] duration-300"
            >
              Skills
              <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-[#8b1e3f] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="relative group hover:text-[#8b1e3f] duration-300"
            >
              Projects
              <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-[#8b1e3f] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="relative group hover:text-[#8b1e3f] duration-300"
            >
              Contact
              <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-[#8b1e3f] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
