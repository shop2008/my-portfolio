"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const workExperiences = [
  {
    title: "Senior Mobile Software Engineer",
    company: "Hillinsight, Beijing China",
    period: "March 2020 - July 2023",
    description: [
      "Drove the development and maintenance of a cutting-edge Instant Messaging (IM) Android application for business use. Led the overhaul of the Continuous Integration (CI) system based on GitLab, enhancing overall development productivity.",
    ],
  },
  {
    title: "Senior Mobile Software Engineer",
    company: "Mingma Technologies, Beijing China",
    period: "September 2018 - March 2020",
    description: [
      "Contributed to the design and implementation of innovative Android applications and websites tailored for the health industry.",
    ],
  },
  {
    title: "Senior Mobile Software Engineer",
    company: "Elex Technology, Beijing China",
    period: "September 2017 - August 2018",
    description: [
      "Implemented a robust Instant Messaging (IM) module tailored for game(Clash Of Kings) on the Android system, fostering enhanced communication within gaming communities.",
    ],
  },
  {
    title: "Mobile Software Engineer",
    company: "Changba Tech, Beijing China",
    period: "April 2015 - June 2017",
    description: [
      "Contributed to the design and implementation of features aimed at enhancing communication capabilities and overall user experience within the Android application for Changba App.",
    ],
  },
  {
    title: "Mobile Software Engineer",
    company: "Hoolai Games, Beijing China",
    period: "October 2013 - March 2015",
    description: [
      "Played a pivotal role in the development of a groundbreaking Android application from inception to launch, resulting in the acquisition of over 100,000 users.",
    ],
  },
];

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(
    workExperiences[0]
  );
  const [expandedDescription, setExpandedDescription] = useState(false);

  return (
    <section id="experience" className="max-w-4xl mx-auto px-4 py-10">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-heading-2 font-semibold mb-12 text-primary text-center"
      >
        Work Experience
      </motion.h2>
      <div className="flex flex-col md:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/4 border-r border-gray-300 pr-4"
        >
          {workExperiences.map((experience, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className={`mb-4 text-right cursor-pointer ${
                selectedExperience.company === experience.company
                  ? "text-primary"
                  : "text-gray-500"
              }`}
              onClick={() => setSelectedExperience(experience)}
            >
              <h3 className="font-semibold">
                {experience.company.split(",")[0]}
              </h3>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="md:w-3/4 pl-8"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedExperience.company}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold text-primary">
                {selectedExperience.title} @{" "}
                {selectedExperience.company.split(",")[1]}
              </h3>
              <p className="text-gray-500 mb-4">{selectedExperience.period}</p>
              <motion.div
                initial={false}
                animate={{ height: expandedDescription ? "auto" : "100px" }}
                className="overflow-hidden"
              >
                <ul className="list-disc pl-5 space-y-2">
                  {selectedExperience.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </motion.div>
              {selectedExperience.description.length > 1 && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setExpandedDescription(!expandedDescription)}
                  className="mt-4 text-primary flex items-center"
                >
                  {expandedDescription ? "Show Less" : "Show More"}
                  <motion.div
                    animate={{ rotate: expandedDescription ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown className="ml-2" />
                  </motion.div>
                </motion.button>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
