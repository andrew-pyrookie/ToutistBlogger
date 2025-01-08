import React from 'react';
import travelImage from '../Images/panoramicview.jpeg';  // Example image for the blog section
import collage from '../Images/Sandro MATICELLI Uffizi.jpeg';
import cathedral from '../Images/Cathedral Santa.jpeg';

const Blog = () => {
  const sections = [
    {
      title: 'True Travel Stories',
      description:
        'Dive into unforgettable experiences shared by travelers, from life-changing moments to heartwarming adventures.',
      imgSrc: travelImage,
      imgAlt: 'Travel stories',
    },
    {
      title: 'Photo Collection',
      description:
        'A breathtaking showcase of Italy’s most beautiful landscapes, iconic landmarks, and hidden gems.',
      imgSrc: collage,
      imgAlt: 'Photo collection',
    },
    {
      title: 'Travel Trends',
      description:
        'Stay updated with the latest travel hot spots and explore little-known places waiting to be discovered.',
      imgSrc: cathedral,
      imgAlt: 'Travel trends',
    },
  ];

  return (
    <div className="blog-page">
      <h1 className="blog-title">Blog & Stories</h1>

      {sections.map((section, index) => (
        <div key={index} className="blog-card">
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

export default Blog;
