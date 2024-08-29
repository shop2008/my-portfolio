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
  hello: "Hello! How can I assist you today?",
  hi: "Hi there! What would you like to know about Gigi?",
  projects:
    "I have worked on several projects including a Movie Recommendation App, Flutter Shop Cupertino, and Little Lemon. You can find more details in the Projects section of my portfolio.",
  skills:
    "My key skills include Android, iOS, Flutter, Java, React, Node.js, MongoDB, and MySQL. Is there a specific technology you&apos;d like to know more about?",
  contact:
    "You can reach me via email at gigiwangjob@gmail.com or connect with me on LinkedIn. The links are available in the Contact section of my portfolio.",
  experience:
    "I have experience in both mobile and web development, with a focus on creating user-friendly and efficient applications. My portfolio showcases various projects that demonstrate my skills and expertise.",
  hobbies:
    "When I&apos;m not coding, I enjoy hiking, reading tech blogs, and participating in hackathons. I find these activities help me stay creative and inspired in my work.",
  availability:
    "I&apos;m currently open to new opportunities and collaborations. Feel free to reach out via the contact information provided in my portfolio.",
  github:
    "You can find my GitHub profile with some of my open-source contributions and personal projects. The link is available in the Contact section of my portfolio.",
  default:
    "I&apos;m sorry, I didn&apos;t quite understand that. Could you please rephrase or ask about my projects, skills, experience, education, or contact information?",
};

export default function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! How can I help you today?", sender: "bot" },
  ]);
  const [inputValue, setInputValue] = useState("");
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

    // Simple bot response logic
    setTimeout(() => {
      const lowercaseInput = inputValue.toLowerCase();
      let botResponse = predefinedResponses.default;
      for (const key in predefinedResponses) {
        if (lowercaseInput.includes(key)) {
          botResponse = predefinedResponses[key];
          break;
        }
      }
      const newBotMessage: Message = { text: botResponse, sender: "bot" };
      setMessages((prevMessages) => [...prevMessages, newBotMessage]);
    }, 1000);
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
      <button
        onClick={toggleChat}
        className="fixed bottom-5 right-5 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition-colors z-50"
        aria-label="Open chat"
      >
        <FaComments size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-20 right-5 w-96 h-[28rem] bg-gray-100 rounded-lg shadow-xl overflow-hidden z-50"
          >
            <div className="bg-purple-600 text-white p-4 flex justify-between items-center">
              <h3 className="font-semibold">Chat with Gigi&apos;s Bot</h3>
              <button
                onClick={toggleChat}
                aria-label="Close chat"
                className="hover:text-gray-200"
              >
                <FaTimes />
              </button>
            </div>
            <div className="h-[20rem] overflow-y-auto p-4 bg-white">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.sender === "bot" && (
                    <FaRobot className="text-purple-600 mr-2 mt-1" />
                  )}
                  <div
                    className={`max-w-[70%] p-3 rounded-lg ${
                      message.sender === "user"
                        ? "bg-purple-600 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {message.text}
                  </div>
                  {message.sender === "user" && (
                    <FaUser className="text-purple-600 ml-2 mt-1" />
                  )}
                </div>
              ))}
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
                  className="flex-grow p-2 rounded-l border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 text-black"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-purple-600 text-white p-2 rounded-r hover:bg-purple-700 transition-colors ml-2"
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
