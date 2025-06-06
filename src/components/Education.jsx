// components/EducationSection.jsx
// components/EducationSection.jsx
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Chandigarh Group of Colleges",
    year: "2021 - 2025",
  },
  {
    degree: "Senior Secondary (XII)",
    institution: "Asha Modern School",
    year: "2019 - 2021",
  },
  {
    degree: "Secondary (X)",
    institution: "Hari International Academy",
    year: "2017 - 2019",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Education</h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-2xl p-6 shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-teal-500/20"
            >
              <div className="flex items-center mb-4">
                <GraduationCap className="text-teal-400 w-6 h-6 mr-3" />
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
              </div>
              <p className="text-zinc-400">{edu.institution}</p>
              <p className="text-zinc-500 text-sm mt-2">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
