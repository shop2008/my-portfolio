"use client";

import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const FloatingContact: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <motion.div
      className="fixed bottom-4 left-4 flex flex-col space-y-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.a
        href="mailto:gigiwangjob@gmail.com"
        className="bg-background text-primary p-2 rounded-full hover:text-secondary transition-colors duration-300"
        title="Email"
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaEnvelope size={24} />
      </motion.a>
      <motion.a
        href="https://www.linkedin.com/in/gigi-wang-tech/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-background text-primary p-2 rounded-full hover:text-secondary transition-colors duration-300"
        title="LinkedIn"
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaLinkedin size={24} />
      </motion.a>
      <motion.a
        href="https://github.com/shop2008"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-background text-primary p-2 rounded-full hover:text-secondary transition-colors duration-300"
        title="GitHub"
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaGithub size={24} />
      </motion.a>
    </motion.div>
  );
};

export default FloatingContact;
