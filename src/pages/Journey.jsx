import React, { useState } from "react";
import { MapPin, Plus, Minus } from "lucide-react";
import { isObject } from "framer-motion";

const Journey = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // ✅ Verified working tech logo URLs (SVG)
  const techLogos = {
    react:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    mysql:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    mongodb:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    figma:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    xd: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-original.svg",
    framer:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
    shopify:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg",
    javascript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    tailwind:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    aws: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    php: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    Bootstrap:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    wordpress:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg",
    android:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-plain.svg",
    flutter:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
    python:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    typescript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    docker:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  };

  const timeline = [
    {
      year: "Sep 2024 – Present",
      title: "Graduate Research Assistant at Center for Cyber Security Research, UND",
      description:
        "Partnered with subject matter experts and an industry utility partner to translate an operational security requirement into a real-time substation monitoring solution, funded under a U.S. Department of Energy CESER grant. Built a dashboard integrating acoustic, radar, camera, and bullet-trajectory triangulation data sources. Pretrained a Vision Transformer (YOLOv8m) model to classify people, drones, wildlife, and vehicles for real-time site monitoring. Applied NIST cybersecurity frameworks and conducted ML-based research for anomaly, threat, and intrusion detection in cyber-physical systems. Findings accepted for publication at the 2025 IEEE Cyber Awareness and Research Symposium.",
      tech: [
        techLogos.python,
        techLogos.aws,
        techLogos.docker,
        techLogos.git,
      ],
    },
    {
      year: "Jun 2025 – Sep 2025",
      title: "Graduate Research Assistant at School of Public Health, UND",
      description:
        "Partnered with the North Dakota Perinatal Quality Collaborative (NDPQC) to gather and document requirements for a patient- and family-facing mobile solution. Designed and implemented a Flutter-based mobile application with location-based search, enabling users to find nearby healthcare and counseling facilities. Iterated on enhancements and testing with stakeholders to ensure usability for non-technical end users.",
      tech: [
        techLogos.flutter,
        techLogos.python,
        techLogos.android,
        techLogos.figma,
      ],
    },
    {
      year: "Jan 2024 – Sep 2025",
      title: "UI/UX Designer at Techland IT Solutions Limited, Accra",
      description:
        "Led UI/UX design for client projects, collaborating with developers to ensure optimal functionality. Conducted usability testing, researched best practices, utilized analytics to measure design success, and delivered innovative, user-centered interfaces that enhanced overall experience across platforms.",
      tech: [techLogos.figma, techLogos.xd, techLogos.framer],
    },
    {
      year: "Sep 2023 – Feb 2024",
      title: "Support Specialist at Cunningz Shop (Remote – US)",
      description:
        "Provided technical support and customer success for an e-commerce platform. Built strong client relationships, prioritized and resolved issues via documentation and monitoring, and ensured timely, accurate responses to support requests.",
      tech: [techLogos.aws, techLogos.react, techLogos.node],
    },
    {
      year: "Jan 2022 – Jul 2024",
      title: "System Administrator at Union of Professional Nurses and Midwives, Ghana",
      description:
        "Served as the primary bridge between organizational leadership and IT systems, managing internal IT operations end to end. Developed the organization's website, internal application software, and web portals used daily by employees. Designed, built, and managed underlying databases and integrated RESTful APIs. Organized and led training sessions for employees and external stakeholders to drive adoption of new systems.",
      tech: [
        techLogos.react,
        techLogos.node,
        techLogos.aws,
        techLogos.mongodb,
        techLogos.figma,
        techLogos.php,
        techLogos.Bootstrap,
        techLogos.tailwind,
        techLogos.flutter,
        techLogos.android,
      ],
    },
    {
      year: "Jan 2021 – Dec 2021",
      title: "Front-End Developer at Dectech IT Solutions, Greater Accra",
      description:
        "Built responsive, user-facing websites using React, HTML, CSS (Bootstrap/Tailwind), and JavaScript. Implemented cross-platform design principles, managed Git-based version control in team environments, developed RESTful APIs with Node.js/Express, and followed Agile workflows to deliver high-quality code.",
      tech: [
        techLogos.react,
        techLogos.tailwind,
        techLogos.javascript,
        techLogos.git,
        techLogos.wordpress,
      ],
    },
    {
      year: "Jan 2020 – Dec 2021",
      title: "Full-Stack Developer / DevOps Engineer / Scrum Master at Tiqniat Software",
      description:
        "Served as Scrum Master, running sprint planning, stand-ups, and retrospectives, communicating project progress and priorities between stakeholders and the development team. Owned CI/CD pipeline deployment and cloud infrastructure on AWS (EC2, Step Functions, EventBridge, Amplify, SQS, SES, OpenSearch). Developed and integrated RESTful and GraphQL APIs; built and maintained full-stack web applications.",
      tech: [
        techLogos.react,
        techLogos.node,
        techLogos.aws,
        techLogos.typescript,
        techLogos.docker,
        techLogos.git,
        techLogos.mongodb,
      ],
    },
    {
      year: "May 2018 – Oct 2021",
      title: "Backend Developer at Motes Systems",
      description:
        "Communicated regularly with stakeholders and cross-functional teams to align on integration requirements, application performance, and release priorities. Developed and integrated APIs with the frontend and managed CI/CD pipeline deployment. Wrote and maintained software test suites and used cloud platforms to deploy, monitor, and maintain applications.",
      tech: [
        techLogos.node,
        techLogos.aws,
        techLogos.mysql,
        techLogos.docker,
        techLogos.git,
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="text-blue-600" size={20} />
        <h1 className="text-2xl font-semibold text-gray-900">My Journey</h1>
      </div>

      <p className="text-sm text-gray-600 mb-12 leading-relaxed">
        A timeline of my professional growth — from backend and full-stack
        development in Ghana to graduate research in cybersecurity and public
        health at the University of North Dakota.
      </p>

      {/* Timeline */}
      <div className="space-y-12">
        {timeline.map((item, index) => (
          <div
            key={index}
            className="relative pl-10 border-l-2 border-gray-900 hover:border-gray-500 transition-colors group"
          >
            {/* Dot */}
            <div className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-blue-600 border-4 border-white shadow-md"></div>

            {/* Header */}
            <div className="flex items-start justify-between gap-2 sm:gap-4">
              <div className="flex-1 min-w-0">
                <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
                  {item.year}
                </h3>
                <h2 className="text-sm sm:text-md font-semibold text-gray-900 mb-3 leading-snug">
                  {item.title}
                </h2>
              </div>

              {/* Expand Button */}
              <button
                onClick={() => toggleItem(index)}
                className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors mt-6"
              >
                {expandedItems[index] ? (
                  <Minus size={12} className="text-gray-700" />
                ) : (
                  <Plus size={12} className="text-gray-700" />
                )}
              </button>
            </div>

            {/* Description + Tech Stack */}
            {expandedItems[index] && (
              <div className="mt-4">
                <p className="text-gray-700 leading-relaxed text-base mb-4">
                  {item.description}
                </p>

                {/* Tech Logos */}
                <div className="flex flex-wrap gap-3 mt-2">
                  {item.tech.map((logo, i) => (
                    <div
                      key={i}
                      className="bg-gray-100 rounded-full p-2 flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
                    >
                      <img
                        src={logo}
                        alt="tech logo"
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-16 text-center">
        <p className="text-sm text-gray-500 italic">
          BSc in Information Technology Management • University of Professional Studies Accra (UPSA) · MSc Computer Science • University of North Dakota
        </p>
      </div>
    </div>
  );
};

export default Journey;
