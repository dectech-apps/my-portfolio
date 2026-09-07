import React from "react";

// Import your custom components here
import ArticleCard from "../components/articleCard";

const Components = () => {
  // Sample data to test components
  const sampleArticle = {
    title: "Sample Component Article",
    date: "Nov 12, 2025",
    readTime: "3 min read",
    excerpt:
      "This is a sample article to test the ArticleCard component. You can replace this with real data later.",
    tags: ["UI/UX", "Development", "Workflow"],
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Components Playground
      </h1>
      <p className="text-gray-600 mb-12 leading-relaxed text-lg">
        This page is for testing and previewing all your custom reusable
        components.
      </p>

      {/* Section: ArticleCard */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">ArticleCard Component</h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Render multiple instances */}
          <ArticleCard article={sampleArticle} />
          <ArticleCard article={sampleArticle} />
          <ArticleCard article={sampleArticle} />
        </div>
      </section>

      {/* You can add more sections for other components */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Other Custom Components</h2>
        <div className="flex flex-wrap gap-6">
          {/* Example placeholder */}
          <div className="bg-gray-100 p-6 rounded-xl w-full sm:w-[48%] lg:w-[30%]">
            <p className="text-gray-700">
              Your custom component preview goes here.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl w-full sm:w-[48%] lg:w-[30%]">
            <p className="text-gray-700">Another component preview.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Components;
