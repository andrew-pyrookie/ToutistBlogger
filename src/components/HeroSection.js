import React from 'react';


const HeroSection = () => {
  return (
    <div className="relative">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="hidden md:block absolute inset-0 w-full h-screen object-cover"
      >
        <source src="/italy-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Background Image Fallback */}
      <div className="block md:hidden bg-[url('/italy-image.jpg')] bg-cover bg-center h-screen" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 text-center">
          Discovering Art and Romance in Italy
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
