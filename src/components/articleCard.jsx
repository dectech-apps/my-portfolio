import React from "react";
import { Calendar, Clock } from "lucide-react";

// Optional: tech icons mapping
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

const ArticleCard = ({ article }) => {
  return (
    <article className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow bg-white flex flex-col gap-4">
      <h2 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors cursor-pointer">
        {article.title}
      </h2>

      <div className="flex flex-wrap gap-4 text-gray-500 text-sm">
        <span className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          {article.date}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          {article.readTime}
        </span>
      </div>

      <p className="text-gray-700 leading-relaxed">{article.excerpt}</p>

      <div className="flex gap-2 flex-wrap">
        {article.tags.map((tag, idx) => (
          <div
            key={idx}
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
  );
};

export default ArticleCard;
