"use client";
import React, { useState } from "react";
import WorkExperienceItem from "./WorkExperienceItem";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const workExperiences = [
  {
    title: "Senior Mobile Software Engineer",
    company: "Hillinsight Co, Beijing China",
    period: "March 2020 - July 2023",
    description:
      "Drove the development and maintenance of a cutting-edge Instant Messaging (IM) Android application for business use. Led the overhaul of the Continuous Integration (CI) system based on GitLab, enhancing overall development productivity.",
  },
  {
    title: "Senior Mobile Software Engineer",
    company: "Mingma Technologies Co, Beijing China",
    period: "September 2018 - March 2020",
    description:
      "Contributed to the design and implementation of innovative Android applications and websites tailored for the health industry.",
  },
  {
    title: "Senior Mobile Software Engineer",
    company: "Elex Technology Co, Beijing China",
    period: "September 2017 - August 2018",
    description:
      "Implemented a robust Instant Messaging (IM) module tailored for game(Clash Of Kings) on the Android system, fostering enhanced communication within gaming communities.",
  },
  {
    title: "Mobile Software Engineer",
    company: "Changba Tech Co, Beijing China",
    period: "April 2015 - June 2017",
    description:
      "Contributed to the design and implementation of features aimed at enhancing communication capabilities and overall user experience within the Android application for Changba App.",
  },
  {
    title: "Mobile Software Engineer",
    company: "Hoolai Games, Beijing China",
    period: "October 2013 - March 2015",
    description:
      "Played a pivotal role in the development of a groundbreaking Android application from inception to launch, resulting in the acquisition of over 100,000 users.",
  },
];

const ITEMS_PER_PAGE = 3;

export default function Experience() {
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);

  const showMore = () => {
    setVisibleItems((prevVisible) =>
      Math.min(prevVisible + ITEMS_PER_PAGE, workExperiences.length)
    );
  };

  return (
    <section id="experience" className="max-w-4xl mx-auto px-4 py-20">
      <h2 className="text-heading-2 font-semibold mb-12 text-primary text-center">
        Work Experience
      </h2>
      <div className="relative border-l-2 border-primary pl-8 ml-4">
        {workExperiences.slice(0, visibleItems).map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <WorkExperienceItem
              title={experience.title}
              company={experience.company}
              period={experience.period}
              description={experience.description}
            />
          </motion.div>
        ))}
      </div>
      {visibleItems < workExperiences.length && (
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.button
            onClick={showMore}
            className="group bg-primary hover:bg-secondary text-background font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-primary/50 flex items-center justify-center mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Show More
            <motion.span
              className="ml-2 inline-block"
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <FaChevronDown />
            </motion.span>
          </motion.button>
        </motion.div>
      )}
    </section>
  );
}
