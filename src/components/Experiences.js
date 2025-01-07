import React from 'react';


const Experiences = () => {
  const sections = [
    {
      title: 'Food Tours',
      description: 'Explore Italy’s rich culinary heritage with pizza, pasta, tiramisu, coffee culture, and wine country tours.',

      imgAlt: 'Delicious Italian food',
    },
    {
      title: 'Cultural Activities',
      description: 'Immerse yourself in Italian opera, enjoy the vibrant Venice Carnival, and try your hand at handicrafts making.',

      imgAlt: 'Venice Carnival',
    },
    {
      title: 'Shopping Recommendations',
      description: 'Discover the best in Italian fashion in Milan, shop luxury brands, and explore unique local markets.',

      imgAlt: 'Luxury shopping',
    },
    {
      title: 'Nature Exploration',
      description: 'Enjoy Alpine skiing, cycling in Tuscany, or trekking along the stunning Amalfi Coast.',

      imgAlt: 'Nature adventures in Italy',
    },
  ];

  return (
    <div className="experiences-page bg-black text-white min-h-screen p-8">
      <h1 className="text-yellow-500 text-4xl font-bold mb-8 text-center">Experiences in Italy</h1>
      
      {sections.map((section, index) => (
        <div
          key={index}
          className="experience-card bg-blue-900 rounded-lg shadow-lg p-6 mb-10 flex flex-col md:flex-row items-center"
        >
          <div className="image-container w-full md:w-1/3 h-48 rounded-lg mb-4 md:mb-0 md:mr-6 flex items-center justify-center">
            <img
              src={section.imgSrc} 
              alt={section.imgAlt}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="content w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-yellow-400 text-3xl font-semibold mb-2">{section.title}</h2>
            <p className="text-white text-lg">{section.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experiences;
