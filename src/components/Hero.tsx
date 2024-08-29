"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
        >
          Hi! I'm <span className="text-purple-400">Gigi Wang</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300">
            Web Developer | Mobile Developer | Fullstack Developer
          </p>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-12"
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
            className="bg-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-600 transition-colors"
          >
            View My Projects
          </a>
          <a
            href="#contact"
            className="bg-transparent border-2 border-purple-700 text-purple-400 px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 hover:text-white transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
