"use client";

import React from "react";
import Image from "next/image";

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
    <div
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2"
      onClick={() => window.open(link, "_blank")}
    >
      <Image
        src={image}
        alt={title}
        width={500}
        height={300}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-purple-400">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}
