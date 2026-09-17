import React, { useState, useEffect } from "react";
import akramLogo from "../assets/akramlogo.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Timeline", href: "#timeline" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape and on resize up to desktop
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);

    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-3.5 sm:py-5 flex items-center justify-between">
        {/* LOGO */}
        <a href="#home" className="flex items-center gap-2 sm:gap-3 min-w-0">
          <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-[0.15em] sm:tracking-widest">
            Akram
          </span>

          <img
            src={akramLogo}
            alt=""
            className="w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10 object-contain flex-shrink-0"
          />

          <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#8b1e3f] tracking-[0.15em] sm:tracking-widest">
            ANOU
          </span>
        </a>

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex gap-7 lg:gap-10 text-[13px] lg:text-sm uppercase tracking-wider">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative group hover:text-[#8b1e3f] duration-300"
              >
                {link.label}
                <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-[#8b1e3f] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* BURGER */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden relative w-10 h-10 -mr-2 flex flex-col items-center justify-center gap-[5px]"
        >
          <span
            className="block h-[2px] w-6 bg-white transition-all duration-300"
            style={{
              transform: open ? "translateY(7px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block h-[2px] w-6 bg-white transition-all duration-300"
            style={{ opacity: open ? 0 : 1 }}
          />
          <span
            className="block h-[2px] w-6 bg-white transition-all duration-300"
            style={{
              transform: open ? "translateY(-7px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </div>

      {/* MOBILE DRAWER */}
      <div
        className={`
          md:hidden overflow-hidden
          border-t border-white/10
          bg-black/80 backdrop-blur-xl
          transition-[max-height,opacity] duration-400 ease-out
          ${open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <ul className="px-5 py-3">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="
                  block py-3.5
                  text-sm uppercase tracking-[3px] text-white/70
                  border-b border-white/5 last:border-0
                  active:text-[#8b1e3f]
                "
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
