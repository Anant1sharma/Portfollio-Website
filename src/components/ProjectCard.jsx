import React from "react";

export default function ProjectCard({ title, description, tech, link }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="mb-2">{description}</p>
      <p className="text-sm text-gray-500">Tech: {tech.join(", ")}</p>
      <a href={link} className="text-blue-600 mt-2 block" target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  );
}
