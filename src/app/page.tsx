import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import ChatbotButton from "../components/ChatbotButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background to-background/70">
      <Navigation />
      <Hero />
      <div className="max-w-6xl mx-auto px-4 space-y-24">
        <About />
        <Experience />
        <Projects />
        <Skills />
      </div>
      <Contact />
      <ChatbotButton />
    </main>
  );
}
