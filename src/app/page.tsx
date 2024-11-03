"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import ChatbotButton from "../components/ChatbotButton";
import FloatingContact from "../components/FloatingContact";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS

const Skills = dynamic(() => import("../components/Skills"), { ssr: false });

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-background to-background/70">
      <Navigation />
      <Hero />
      <div className="max-w-6xl mx-auto px-4 space-y-24">
        <About />
        <Projects />
        <Experience />
        <Skills />
      </div>
      <Contact />
      <ChatbotButton />
      <FloatingContact />
    </main>
  );
}
