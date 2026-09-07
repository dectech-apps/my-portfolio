import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

// Local image imports
import upnmg1 from "../assets/projects/admin-2.png";
import upnmg2 from "../assets/projects/admin.png";
import techland1 from "../assets/projects/techland.png";
import techland2 from "../assets/projects/techland2.png";
import three21 from "../assets/projects/three21.png";
import three22 from "../assets/projects/three21-2.png";
import gff from "../assets/projects/gff.png";
import gff2 from "../assets/projects/gff2.png";
import securevote from "../assets/projects/securevote.png";
import uamac from "../assets/projects/uamac.png";
import etf from "../assets/projects/etf.png";
import screen1 from "../assets/projects/screen4.png";
import screen2 from "../assets/projects/screen5.png";
// import screen3 from "../assets/projects/screen3.jpeg";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const techStacks = {
    "Front-End": [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Angular",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
      },
      {
        name: "Vue.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      },
      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "TailwindCSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "Bootstrap",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
      },
    ],
    "Back-End": [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "PHP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      },
    ],
    Databases: [
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "Redis",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      },
      {
        name: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      },
    ],
    "Mobile App Development": [
      {
        name: "React Native",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Flutter",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      },
      {
        name: "Swift",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
      },
    ],
    "UI/UX Design": [
      {
        name: "Figma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
      {
        name: "Adobe XD",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg",
      },
      {
        name: "Sketch",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg",
      },
      {
        name: "Framer",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
      },
    ],
    DevOps: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub Actions",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "AWS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      },
      {
        name: "Azure",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
      },
      {
        name: "NGinx",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg",
      },
    ],
    "AI / ML Tools": [
      {
        name: "ChatGPT",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chartjs/chartjs-plain.svg",
      },
      {
        name: "Hugging Face",
        icon: "https://huggingface.co/front/assets/huggingface_logo.svg",
      },
      {
        name: "Nestjs",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
      },
      {
        name: "redux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
      },
      {
        name: "passport",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/passport/passport-original.svg",
      },
    ],
  };

  // Flatten all tech stacks for easy lookup
  const allTechIcons = Object.values(techStacks)
    .flat()
    .reduce((acc, tech) => {
      acc[tech.name] = tech.icon;
      return acc;
    }, {});

  const projects = [
    {
      title: "Golden Leaf Family Farm",
      shortDescription:
        "Full-stack crowdfarming platform empowering users to invest in and support sustainable agriculture.",
      description:
        "Golden Leaf Family Farm is a full-stack crowdfarming platform that connects investors with local farmers, enabling transparent and sustainable agricultural funding. The platform allows users to browse active farm projects, make secure investments, and track real-time progress and yields. It features user authentication, role-based dashboards (investors, farmers, and admins), payment integration, and automated investment reporting. Designed with a focus on scalability and performance, it combines a modern frontend experience with a robust backend API for managing farm operations, transactions, and investor relations.",
      techStack: [
        "React",
        "redux",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Git",
        "AWS",
        "Figma",
        "passport",
        "NGinx",
        "TailwindCSS",
        "Framer",
      ],
      links: {
        live: "https://golden-leaf-frontend.vercel.app",
        github: "#",
      },
      images: [gff, gff2],
      gradient: "from-green-500 to-emerald-700",
    },
    {
      title: "UPNMG Mobile Application",
      shortDescription:
        "Mobile platform for nurses to apply for loans, track approvals, and manage high-value purchases.",
      description:
        "The UPNMG Mobile Application is a specialized mobile platform designed for nurses to streamline financial requests and high-value purchases. Users can apply for personal or professional loans, track application status in real-time, and receive notifications for approvals or required actions. The app also enables secure management of purchases, allowing users to request, approve, and document high-value transactions efficiently. Built with a focus on usability and reliability, it features role-based access for nurses, administrators, and finance officers, along with a clean, intuitive interface optimized for mobile devices. The design emphasizes security, transparency, and operational efficiency within the healthcare workflow.",
      techStack: ["React Native", "TailwindCSS", "Figma", "Git"],
      links: {
        live: "#",
        github: "#",
      },
      images: [screen1, screen2],
      gradient: "from-green-500 to-emerald-700",
    },
    {
      title: "UPNMG Portal",
      shortDescription: "Admin Dashboard & Nurses Portal",
      description:
        "Administrator Dashboard for the Union members performance tracking and approvals on members loans and fund deductions.",
      techStack: [
        "React",
        "TypeScript",
        "TailwindCSS",
        "Node.js",
        "MongoDB",
        "NGinx",
        "redux",
      ],
      links: { live: "https://portal.upnmg.com" },
      images: [upnmg1, upnmg2],
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "ThreeTweentyOne",
      shortDescription:
        "Modern eCommerce platform with sleek UI/UX and interactive prototype",
      description:
        "ThreeTweentyOne is a full-featured eCommerce web platform designed with a focus on clean, intuitive user experience and visually appealing interface. It enables users to browse, search, and purchase products effortlessly while maintaining a premium brand aesthetic. The design includes a responsive layout, dynamic product previews, seamless checkout flow, and a dashboard for order and inventory management. The Figma prototype highlights the user journey from homepage discovery to checkout completion, ensuring a consistent and engaging shopping experience across all devices.",
      techStack: ["Figma", "Framer"],
      links: {
        live: "https://www.figma.com/proto/40OHrGAxPAjtajRzDrL4So/threetwentyonegh?page-id=0%3A1&node-id=1-2&scaling=scale-down-width&content-scaling=fixed&t=ZOSNJY9CY6rz9NPM-1",
        github: "#",
      },
      images: [three21, three22],
      gradient: "from-orange-500 to-red-600",
    },
    {
      title: "Techland School",
      shortDescription: "Multitenant school management system",
      description:
        "A modern multitenant school platform designed to manage multiple schools under one system. It supports role-based access for administrators, teachers, parents, and students, enabling seamless communication, performance tracking, attendance management, and fee processing across campuses. Built for scalability, data isolation, and real-time operations.",
      techStack: [
        "React",
        "Nestjs",
        "TailwindCSS",
        "MongoDB",
        "AWS",
        "GitHub Actions",
        "redux",
      ],
      links: { live: "http://techland.superadmin.upnmg.com/", github: "#" },
      images: [techland1, techland2],
      gradient: "from-green-500 to-teal-600",
    },

    {
      title: "Secure Vote",
      shortDescription:
        "Full-stack voting system with real-time results, authentication, and secure data management.",
      description:
        "Secure Vote is a robust full-stack voting platform designed to ensure transparency, security, and efficiency in digital elections. It allows administrators to create and manage elections while enabling users to register, authenticate, and cast votes securely. The system employs role-based access control for admins, voters, and observers, and integrates end-to-end encryption to maintain vote integrity. It includes real-time result visualization, audit trails, and a responsive user interface built for both desktop and mobile users. Designed with scalability in mind, Secure Vote leverages modern technologies to support institutional, organizational, and community-based voting processes.",
      techStack: ["React", "Figma", "Git"],
      links: {
        live: "https://securevote-five.vercel.app/",
      },
      images: [securevote],
      gradient: "from-blue-500 to-indigo-700",
    },
    {
      title: "UaMac",
      shortDescription: "Under Construction",
      description:
        "UaMac is currently under development. This project will be a modern, full-featured application designed with a focus on intuitive UI/UX, responsive design, and seamless interactivity. Stay tuned for updates as we build out the features and functionality.",
      techStack: ["React", "Framer", "TailwindCSS"],
      links: {
        live: "https://www.upnmgamac.org",
      },
      images: [uamac],
      gradient: "from-green-500 to-indigo-700",
    },
    {
      title: "Eternal Feels",
      shortDescription: "Wishlist Page",
      description: ".",
      techStack: ["React", "Framer", "TailwindCSS"],
      links: {
        Development: "#",
      },
      images: [etf],
      gradient: "from-green-500 to-indigo-700",
    },
  ];

  const TechIcon = ({ name, className = "w-5 h-5" }) => {
    const iconUrl = allTechIcons[name];
    if (!iconUrl) {
      console.warn(`Icon not found for: ${name}`);
      return null;
    }

    return (
      <img
        src={iconUrl}
        alt={name}
        className={className}
        loading="lazy"
        title={name}
      />
    );
  };

  const handleNextImage = (project) => {
    if (!project) return;
    setCurrentImage((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevImage = (project) => {
    if (!project) return;
    setCurrentImage((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6">
              Projects
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Crafting digital experiences with modern design, performance, and
              innovation
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedProject(project);
                  setCurrentImage(0);
                }}
                className="group cursor-pointer"
              >
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10`}
                  ></div>

                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                    ></div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <div
                        className={`p-2 rounded-xl bg-gradient-to-br ${project.gradient} opacity-80`}
                      >
                        <ExternalLink className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm line-clamp-2">
                      {project.shortDescription}
                    </p>

                    {/* Tech Stack Icons */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.techStack.map((tech, i) => (
                        <div
                          key={i}
                          className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors group relative"
                          title={tech}
                        >
                          <TechIcon name={tech} className="w-4 h-4" />
                          {/* Tooltip */}
                          <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                            {tech}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Action Hint */}
                    <div className="pt-2 flex items-center text-sm text-gray-500 group-hover:text-blue-600 transition-colors">
                      <span className="font-medium">View Details</span>
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Carousel */}
            <div className="relative bg-gray-900">
              <img
                src={selectedProject.images[currentImage]}
                alt={selectedProject.title}
                className="w-full h-64 sm:h-80 object-cover"
              />

              {/* Navigation Buttons */}
              {selectedProject.images.length > 1 && (
                <>
                  <button
                    onClick={() => handlePrevImage(selectedProject)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 rounded-full p-3 shadow-lg transition-all hover:scale-110"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleNextImage(selectedProject)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 rounded-full p-3 shadow-lg transition-all hover:scale-110"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2.5 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full text-gray-900 hover:text-red-600 transition-all hover:scale-110 shadow-lg group"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image Counter */}
              {selectedProject.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                  {currentImage + 1} / {selectedProject.images.length}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[calc(90vh-20rem)] overflow-y-auto">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                  {selectedProject.title}
                </h2>
                <p className="text-gray-600 leading-relaxed text-base">
                  {selectedProject.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.techStack.map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl text-sm font-semibold text-gray-800 border border-gray-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 group relative"
                      title={tech}
                    >
                      <TechIcon name={tech} className="w-5 h-5" />
                      {/* Tooltip */}
                      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                        {tech}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                {selectedProject.links.live !== "#" && (
                  <a
                    href={selectedProject.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${selectedProject.gradient} text-white rounded-xl font-semibold hover:shadow-lg transition-all hover:-translate-y-0.5`}
                  >
                    <ExternalLink className="w-5 h-5" />
                    View Live Demo
                  </a>
                )}
                {selectedProject.links.github !== "#" && (
                  <a
                    href={selectedProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 text-gray-900 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all hover:-translate-y-0.5"
                  >
                    <Github className="w-5 h-5" />
                    View Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
