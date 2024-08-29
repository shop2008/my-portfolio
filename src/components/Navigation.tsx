"use client";

import { useState, useEffect } from "react";

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
      className={`fixed top-0 left-0 right-0 bg-gradient-to-br from-gray-900 to-transparent transition-transform duration-300 z-50 ${
        isVisible ? "translate-y-0 animate-fade-in" : "-translate-y-full"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="text-2xl font-bold text-purple-400">
            GiGi
          </a>
          <ul className="flex space-x-6">
            {["About", "Experience", "Projects", "Skills", "Contact"].map(
              (item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="cursor-pointer hover:text-purple-400 transition-colors"
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
