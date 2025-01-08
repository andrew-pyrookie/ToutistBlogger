import React from 'react';
import classic from '../Images/classic-itienary.jpg';
import itienray from '../Images/uffiziGallery.jpeg';
import railwayy from '../Images/railway.jpeg';

const Itinerary = () => {
  const sections = [
    {
      title: 'Classic Itineraries',
      description:
        'Experience Italy in depth with curated 7, 10, or 14-day itineraries. Explore the essence of Italy’s history, culture, and natural beauty.',
      imgAlt: 'Classic itinerary',
      imgSrc: itienray,
    },
    {
      title: 'Theme Routes',
      description:
        'Follow themed routes tailored for art and culture enthusiasts, food lovers, or romantic honeymooners seeking unforgettable memories.',
      imgAlt: 'Themed travel routes',
      imgSrc: classic,
    },
    {
      title: 'Useful Information',
      description:
        'Maximize your visit by learning how to travel efficiently between cities using the Ruyi Rail Pass and other travel tips.',
      imgAlt: 'Travel tips',
      imgSrc: railwayy,
    },
  ];

  return (
    <div className="itinerary-page">
      <h1 className="itinerary-title">Italy Travel Itinerary</h1>

      {sections.map((section, index) => (
        <div
          key={index}
          className="itinerary-card"
        >
          <div className="image-placeholder">
          <img
            src={section.imgSrc}
            alt={section.imgAlt}
            className="experience-image"
          />
          </div>
          <div className="experience-content">
            <h2 className="experience-title">{section.title}</h2>
            <p className="experience-description">{section.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Itinerary;
