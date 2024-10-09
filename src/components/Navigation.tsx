"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for hamburger and close buttons

function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Navigation() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  useEffect(() => {
    setMounted(true);

    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY) {
          // if scroll down hide the navbar
          setIsVisible(false);
        } else {
          // if scroll up show the navbar
          setIsVisible(true);
        }

        // remember current page location to use in the next move
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  if (!mounted) return null;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 backdrop-blur-md transition-transform duration-300 z-50 ${
        isVisible ? "translate-y-0 animate-fade-in" : "-translate-y-full"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a
            href="#"
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
          >
            GiGiTech
          </a>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text focus:outline-none"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          <ul
            className={`flex-col md:flex-row md:flex absolute md:static bg-background/90 md:bg-transparent w-full md:w-auto left-0 top-16 md:top-0 transition-all duration-300 ${
              isMenuOpen ? "flex flex-col items-center py-4" : "hidden"
            } md:space-y-0 md:space-x-5`}
          >
            {["About", "Experience", "Projects", "Skills", "Contact"].map(
              (item) => (
                <li key={item} className="text-center md:text-left">
                  <button
                    onClick={() => {
                      scrollToSection(item.toLowerCase());
                      setIsMenuOpen(false);
                    }}
                    className="block py-2 md:py-0 cursor-pointer text-text hover:text-primary transition-colors"
                  >
                    {item}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
