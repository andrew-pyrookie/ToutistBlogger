import React from 'react';
import travelImage from '../Images/panoramicview.jpeg';  // Example image for the blog section
import collage from '../Images/Sandro MATICELLI Uffizi.jpeg';
import cathedral from '../Images/Cathedral Santa.jpeg';
import italyGallery1 from '../Images/Cathedral of Santa Maria depict.jpeg';  // Example gallery image
import italyGallery2 from '../Images/CathedralSantaMaria.jpeg';  // Example gallery image
import italyGallery3 from '../Images/Duomo di Milano.jpeg';  // Example gallery image
import italyGallery4 from '../Images/Fallen Angel.jpeg';
import italyGallery5 from '../Images/Galleria.jpeg';
import italyGallery6 from '../Images/Marks Campanille.jpeg';
import italyGallery7 from '../Images/Veniice Italy.jpeg';
import italyGallery8 from "../Images/MIchelangelo's sculpture David.jpeg";
import italyGallery9 from '../Images/uffiziGallery.jpeg';

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

  const galleryImages = [italyGallery1, italyGallery2, italyGallery3, italyGallery4, italyGallery5, italyGallery6, italyGallery7, italyGallery8, italyGallery9];  // Gallery images

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

      {/* Gallery Section */}
      <div className="gallery-section">
        <h2 className="gallery-title">Italy Gallery</h2>
        <div className="gallery-container">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <img
                src={image}
                alt={`Italy Gallery ${index + 1}`}
                className="gallery-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
