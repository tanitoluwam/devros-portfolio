"use client"

import React, { useState } from "react";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navItems = [
  { name: "Domů", id: "home" },
  { name: "Front-end skills", id: "frontend" },
  { name: "Back-end skills", id: "backend" },
  { name: "Portfolio", id: "portfolio" },
  { name: "Kontakt", id: "kontakt" },
];

const CustomNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-transparent pt-8 px-10 flex justify-between items-center relative">
      <div className="flex items-center">
        <div className="flex-shrink-0 mr-4">
          <Image src="/images/logo.png" width={130} height={130} alt="logo" />
        </div>
        {isMenuOpen && (
          <button
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
            className="text-white absolute top-0 right-0 mt-2 mr-2 sm:hidden"
          >
            <CloseIcon />
          </button>
        )}
      </div>

      <button
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`text-white sm:hidden ml-auto ${isMenuOpen ? "hidden" : "block"}`}
      >
        <MenuIcon />
      </button>

      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full pt-10 pb-5 bg-[#000] z-50 flex flex-col items-center justify-center sm:hidden">
          <button
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
            className="text-white absolute top-0 right-0 mt-2 mr-2"
          >
            <CloseIcon />
          </button>
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavClick(item.id)}
              className="text-white hover:text-gray-400 focus:text-gray-400 transition-colors text-md block mb-2 border-b border-[#444444] pb-3 pt-3 w-full"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}

      
      <div className="hidden sm:flex">
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={() => handleNavClick(item.id)}
            className="text-white hover:text-gray-400 focus:text-gray-400 transition-colors text-md px-4"
          >
            {item.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default CustomNavbar;
