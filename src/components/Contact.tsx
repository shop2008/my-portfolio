"use client";
import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaSpinner,
  FaCheckCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus("Email sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer id="contact" className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-heading-2 font-semibold mb-8 text-primary text-center"
        >
          Get in Touch
        </motion.h2>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="mb-8 space-y-4"
        >
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 bg-gray-800 border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-text"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 bg-gray-800 border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-text"
            placeholder="Your Email"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 bg-gray-800 border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-text"
            rows={4}
            placeholder="Type your message here..."
            required
          />
          <motion.button
            type="submit"
            className="w-full bg-primary text-background px-6 py-3 rounded-md hover:bg-secondary transition-colors duration-300 font-semibold flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isLoading}
          >
            {isLoading ? (
              <FaSpinner className="animate-spin mr-2" />
            ) : status ? (
              <FaCheckCircle className="mr-2" />
            ) : null}
            {isLoading ? "Sending..." : status ? status : "Send Message"}
          </motion.button>
        </motion.form>
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center space-x-8 list-none p-0"
        >
          <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <a
              href="mailto:gigiwangjob@gmail.com"
              className="text-primary hover:text-secondary transition-colors duration-300"
              aria-label="Email Gigi Wang"
            >
              <FaEnvelope size={28} aria-hidden="true" />
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <a
              href="https://www.linkedin.com/in/gigi-wang-tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary transition-colors duration-300"
              aria-label="Gigi Wang's LinkedIn profile"
            >
              <FaLinkedin size={28} aria-hidden="true" />
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <a
              href="https://github.com/shop2008"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary transition-colors duration-300"
              aria-label="Gigi Wang's GitHub profile"
            >
              <FaGithub size={28} aria-hidden="true" />
            </a>
          </motion.li>
        </motion.ul>
      </div>
    </footer>
  );
}
