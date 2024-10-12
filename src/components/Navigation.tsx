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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (!isMobile) {
          if (window.scrollY > lastScrollY) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }
        } else {
          setIsVisible(true); // Always visible on mobile
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== "undefined") {
      handleResize(); // Initial check
      window.addEventListener("scroll", controlNavbar);
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [lastScrollY, isMobile]);

  if (!mounted) return null;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 backdrop-blur-md transition-transform duration-300 z-50 ${
        isVisible ? "translate-y-0 animate-fade-in" : "-translate-y-full"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a
            href="#"
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
            aria-label="GiGiTech home"
          >
            GiGiTech
          </a>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text focus:outline-none"
              aria-expanded={isMenuOpen}
              aria-controls="main-menu"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          <ul
            id="main-menu"
            className={`flex-col md:flex-row md:flex absolute md:static bg-background/90 md:bg-transparent w-full md:w-auto left-0 top-16 md:top-0 transition-all duration-300 ${
              isMenuOpen ? "flex flex-col items-center py-4" : "hidden"
            } md:space-y-0 md:space-x-2`}
            role="menu"
          >
            {["About", "Experience", "Projects", "Skills", "Contact"].map(
              (item) => (
                <li
                  key={item}
                  className="w-full md:w-auto text-center"
                  role="none"
                >
                  <button
                    onClick={() => {
                      scrollToSection(item.toLowerCase());
                      setIsMenuOpen(false);
                    }}
                    className={`w-auto md:w-auto py-2 px-4 my-1 md:my-0 cursor-pointer transition-all duration-300 rounded-full ${
                      item === "Contact"
                        ? "text-background bg-primary hover:bg-secondary shadow-md hover:shadow-lg"
                        : "text-text hover:text-primary"
                    }`}
                    role="menuitem"
                  >
                    <span className="font-medium">{item}</span>
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
