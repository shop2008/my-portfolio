"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-24">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-heading-2 font-bold mb-16 text-primary text-center"
      >
        About Me
      </motion.h2>
      <div className="flex flex-col md:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/3 flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-72 h-72 rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 relative glow-effect"
          >
            <Image
              src="/profile-photo.jpg"
              alt="Gigi Wang"
              width={288}
              height={288}
              className="object-cover w-full h-full"
            />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="md:w-2/3"
        >
          <p className="text-body-large text-text mb-8 font-light">
            I&apos;m passionate about web, mobile, and fullstack development.
            With a keen eye for design and a love for cutting-edge technologies,
            I create engaging and responsive digital experiences that leave a
            lasting impression.
          </p>
          <p className="text-body-large text-text font-light">
            My journey in tech has led me through various roles, from Mobile
            development to fullstack web applications. I thrive on challenges
            and continuously seek to expand my skillset to stay at the forefront
            of the ever-evolving tech landscape.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
