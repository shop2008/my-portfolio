import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <footer id="contact" className="py-10">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-heading-2 font-semibold mb-6 text-primary">
          Get in Touch
        </h2>
        <ul className="flex space-x-6 list-none p-0">
          <li>
            <a
              href="mailto:gigiwangjob@gmail.com"
              className="text-primary hover:text-secondary transition-colors"
              aria-label="Email Gigi Wang"
            >
              <FaEnvelope size={24} aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/gigi-wang-tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary transition-colors"
              aria-label="Gigi Wang's LinkedIn profile"
            >
              <FaLinkedin size={24} aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/shop2008"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary transition-colors"
              aria-label="Gigi Wang's GitHub profile"
            >
              <FaGithub size={24} aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
