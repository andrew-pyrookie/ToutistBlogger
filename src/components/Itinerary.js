import React from 'react';

const Itinerary = () => {
  const sections = [
    {
      title: 'Classic Itineraries',
      description:
        'Experience Italy in depth with curated 7, 10, or 14-day itineraries. Explore the essence of Italy’s history, culture, and natural beauty.',
      imgAlt: 'Classic itinerary',
    },
    {
      title: 'Theme Routes',
      description:
        'Follow themed routes tailored for art and culture enthusiasts, food lovers, or romantic honeymooners seeking unforgettable memories.',
      imgAlt: 'Themed travel routes',
    },
    {
      title: 'Useful Information',
      description:
        'Maximize your visit by learning how to travel efficiently between cities using the Ruyi Rail Pass and other travel tips.',
      imgAlt: 'Travel tips',
    },
  ];

  return (
    <div className="itinerary-page bg-black text-white min-h-screen p-8">
      <h1 className="text-yellow-500 text-4xl font-bold mb-8 text-center">
        Italy Travel Itinerary
      </h1>

      {sections.map((section, index) => (
        <div
          key={index}
          className="itinerary-card bg-blue-900 rounded-lg shadow-lg p-6 mb-10 flex flex-col md:flex-row items-center"
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

export default Itinerary;
