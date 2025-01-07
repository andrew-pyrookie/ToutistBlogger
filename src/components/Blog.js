import React from 'react';

const Blog = () => {
  const sections = [
    {
      title: 'True Travel Stories',
      description:
        'Dive into unforgettable experiences shared by travelers, from life-changing moments to heartwarming adventures.',
      imgAlt: 'Travel stories',
    },
    {
      title: 'Photo Collection',
      description:
        'A breathtaking showcase of Italy’s most beautiful landscapes, iconic landmarks, and hidden gems.',
      imgAlt: 'Photo collection',
    },
    {
      title: 'Travel Trends',
      description:
        'Stay updated with the latest travel hot spots and explore little-known places waiting to be discovered.',
      imgAlt: 'Travel trends',
    },
  ];

  return (
    <div className="blog-page bg-black text-white min-h-screen p-8">
      <h1 className="text-yellow-500 text-4xl font-bold mb-8 text-center">
        Blog & Stories
      </h1>

      {sections.map((section, index) => (
        <div
          key={index}
          className="blog-card bg-blue-900 rounded-lg shadow-lg p-6 mb-10 flex flex-col md:flex-row items-center"
        >
          <div className="image-placeholder bg-yellow-500 w-full md:w-1/3 h-48 rounded-lg mb-4 md:mb-0 md:mr-6 flex items-center justify-center">
            <span className="text-black font-bold">{section.imgAlt}</span>
          </div>
          <div className="content w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-yellow-400 text-3xl font-semibold mb-2">
              {section.title}
            </h2>
            <p className="text-white text-lg">{section.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
