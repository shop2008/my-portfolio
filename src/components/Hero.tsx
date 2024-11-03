"use client";

import React from "react";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1
          data-aos="fade-down"
          className="text-heading-1 mb-6 text-primary"
          id="hero-heading"
        >
          Hi, I&apos;m Gigi Wang
        </h1>
        <div data-aos="fade-up" className="mb-8">
          <p className="text-heading-3 font-semibold text-secondary">
            Web Developer | Mobile Developer | Fullstack Developer
          </p>
        </div>
        <p
          data-aos="fade-up"
          className="text-body-large text-text max-w-2xl mx-auto mb-12"
        >
          Crafting innovative digital solutions with cutting-edge technologies
        </p>
        <div
          data-aos="fade-up"
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <a
            href="#projects"
            className="bg-primary text-background px-8 py-3 rounded-full text-body-normal font-semibold hover:bg-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            aria-label="View My Projects"
          >
            View My Projects
          </a>
          <a
            href="#contact"
            className="bg-transparent border-2 border-primary text-primary px-8 py-3 rounded-full text-body-normal font-semibold hover:bg-primary hover:text-background transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            aria-label="Get in Touch"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
