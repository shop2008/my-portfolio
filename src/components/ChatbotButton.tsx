"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  FaComments,
  FaTimes,
  FaPaperPlane,
  FaRobot,
  FaUser,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  text: string;
  sender: "user" | "bot";
}

const predefinedResponses: { [key: string]: string } = {
  hello: "Hello! I'm Gigi's AI assistant. How can I help you today?",
  hi: "Hi there! What would you like to know about Gigi Wang?",
  projects:
    "Gigi has worked on several projects including Movie Maestro (a movie recommendation app), Future Seeds (a non-profit organization website), Cupertino Shop (a Flutter shopping app), and DaoDao (an Android native instant messaging app). You can find more details in the Projects section of her portfolio.",
  skills:
    "Gigi's key skills include Android, iOS, Flutter, React, Next.js, Node.js, MongoDB, MySQL, Tailwind CSS, Bootstrap, Git, CI/CD, AWS, Azure, and Firebase. Is there a specific technology you'd like to know more about?",
  contact:
    "You can reach Gigi via email at gigiwangjob@gmail.com or connect with her on LinkedIn. The links are available in the Contact section of her portfolio.",
  experience:
    "Gigi has extensive experience in both mobile and web development. She has worked as a Senior Mobile Software Engineer at companies like Hillinsight, Mingma Technologies, and Elex Technology. Her portfolio showcases various projects that demonstrate her skills and expertise.",
  education:
    "Gigi has a strong educational background in computer science and software engineering. She continuously updates her skills through online courses and industry certifications.",
  languages:
    "Gigi is proficient in programming languages such as Java, Kotlin, Swift, Dart (Flutter), JavaScript, and TypeScript.",
  availability:
    "Gigi is currently open to new opportunities and collaborations in full-stack and mobile development roles. Feel free to reach out via the contact information provided in her portfolio.",
  github:
    "You can find Gigi's GitHub profile with some of her open-source contributions and personal projects at https://github.com/shop2008. The link is also available in the Contact section of her portfolio.",
  background:
    "Gigi Wang is a Full Stack & Mobile Developer with over 10 years of experience in the tech industry. She has a strong background in Android, iOS, and web development, with a focus on creating user-friendly and efficient applications.",
  default:
    "I'm sorry, I didn't quite understand that. Could you please ask about Gigi's projects, skills, experience, education, or contact information?",
};

export default function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! How can I help you today?", sender: "bot" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    const newUserMessage: Message = { text: inputValue, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setInputValue("");
    setIsTyping(true);

    // Improved bot response logic
    setTimeout(() => {
      const lowercaseInput = inputValue.toLowerCase();
      let botResponse = predefinedResponses.default;
      const matchedKeys = Object.keys(predefinedResponses).filter(
        (key) => lowercaseInput.includes(key) && key !== "default"
      );

      if (matchedKeys.length > 0) {
        botResponse = matchedKeys
          .map((key) => predefinedResponses[key])
          .join(" ");
      }

      setIsTyping(false);
      const newBotMessage: Message = { text: botResponse, sender: "bot" };
      setMessages((prevMessages) => [...prevMessages, newBotMessage]);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <motion.button
        onClick={toggleChat}
        className="fixed bottom-5 right-5 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-secondary transition-colors z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open chat"
      >
        <FaComments size={24} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.3 }}
            transition={{ type: "spring", damping: 25, stiffness: 500 }}
            className="fixed bottom-20 right-5 w-96 h-[32rem] bg-gray-100 rounded-lg shadow-xl overflow-hidden z-50"
          >
            <div className="bg-primary text-white p-4 flex justify-between items-center">
              <h3 className="font-semibold">Chat with Gigi&apos;s Bot</h3>
              <button
                onClick={toggleChat}
                className="hover:text-gray-200 transition-colors"
                aria-label="Close chat"
              >
                <FaTimes />
              </button>
            </div>
            <div className="h-[24rem] overflow-y-auto p-4 bg-white custom-scrollbar">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`mb-4 flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.sender === "bot" && (
                    <FaRobot className="text-primary mr-2 mt-1" />
                  )}
                  <div
                    className={`max-w-[70%] p-3 rounded-lg ${
                      message.sender === "user"
                        ? "bg-primary text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {message.text}
                  </div>
                  {message.sender === "user" && (
                    <FaUser className="text-primary ml-2 mt-1" />
                  )}
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center text-gray-500"
                >
                  <FaRobot className="text-primary mr-2" />
                  <span className="typing-indicator"></span>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <div className="p-4 border-t bg-white">
              <div className="flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-grow p-2 rounded-l border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary text-black"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-primary text-white p-2 rounded-r hover:bg-secondary transition-colors ml-2"
                  aria-label="Send message"
                >
                  <FaPaperPlane />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
