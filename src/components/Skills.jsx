
import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJs,
  FaReact,
  FaAngular,
  FaNodeJs,
  FaBootstrap,
  FaMagic, // used instead of GSAP
} from "react-icons/fa";

import {
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  SiSpringboot,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";

const skills = {
  frontend: [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <FaSass />, name: "SASS" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React JS" },
    { icon: <FaAngular />, name: "Angular" },
    { icon: <SiRedux />, name: "Redux" },
    { icon: <SiNextdotjs />, name: "Next JS" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaMagic />, name: "GSAP" }, // Replaced SiGsap
    { icon: <FaBootstrap />, name: "Bootstrap" },
  ],
  backend: [
    { icon: <SiSpringboot />, name: "Springboot" },
    { icon: <FaNodeJs />, name: "Node JS" },
    { icon: <SiExpress />, name: "Express JS" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="bg-[#0d0d0d] text-white py-16 px-6 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold underline decoration-blue-500">SKILLS</h2>
        <p className="mt-4 text-gray-300 max-w-xl mx-auto">
          A collection of my technical skills and expertise honed through various projects and experiences
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Frontend Skills */}
        <div className="bg-[#1a1a1a] rounded-2xl p-6 shadow-lg border border-gray-700">
          <h3 className="text-2xl font-semibold mb-4">Frontend</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {skills.frontend.map((skill, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center bg-[#262626] hover:bg-[#333] p-4 rounded-xl transition"
              >
                <div className="text-3xl text-blue-400">{skill.icon}</div>
                <span className="mt-2 text-sm text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Skills */}
        <div className="bg-[#1a1a1a] rounded-2xl p-6 shadow-lg border border-gray-700">
          <h3 className="text-2xl font-semibold mb-4">Backend</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {skills.backend.map((skill, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center bg-[#262626] hover:bg-[#333] p-4 rounded-xl transition"
              >
                <div className="text-3xl text-green-400">{skill.icon}</div>
                <span className="mt-2 text-sm text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
