import React from "react";
import { ExternalLink, Bookmark } from "lucide-react";

const Bookmarks = () => {
  const bookmarks = [
    {
      category: "Design Inspiration",
      items: [
        {
          title: "Dribbble",
          url: "https://dribbble.com",
          description: "Discover the world's top designers & creatives",
        },
        {
          title: "Behance",
          url: "https://behance.net",
          description: "Showcase and discover creative work",
        },
        {
          title: "Awwwards",
          url: "https://awwwards.com",
          description: "Website awards for design, creativity and innovation",
        },
      ],
    },
    {
      category: "Design Tools",
      items: [
        {
          title: "Figma",
          url: "https://figma.com",
          description: "Collaborative interface design tool",
        },
        {
          title: "Framer",
          url: "https://framer.com",
          description: "Interactive design and prototyping",
        },
        {
          title: "Principle",
          url: "https://principleformac.com",
          description: "Animated design prototyping",
        },
      ],
    },
    {
      category: "Resources",
      items: [
        {
          title: "Unsplash",
          url: "https://unsplash.com",
          description: "Free high-resolution photos",
        },
        {
          title: "Coolors",
          url: "https://coolors.co",
          description: "Color palette generator",
        },
        {
          title: "Font Pair",
          url: "https://fontpair.co",
          description: "Font pairing inspiration",
        },
      ],
    },
    {
      category: "Learning",
      items: [
        {
          title: "Nielsen Norman Group",
          url: "https://nngroup.com",
          description: "UX research and consulting",
        },
        {
          title: "Smashing Magazine",
          url: "https://smashingmagazine.com",
          description: "Web design and development articles",
        },
        {
          title: "A List Apart",
          url: "https://alistapart.com",
          description: "Web standards and best practices",
        },
      ],
    },
  ];

  return (
    <div>
      <h1 className="text-4xl font-semibold text-gray-900 mb-4">Bookmarks</h1>
      <p className="text-lg text-gray-600 mb-12 leading-relaxed">
        A curated collection of resources, tools, and inspiration that I find
        valuable.
      </p>

      <div className="space-y-10">
        {bookmarks.map((category, index) => (
          <div key={index}>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Bookmark className="w-5 h-5" />
              {category.category}
            </h2>

            <div className="grid gap-4">
              {category.items.map((item, itemIndex) => (
                <a
                  key={itemIndex}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start justify-between p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all group"
                >
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors flex-shrink-0 ml-4" />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
