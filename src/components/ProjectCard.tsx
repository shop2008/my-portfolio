"use client";

import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  githubLink: string;
  technologies: string[];
  category: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  link,
  githubLink,
  technologies,
  category,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row justify-between items-center relative"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative w-full md:w-1/2 aspect-video md:aspect-auto md:h-96"
      >
        <Image
          src={image}
          alt={`${title} - Project Screenshot`}
          layout="fill"
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full md:w-3/5 flex flex-col justify-between md:absolute md:right-0 md:bottom-0"
      >
        <h3 className="text-primary text-sm text-right">{category}</h3>
        <h3 className="text-2xl font-semibold text-white mt-2 text-right">
          {title}
        </h3>
        <motion.p
          whileHover={{
            boxShadow: "0 0 10px 0px rgba(255, 105, 180, 0.3)",
            transition: { duration: 0.3 },
          }}
          className="bg-gray-800 rounded-lg text-gray-300 mt-4 p-6"
        >
          {description}
        </motion.p>
        <div className="flex flex-wrap gap-2 my-4 justify-end">
          {technologies.map((tech, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.1 }}
              className="bg-gray-700 text-primary px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </motion.span>
          ))}
        </div>
        <div className="flex gap-4 justify-end">
          <motion.a
            whileHover={{ scale: 1.2 }}
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-primary transition-colors"
          >
            <FaGithub size={24} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-primary transition-colors"
          >
            <FaExternalLinkAlt size={20} />
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}
