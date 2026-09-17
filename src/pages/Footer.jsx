import React from "react";

const Footer = () => {
  return (
    <footer
      className="
        w-full border-t border-white/10
        px-5 sm:px-8
        py-6 sm:py-8
        text-center text-xs sm:text-sm text-gray-500
      "
    >
      <p className="max-w-2xl mx-auto leading-relaxed">
        © {new Date().getFullYear()} Akram Anou — All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
