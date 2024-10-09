import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Movie Recommendation App",
    description:
      "A React-based app with Firebase backend, using Gemini API for personalized movie suggestions.",
    image: "/project2.jpg",
    link: "https://github.com/shop2008/movie-recommendation-app",
  },
  {
    title: "Flutter Shop Cupertino",
    description:
      "A cross-platform shopping app using Flutter with Cupertino widgets for an iOS-like experience.",
    image: "/project1.jpg",
    link: "https://github.com/shop2008/flutter_shop_cupertino",
  },
  {
    title: "Little Lemon",
    description:
      "A Django-based web application for a restaurant, showcasing menu items and reservations.",
    image: "/little-lemon.jpg",
    link: "https://github.com/shop2008/littleLemon",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-heading-2 font-semibold mb-6 text-primary">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}
