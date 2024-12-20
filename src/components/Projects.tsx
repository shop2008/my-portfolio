import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Winsun Group",
    description: (
      <>
        A dynamic business website with integrated CMS for Winsun Group. Built
        with <span className="text-primary">Next.js</span> and{" "}
        <span className="text-primary">Sanity.io</span>, enabling content
        editors to manage website content through an intuitive studio interface.
        Features include real-time preview, structured content modeling.
        Implemented <span className="text-primary">TypeScript</span> for robust
        type safety and <span className="text-primary">Tailwind CSS</span> for
        responsive design. The system supports media management and seamless
        content updates without developer intervention.
      </>
    ),
    image: "/winsun.jpg",
    phoneImage: "",
    link: "https://www.winsungroup.ca/",
    githubLink: "",
    technologies: ["Next.js", "Sanity.io", "TypeScript", "Tailwind CSS"],
    category: "Web Application",
  },
  {
    title: "Movie Maestro",
    description: (
      <>
        A movie recommendation app that helps users discover movies tailored to
        their preferences. It&apos;s built using{" "}
        <span className="text-primary">React</span> for the frontend and{" "}
        <span className="text-primary">Node.js</span> for the backend, and is
        powered by <span className="text-primary">Gemini API</span> for content
        generation. The project is fully deployed using{" "}
        <span className="text-primary">Firebase Hosting</span> for the frontend,{" "}
        <span className="text-primary">Firebase Functions</span> for the
        backend.
      </>
    ),
    image: "/movie-maestro.jpg",
    phoneImage: "/movie-maestro-phone.jpg",
    link: "https://movierecommender-b4395.web.app",
    githubLink: "https://github.com/shop2008/movie-recommendation-app",
    technologies: ["React", "Firebase", "Gemini API"],
    category: "Web Application",
  },
  {
    title: "Future Seeds",
    description: (
      <>
        A responsive website for a non-profit organization focused on helping
        children in need. Built with <span className="text-primary">HTML</span>,{" "}
        <span className="text-primary">CSS</span>, and vanilla{" "}
        <span className="text-primary">JavaScript</span>. The SPA architecture
        was implemented without any frameworks, demonstrating proficiency in
        core web technologies. Features include a donation system, project
        galleries, and volunteer sign-up forms.{" "}
      </>
    ),
    image: "/future-seeds.jpg",
    phoneImage: "/future-seeds-phone.jpg",
    link: "https://shop2008.github.io/future-seeds/index.html",
    githubLink: "https://github.com/shop2008/future-seeds",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    category: "Web Application",
  },
  {
    title: "Cupertino Shop",
    description:
      "A cross-platform shopping app using Flutter with Cupertino widgets for an iOS-like experience.",
    image: "/cupertino-store.jpg",
    phoneImage: "/cupertino-store-phone.jpg",
    link: "https://github.com/shop2008/flutter_shop_cupertino",
    githubLink: "https://github.com/shop2008/flutter_shop_cupertino",
    technologies: ["Flutter", "Cupertino", "Firebase"],
    category: "Mobile Application",
  },
  // {
  //   title: "DaoDao",
  //   description:
  //     "An Android native instant messaging app with real-time voice calls, featuring secure communication and a user-friendly interface.",
  //   image: "/daodao.jpg",
  //   phoneImage: "/daodao-phone.jpg",
  //   link: "https://github.com/shop2008/#",
  //   githubLink: "https://github.com/shop2008/#",
  //   technologies: ["Android", "Kotlin", "Agora", "Singnal"],
  //   category: "Mobile Application",
  // },
];

export default function Projects() {
  return (
    <section id="projects" className="py-0">
      <h2 className="text-heading-2 font-semibold mb-6 text-primary">
        Projects
      </h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description as string}
            image={project.image}
            phoneImage={project.phoneImage}
            link={project.link}
            githubLink={project.githubLink}
            technologies={project.technologies}
            category={project.category}
            reversed={index % 2 != 0}
          />
        ))}
      </div>
    </section>
  );
}
