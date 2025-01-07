import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us-page bg-black text-white min-h-screen p-8">
      <h1 className="text-yellow-500 text-4xl font-bold mb-8 text-center">
        About Us
      </h1>

      <div className="profile-section mb-12">
        <h2 className="text-yellow-400 text-3xl font-semibold mb-4 text-center">
          Blogger's Profile
        </h2>
        <div className="profile-content bg-blue-900 rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center">
          <div className="image-placeholder bg-yellow-500 w-32 h-32 rounded-full mb-4 md:mb-0 md:mr-6 flex items-center justify-center">
          </div>
          <div className="bio-content w-full md:w-2/3 text-center md:text-left">
            <p className="text-white text-lg mb-4">
              Welcome! I'm a passionate travel blogger who fell in love with Italy. Over the years, I've explored every corner of this beautiful country and have developed a deep appreciation for its rich culture, history, and cuisine. My mission is to share these experiences with fellow travelers and help you discover the wonders of Italy.
            </p>
            <p className="text-white text-lg">
              Whether you're here for the art, the food, or the breathtaking landscapes, I'm here to guide you through the best that Italy has to offer. Let's embark on this unforgettable journey together!
            </p>
          </div>
        </div>
      </div>

      <div className="contact-section">
        <h2 className="text-yellow-400 text-3xl font-semibold mb-4 text-center">
          Contact Information
        </h2>
        <div className="contact-content bg-blue-900 rounded-lg shadow-lg p-8 text-center">
          <p className="text-white text-lg mb-4">Feel free to reach out to me through the following channels:</p>
          <ul className="social-links space-x-6">
            <li>
              <a
                href="https://www.instagram.com/zhi79801/"
                className="text-yellow-500 text-2xl hover:text-yellow-400"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@zhi-l7t"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 text-2xl hover:text-yellow-400"
              >
                Youtube
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@zhi00052"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 text-2xl hover:text-yellow-400"
              >
                Tiktok
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
