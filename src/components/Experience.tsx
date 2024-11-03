"use client";
import React, { useState } from "react";
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
    <section id="experience" className="max-w-4xl mx-auto px-4">
      <h2
        className="text-heading-2 font-semibold mb-12 text-primary text-center"
        data-aos="fade-up"
      >
        Work Experience
      </h2>
      <div className="flex flex-col md:flex-row">
        <div
          className="md:w-1/4 border-r border-gray-300 pr-4"
          data-aos="fade-right"
        >
          {workExperiences.map((experience, index) => (
            <div
              key={index}
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
            </div>
          ))}
        </div>
        <div className="md:w-3/4 pl-8" data-aos="fade-left">
          <div
            key={selectedExperience.company}
            className="opacity-0 transition-opacity duration-300"
            style={{ opacity: 1 }}
          >
            <h3 className="text-xl font-bold text-primary">
              {selectedExperience.title} @{" "}
              {selectedExperience.company.split(",")[1]}
            </h3>
            <p className="text-gray-500 mb-4">{selectedExperience.period}</p>
            <div
              className="overflow-hidden"
              style={{ height: expandedDescription ? "auto" : "100px" }}
            >
              <ul className="list-disc pl-5 space-y-2">
                {selectedExperience.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            {selectedExperience.description.length > 1 && (
              <button
                onClick={() => setExpandedDescription(!expandedDescription)}
                className="mt-4 text-primary flex items-center"
              >
                {expandedDescription ? "Show Less" : "Show More"}
                <div
                  style={{
                    transform: expandedDescription
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  }}
                  className="transition-transform duration-300"
                >
                  <FaChevronDown className="ml-2" />
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
