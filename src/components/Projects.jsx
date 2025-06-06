import React from "react";

// const projects = [
//   {
//     title: "Job Portal App",
//     image: "/photo.jpg",
//     description: "A platform for job seekers and recruiters to connect in real time.",
//     tech: ["React", "Node.js", "MongoDB","Express js " ,"Tailwind"],
//     link: "https://job-portal-1-ygct.onrender.com/ ",
//     github: "https://github.com/Anant1sharma/Job-Portal.git"
//   },
//   {
//     title: "Pinterest Clone ",
//     // image: "/Pinterest.jpg",
//     description: "A platform for job seekers and recruiters to connect in real time.",
//     tech: ["React", "Node.js", "MongoDB","Express js ","Tailwind"],
//     link: "https://pinterest-clone-1-dca2.onrender.com' ",
//     github: "https://github.com/Anant1sharma/Pinterest-Clone-Project.gitt"
//   },
//   {
//     title: "Healthcare Dashboard",
//     image: "https://via.placeholder.com/400x200.png?text=Healthcare+Dashboard",
//     description: "A responsive dashboard UI for managing patients and reports.",
//     tech: ["React", "Tailwind", "Chart.js"],
//     link: "https://github.com/Anant1sharma/Healthcare-Dashboard.git",
//     github: "https://github.com/Anant1sharma/Healthcare-Dashboard.gi"
//   },
const projects = [
  
  {
    title: "Job Portal",
    image: "/assets/JobPortal.jpeg", // use your second image
    description: "A full-stack Job Portal web application built with the MERN stack, enabling users to apply for jobs, manage profiles, and allowing recruiters to post and manage listings..",
    tech: ["React", "Tailwind", " MongoDb" ,"Express JS", "Node Js"],
    link: "https://job-portal-1-ygct.onrender.com",
    github: "https://github.com/Anant1sharma/Job-Portal.git",
  },
  
  {
    title: "Pinterest Clone",
    image: "/assets/Pinterest.jpg", // example - use a third image if available
    description: "A MERN stack-based Pinterest Clone that allows users to upload, delete photos, and engage with posts through a dynamic commenting system..",
    tech: ["React", "Node.js", "MongoDB", " Express js"],
    link: "https://pinterest-clone-1-dca2.onrender.com/",
    github: "https://github.com/Anant1sharma/Pinterest-Clone-Project.git",
  },

  {
    title: " Food Delivery Clone ",
    image: "/assets/FoodDelivery.png",
    description: "A responsive React.js-based Food Delivery Clone featuring dynamic menus, cart functionality, and smooth user interactions for a seamless ordering experience..",
    tech: ["React", "Tailwind", "Chart.js"],
    link: "https://food-delivery-app-clone-wine.vercel.app/",
    github: "https://github.com/Anant1sharma/Food-Delivery-app-clone.git"
  },
  {
    title: "Student Management System",
    image: "/assets/sms.png",
    description: "A React-based Student Management System using Context API for state management, enabling efficient student record handling, updates, and real-time data flow without external libraries.",
    tech: ["React", "Redux", "Use Context"],
    link: "https://studentmanagement-system.vercel.app/",
    github: "https://github.com/Anant1sharma/StudentmanagementSystem.git"
  },
  {
    title: "Healthcare Dashboard",
    image: "/assets/Healthcare.png", // replace with your real image
    description: "A static, fully responsive Healthcare Dashboard built with React.js, showcasing key health metrics through visually engaging UI components and modern design.",
    tech: ["React", "Tailwind", "Chart.js"],
    link: "https://healthcare-dashboard-beta-gilt.vercel.app/",
    github: "https://github.com/Anant1sharma/Healthcare-Dashboard.git",
  }
  
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#0d0d0d] text-white py-16 px-6 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold underline decoration-blue-500">PROJECTS</h2>
        <p className="mt-4 text-gray-300 max-w-xl mx-auto">
          Some of the projects I’ve built using modern technologies
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
<div
  key={index}
  className="bg-zinc-900 rounded-2xl p-6 shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-teal-500/20"
>
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-48 object-cover transition-transform duration-300"
  />
  <div className="p-6">
    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
    <p className="text-gray-400 text-sm mb-4">{project.description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {project.tech.map((tech, idx) => (
        <span key={idx} className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">
          {tech}
        </span>
      ))}
    </div>
    <div className="flex justify-between items-center text-sm">
      <a href={project.link} target="_blank" className="text-blue-400 hover:underline">
        Live Demo
      </a>
      <a href={project.github} target="_blank" className="text-gray-400 hover:underline">
        GitHub
      </a>
    </div>
  </div>
</div>
 ))}
      </div>
    </section>
  );
};

export default Projects;
