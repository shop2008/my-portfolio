"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  link,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-pink-500/20 transition-all duration-300"
      onClick={() => window.open(link, "_blank")}
    >
      <Image
        src={image}
        alt={title}
        width={500}
        height={300}
        className="w-full h-48 object-contain"
        loading="lazy"
      />
      <div className="p-6">
        <h3 className="text-heading-3 font-semibold mb-2 text-primary">
          {title}
        </h3>
        <p className="text-body-normal text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
}
