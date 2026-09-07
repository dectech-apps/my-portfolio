import React, { useEffect, useRef, useState } from "react";
import { Download } from "lucide-react";

const roles = [
  "Software Developer",
  "Machine Learning Engineer",
  "Data Scientist",
  "Cybersecurity Researcher",
];

export default function About() {
  const [visibleCards, setVisibleCards] = useState({});
  const cardRefs = useRef([]);
  const [roleIndex, setRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => ({ ...prev, [index]: true }));
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((obs) => obs && obs.disconnect());
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const experiences = [
    {
      title: "Graduate Research Assistant — Center for Cyber Security Research, UND",
      period: "Sep 2024 – Present",
      description:
        "Partnered with subject matter experts and an industry utility partner to translate an operational security requirement into a real-time substation monitoring solution, funded under a U.S. Department of Energy CESER grant. Built a dashboard integrating acoustic, radar, camera, and bullet-trajectory triangulation data sources for real-time monitoring and reporting. Pretrained a Vision Transformer (YOLOv8m) model to classify people, drones, wildlife, and vehicles for real-time site monitoring. Applied NIST cybersecurity frameworks (CSF, RMF, SP 800-series) and conducted ML-based research for anomaly, threat, and intrusion detection in cyber-physical systems. Led large-scale data collection, preprocessing, and feature engineering; findings accepted for publication at the 2025 IEEE Cyber Awareness and Research Symposium.",
    },
    {
      title: "Graduate Research Assistant — School of Public Health, UND",
      period: "Jun 2025 – Sep 2025",
      description:
        "Partnered with the North Dakota Perinatal Quality Collaborative (NDPQC) to gather and document requirements for a patient- and family-facing mobile solution. Designed and implemented a Flutter-based mobile application with location-based search, enabling users to find nearby healthcare and counseling facilities. Iterated on application enhancements and testing with stakeholders to ensure usability for non-technical end users. Conducted system analysis and identified opportunities to improve business processes through automation and technology.",
    },
    {
      title: "System Administrator — Union of Professional Nurses and Midwives",
      period: "Jan 2022 – Jul 2024",
      description:
        "Served as the primary bridge between organizational leadership and IT systems, managing internal IT operations end to end. Developed the organization's website, internal application software, and web portals used daily by employees. Designed, built, and managed underlying databases and integrated RESTful APIs to support new functionality. Organized and led training sessions for employees and external stakeholders to drive adoption of new systems and processes.",
    },
    {
      title: "Full-Stack Developer / DevOps Engineer / Scrum Master — Tiqniat Software",
      period: "Jan 2020 – Dec 2021",
      description:
        "Served as Scrum Master, running sprint planning, stand-ups, and retrospectives, communicating project progress and priorities between stakeholders and the development team. Owned CI/CD pipeline deployment and cloud infrastructure on AWS (EC2, Step Functions, EventBridge, Amplify, SQS, SES, OpenSearch). Developed and integrated RESTful and GraphQL APIs; built and maintained full-stack web applications. Designed Entity Relationship Diagrams (ERD) and Context/Container/Component-level architecture diagrams to communicate system design to technical and non-technical audiences.",
    },
    {
      title: "Backend Developer — Motes Systems",
      period: "May 2018 – Oct 2021",
      description:
        "Communicated regularly with stakeholders and cross-functional teams to align on integration requirements, application performance, and release priorities. Developed and integrated APIs with the frontend and managed CI/CD pipeline deployment. Wrote and maintained comprehensive software test suites to uphold code quality and reliability across deployments. Used cloud platforms to deploy, monitor, and maintain applications, ensuring high availability, scalability, and strong performance.",
    },
  ];

  const resumeLink = "/Derrick_Agyapong_Resume.pdf";

  return (
    <div className="bg-white min-h-screen py-10 sm:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

          {/* Left: Sticky Profile */}
          <div className="w-full lg:w-2/5 lg:sticky lg:top-10">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1">
              Derrick Agyapong
            </h1>
            <p
              className="text-sm font-medium mb-5 transition-opacity duration-300"
              style={{
                opacity: fade ? 1 : 0,
                color: "#4f46e5",
              }}
            >
              {roles[roleIndex]}
            </p>

            <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed mb-4">
              IT professional with a track record of partnering with business
              stakeholders to translate operational needs into working technology
              solutions. Experienced in requirements gathering, dashboard and
              reporting development, process improvement, and system
              implementation across research, healthcare, and enterprise
              environments.
            </p>
            <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed mb-8">
              Background spans full-stack and backend development, database
              design and management, Agile/Scrum delivery, DevOps and cloud
              infrastructure (AWS), and applied data analysis and machine
              learning — with consistent experience communicating between
              technical teams and non-technical stakeholders.
            </p>

            <a
              href={resumeLink}
              download="Derrick_Agyapong_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-700 transition-colors"
            >
              <Download size={14} />
              Download Resume
            </a>
          </div>

          {/* Right: Experience Cards */}
          <div className="w-full lg:w-3/5">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Experience
            </h2>

            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                  style={{
                    opacity: visibleCards[index] ? 1 : 0,
                    transform: visibleCards[index]
                      ? "translateY(0)"
                      : "translateY(24px)",
                    transition: `opacity 0.4s ease ${index * 80}ms, transform 0.4s ease ${index * 80}ms`,
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                    <h3 className="text-sm sm:text-[15px] font-semibold text-gray-900 leading-snug">
                      {exp.title}
                    </h3>
                    <span className="text-xs text-gray-400 sm:whitespace-nowrap sm:pl-4 shrink-0 font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
