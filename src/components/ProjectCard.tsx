"use client";

import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  phoneImage?: string;
  link: string;
  githubLink: string;
  technologies: string[];
  category: string;
  reversed?: boolean; // New prop for reversing layout
}

export default function ProjectCard({
  title,
  description,
  image,
  phoneImage,
  link,
  githubLink,
  technologies,
  category,
  reversed = false, // Default to false
}: ProjectCardProps) {
  return (
    <div
      data-aos="fade-up"
      className={`flex flex-col ${
        reversed ? "md:flex-row-reverse" : "md:flex-row"
      } justify-between items-center relative py-10 px-4 md:px-0`}
    >
      <div className="relative w-full md:w-1/2 aspect-video md:aspect-auto md:h-96 mb-8 md:mb-0">
        <motion.div
          data-aos="fade-up"
          whileHover={{ y: -10 }}
          className="relative w-full h-full"
        >
          <Image
            src={image}
            alt={`${title} - Project Screenshot`}
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="rounded-lg"
          />
        </motion.div>
        {phoneImage && (
          <motion.div
            data-aos="fade-up"
            whileHover={{ y: -10 }}
            className={`absolute -bottom-16 ${
              reversed ? "md:-right-16 -right-8" : "md:-left-16 -left-8"
            } w-32 md:w-40 h-64 md:h-80`}
          >
            <svg
              className="w-full h-full"
              viewBox="0 0 320 640"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0"
                y="0"
                width="320"
                height="640"
                rx="40"
                fill="#FFFFFF"
              />
              <rect
                x="8"
                y="8"
                width="304"
                height="624"
                rx="32"
                fill="#F2F2F2"
              />
            </svg>
            <div className="absolute inset-2 rounded-[16px] overflow-hidden">
              <Image
                src={phoneImage}
                alt={`${title} - Phone View`}
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
            </div>
          </motion.div>
        )}
      </div>
      <div
        data-aos={`fade-${reversed ? "right" : "left"}`}
        className={`w-full md:w-7/12 flex flex-col justify-between ${
          reversed ? "md:left-0" : "md:right-0"
        } md:absolute md:bottom-0`}
      >
        <h3
          className={`text-primary text-sm ${
            reversed ? "text-left" : "text-right"
          }`}
        >
          {category}
        </h3>
        <h3
          className={`text-xl md:text-2xl font-semibold text-white mt-2 ${
            reversed ? "text-left" : "text-right"
          }`}
        >
          {title}
        </h3>
        <motion.p
          whileHover={{
            boxShadow: "0 0 10px 0px rgba(255, 105, 180, 0.3)",
            transition: { duration: 0.3 },
          }}
          className="bg-gray-800 rounded-lg text-gray-300 mt-4 p-4 md:p-6 text-sm md:text-base"
        >
          {description}
        </motion.p>
        <div
          className={`flex flex-wrap gap-2 my-4 justify-start ${
            reversed ? "md:justify-start" : "md:justify-end"
          }`}
        >
          {technologies.map((tech, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.1 }}
              className="bg-gray-700 text-primary px-2 md:px-3 py-1 rounded-full text-xs md:text-sm"
            >
              {tech}
            </motion.span>
          ))}
        </div>
        <div
          className={`flex gap-4 ${reversed ? "justify-start" : "justify-end"}`}
        >
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
      </div>
    </div>
  );
}
