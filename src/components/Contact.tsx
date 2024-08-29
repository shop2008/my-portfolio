import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <footer id="contact" className="bg-gray-900 py-10">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6 text-purple-400">
          Get in Touch
        </h2>
        <div className="flex space-x-6">
          <a
            href="mailto:gigiwangjob@gmail.com"
            className="text-purple-300 hover:text-purple-400 transition-colors"
          >
            <FaEnvelope size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/gigi-wang-a4168a6b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300 hover:text-purple-400 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/shop2008"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300 hover:text-purple-400 transition-colors"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
