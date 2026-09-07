import React from "react";
import ArticleCard from "../components/articleCard";

const Blog = () => {
  const articles = [
    {
      title: "The Future of Design Systems",
      date: "October 15, 2024",
      readTime: "5 min read",
      excerpt:
        "Exploring how design systems are evolving and what that means for designers and developers working together in modern product teams...",
      tags: ["Design Systems", "UI/UX", "Collaboration"],
    },
    {
      title: "Designing for Accessibility: Beyond Compliance",
      date: "September 22, 2024",
      readTime: "7 min read",
      excerpt:
        "Why accessibility should be a core principle in design, not just a checklist...",
      tags: ["Accessibility", "Inclusive Design", "Best Practices"],
    },
    {
      title: "Micro-interactions That Matter",
      date: "August 10, 2024",
      readTime: "4 min read",
      excerpt: "Small details can make a big difference in user experience...",
      tags: ["Animation", "UX", "Interaction Design"],
    },
    {
      title: "From Figma to Code: Bridging the Gap",
      date: "July 5, 2024",
      readTime: "6 min read",
      excerpt:
        "Best practices for designer-developer handoff and how to create designs that translate smoothly into production...",
      tags: ["Figma", "Development", "Workflow"],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">My Blog</h1>
      <p className="text-gray-600 mb-12 leading-relaxed text-lg">
        Insights, thoughts, and tutorials from my journey in design and
        development.
      </p>

      {/* Articles Grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {articles.map((article, idx) => (
          <ArticleCard key={idx} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
