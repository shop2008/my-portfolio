import React from "react";

export default function Skills() {
  const skills = [
    "Android",
    "iOS",
    "Flutter",
    "Java",
    "React",
    "Node.js",
    "MongoDB",
    "MySQL",
  ];

  return (
    <section id="skills" className="max-w-4xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-semibold mb-6 text-primary">Skills</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-gray-700 text-primary px-3 py-1 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
