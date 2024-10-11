import React from "react";

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Gigi Wang",
    jobTitle: "Full Stack & Mobile Developer",
    url: "https://www.gigitech.me",
    sameAs: [
      "https://www.linkedin.com/in/gigi-wang-tech/",
      "https://github.com/shop2008",
    ],
    skills: [
      "Android",
      "iOS",
      "Flutter",
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "MySQL",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;
