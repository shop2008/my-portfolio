import React from "react";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-24">
      <h2 className="text-4xl font-bold mb-12 text-primary text-center">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3 flex justify-center">
          <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <Image
              src="/profile-photo.jpg"
              alt="Gigi Wang"
              width={256}
              height={256}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="md:w-2/3">
          <p className="text-xl leading-relaxed text-text mb-6">
            I&apos;m passionate about web, mobile, and fullstack development.
            With a keen eye for design and a love for cutting-edge technologies,
            I create engaging and responsive digital experiences that leave a
            lasting impression.
          </p>
          <p className="text-xl leading-relaxed text-text">
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
