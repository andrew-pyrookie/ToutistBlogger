import React from 'react';
import { FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <h1 className="about-us-title">About Us</h1>

      <div className="about-us-card">
        <div className="image-placeholder">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12367583.749684373!2d2.1047643046663045!3d40.81852602339197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d4fe82448dd203%3A0xe22cf55c24635e6f!2sItaly!5e0!3m2!1sen!2ske!4v1736349558833!5m2!1sen!2ske"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Italy Map"
          ></iframe>
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
