"use client";

import React, { useEffect, useState, useRef } from "react";

const NAV_SECTIONS = ["#home", "#about", "#services"];

function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const activeSectionRef = useRef(activeSection);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  // Sin dependencias para que solo se monte una vez
  useEffect(() => {
    // Actualiza activeSection y su ref
    const updateActiveSectionState = (section: string) => {
      if (section !== activeSectionRef.current) {
        setActiveSection(section);
        activeSectionRef.current = section;
      }
    };

    // Actualiza la sección activa según el hash (click en enlaces)
    const updateActiveSectionFromHash = () => {
      updateActiveSectionState(window.location.hash);
    };

    updateActiveSectionFromHash();
    window.addEventListener("hashchange", updateActiveSectionFromHash);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 0) return;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY.current = currentScrollY;

      let currentSection = "";

      for (const id of NAV_SECTIONS) {
        const el = document.querySelector(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const offset = window.innerHeight * 0.3;
          if (rect.top <= offset && rect.bottom >= offset) {
            currentSection = id;
            break;
          }
        }
      }

      if (currentSection) {
        updateActiveSectionState(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("hashchange", updateActiveSectionFromHash);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Solo una vez

  const getLinkClass = (href: string) => {
    return `${activeSection === href ? "flex" : "hidden"}`;
  };

  return (
    <div
      className={`
        fixed top-0 left-0 right-0 z-50
        flex items-center justify-between h-16 w-full bg-black px-8 py-6 font-bold text-md
        transition-transform duration-300 ease-in-out
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <span className="text-white">UGC</span>

      <div className="items-center justify-center w-max h-full flex md:flex gap-3 text-white">
        <a href="#home" className="text-xs flex-col items-center justify-center">
          Inicio
          <div className={`w-full h-[1px] bg-white ${getLinkClass("#home")}`}></div>
        </a>
        <div className="h-full w-[1px] bg-white"></div>
        <a href="#about" className="text-xs flex-col items-center justify-center">
          Sobre mi
          <div className={`w-full h-[1px] bg-white ${getLinkClass("#about")}`}></div>
        </a>
        <div className="h-full w-[1px] bg-white"></div>
        <a href="#services" className="text-xs flex-col items-center justify-center">
          Servicios
          <div className={`w-full h-[1px] bg-white ${getLinkClass("#services")}`}></div>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
