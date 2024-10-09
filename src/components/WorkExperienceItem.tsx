import React from "react";

interface WorkExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
}

export default function WorkExperienceItem({
  title,
  company,
  period,
  description,
}: WorkExperienceItemProps) {
  return (
    <div className="mb-12 relative">
      <div className="absolute -left-10 mt-1 w-4 h-4 rounded-full bg-pink-400"></div>
      <h3 className="text-heading-3 font-semibold text-pink-200">{title}</h3>
      <p className="text-body-normal text-pink-100">{company}</p>
      <p className="text-body-normal text-pink-300 mb-2">{period}</p>
      <p className="text-body-normal text-gray-200">{description}</p>
    </div>
  );
}
