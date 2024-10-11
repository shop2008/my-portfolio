"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left mb-8 md:mb-0"
        >
          <h1 className="text-heading-1 mb-6 text-primary" id="hero-heading">
            Hi, I&apos;m Gigi Wang
          </h1>
          <p className="text-heading-3 font-semibold text-secondary mb-4">
            <span className="sr-only">Specializations:</span>
            Web Developer | Mobile Developer | Fullstack Developer
          </p>
          <p className="text-body-large text-text max-w-xl mb-8">
            Crafting innovative digital solutions with cutting-edge technologies
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 flex justify-center items-center"
        >
          <div className="w-96 h-96 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <Image
              src="/hero.jpeg"
              alt="Gigi Wang - Full Stack Developer"
              width={384}
              height={384}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
