import React from 'react';
import { FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
import italyImage from '../Images/italy-map.jpeg'; // Example image of Italy (can be replaced with your own image)

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <h1 className="about-us-title">About Us</h1>

      <div className="about-us-card">
        <div className="image-placeholder">
          <img
            src={italyImage}
            alt="Italy"
            className="experience-image"
          />
        </div>
        <div className="experience-content">
          <h2 className="experience-title">Blogger's Profile</h2>
          <p className="experience-description">
            Welcome! I'm a passionate travel blogger who fell in love with Italy. Over the years, I've explored every corner of this beautiful country and have developed a deep appreciation for its rich culture, history, and cuisine. My mission is to share these experiences with fellow travelers and help you discover the wonders of Italy.
          </p>
          <p className="experience-description">
            Whether you're here for the art, the food, or the breathtaking landscapes, I'm here to guide you through the best that Italy has to offer. Let's embark on this unforgettable journey together!
          </p>
        </div>
      </div>

      <div className="contact-section">
        <h2 className="gallery-title">Contact Information</h2>
        <div className="contact-content">
          <p className="experience-description">Feel free to reach out to me through the following channels:</p>
          <ul className="social-links flex justify-center gap-6">
            <li>
              <a
                href="https://www.instagram.com/zhi79801/"
                className="text-yellow-500 text-2xl hover:text-yellow-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@zhi-l7t"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 text-2xl hover:text-yellow-400"
              >
                <FaYoutube />
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@zhi00052"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 text-2xl hover:text-yellow-400"
              >
                <FaTiktok />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
