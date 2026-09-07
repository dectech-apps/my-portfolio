import React from "react";
import { Calendar, Clock } from "lucide-react";

// Tech icons as SVG URLs (can also be local files)
const techIcons = {
  "Design Systems":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  "UI/UX":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  Collaboration:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  Accessibility:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "Inclusive Design":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "Best Practices":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  Animation:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  UX: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  "Interaction Design":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  Figma:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  Development:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  Workflow:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
};

const Writes = () => {
  const articles = [
    {
      title: "The Future of Design Systems",
      date: "October 15, 2025",
      readTime: "30 min read",
      excerpt:
        "Exploring how design systems are evolving and what that means for designers and developers working together in modern product teams. A deep dive into component libraries, design tokens, and collaboration tools.",
      tags: ["Design Systems", "UI/UX", "Collaboration"],
    },
    {
      title: "Designing for Accessibility: Beyond Compliance",
      date: "September 01, 2025",
      readTime: "7 min read",
      excerpt:
        "Why accessibility should be a core principle in design, not just a checklist. Learn practical approaches to creating inclusive experiences that work for everyone, regardless of their abilities.",
      tags: ["Accessibility", "Inclusive Design", "Best Practices"],
    },
    {
      title: "Micro-interactions That Matter",
      date: "August 10, 2024",
      readTime: "4 min read",
      excerpt:
        "Small details can make a big difference in user experience. Discover how thoughtful micro-interactions enhance usability and delight users in everyday interactions.",
      tags: ["Animation", "UX", "Interaction Design"],
    },
    {
      title: "Figma to Code: Bridging the Gap",
      date: "July 5, 2024",
      readTime: "6 min read",
      excerpt:
        "Best practices for designer-developer handoff and how to create designs that translate smoothly into production. Tools, techniques, and communication strategies that work.",
      tags: ["Figma", "Development", "Workflow"],
    },
  ];

  return (
    <div>
      <h1 className="text-4xl font-semibold text-gray-900 mb-4">My Writes</h1>
      <p className="text-lg text-gray-600 mb-12 leading-relaxed">
        Thoughts, insights, and learnings from my journey in design and
        technology.
      </p>

      <div className="space-y-8">
        {articles.map((article, index) => (
          <article
            key={index}
            className="border-b border-gray-200 pb-8 last:border-0"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 cursor-pointer transition-colors">
              {article.title}
            </h2>

            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {article.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </span>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">
              {article.excerpt}
            </p>

            <div className="flex gap-2 flex-wrap">
              {article.tags.map((tag, tagIndex) => (
                <div
                  key={tagIndex}
                  className="flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                >
                  {techIcons[tag] && (
                    <img
                      src={techIcons[tag]}
                      alt={tag}
                      className="w-5 h-5 object-contain"
                    />
                  )}
                  <span>{tag}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Writes;
