"use client";

import React from "react";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-20">
      <h2
        data-aos="fade-down"
        className="text-heading-2 font-bold mb-16 text-primary text-center"
      >
        About Me
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-16">
        <div data-aos="fade-right" className="md:w-1/3 flex justify-center">
          <div className="w-72 h-72 rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 relative glow-effect">
            <Image
              src="/profile-photo.jpg"
              alt="Gigi Wang"
              width={288}
              height={288}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div data-aos="fade-left" className="md:w-2/3">
          <p className="text-body-large text-text mb-8 font-light">
            I&apos;m passionate about web, mobile, and fullstack development.
            With a keen eye for design and a love for cutting-edge technologies,
            I create engaging and responsive digital experiences that leave a
            lasting impression.
          </p>
          <p className="text-body-large text-text font-light">
            My journey in tech has led me through various roles, from Mobile
            development to fullstack web applications. I thrive on challenges
            and continuously seek to expand my skillset to stay at the forefront
            of the ever-evolving tech landscape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
