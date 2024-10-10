"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-heading-1 mb-6 text-primary"
          id="hero-heading"
        >
          Hi, I&apos;m Gigi Wang
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <p className="text-heading-3 font-semibold text-secondary">
            Web Developer | Mobile Developer | Fullstack Developer
          </p>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-body-large text-text max-w-2xl mx-auto mb-12"
        >
          Crafting innovative digital solutions with cutting-edge technologies
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
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
        </motion.div>
      </div>
    </section>
  );
}
