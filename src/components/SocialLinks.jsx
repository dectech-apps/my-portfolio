import React from "react";
import { Twitter, Linkedin, Github, ExternalLink } from "lucide-react";

const SocialLinks = () => {
  const socialLinks = [
    // { icon: Twitter, label: "Twitter", url: "https://twitter/bo4fo" },
    {
      icon: Linkedin,
      label: "Linkedin",
      url: "https://www.linkedin.com/in/derrick900/",
    },
    { icon: Github, label: "Github", url: "https://github.com/dectech900" },
  ];

  return (
    <div className="p-4 border shadow-sm bg-white rounded-2xl border-gray-200">
      <h3 className="text-xs font-semibold text-gray-500 uppercase mb-3">
        Social
      </h3>
      <div className="space-y-1">
        {socialLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-2 py-2.5 text-gray-700 hover:bg-gray-100 rounded-full transition-colors group"
            >
              <div className="flex items-center gap-3">
                <Icon className="w-4 h-4" />
                <span className="text-[12px] font-medium">{link.label}</span>
              </div>
              <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialLinks;
