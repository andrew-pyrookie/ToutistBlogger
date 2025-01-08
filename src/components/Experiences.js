import React from "react";

// Import images
import fettuciniAlfredoImg from "../Images/fettucini-alfredo.jpg";
import veniceCarnivalImg from "../Images/venice-carnival.jpg";
import shoppingMallImg from "../Images/shoppingmall.jpg";
import natureImg from "../Images/nature.jpg";

const Experiences = () => {
  const sections = [
    {
      title: "Food Tours",
      description:
        "Explore Italy’s rich culinary heritage with fettucini-alfredo, pizza, pasta, tiramisu, coffee culture, and wine country tours.",
      imgSrc: fettuciniAlfredoImg,
      imgAlt: "Delicious Italian food",
    },
    {
      title: "Cultural Activities",
      description:
        "Immerse yourself in Italian opera, enjoy the vibrant Venice Carnival, and try your hand at handicrafts making.",
      imgSrc: veniceCarnivalImg,
      imgAlt: "Venice Carnival",
    },
    {
      title: "Shopping Recommendations",
      description:
        "Discover the best in Italian fashion in Milan, shop luxury brands, and explore unique local markets.",
      imgSrc: shoppingMallImg,
      imgAlt: "Luxury shopping",
    },
    {
      title: "Nature Exploration",
      description:
        "Enjoy Alpine skiing, cycling in Tuscany, or trekking along the stunning Amalfi Coast.",
      imgSrc: natureImg,
      imgAlt: "Nature adventures in Italy",
    },
  ];

  return (
    <div className="experiences-page">
      <h1 className="experiences-title">Experiences in Italy</h1>
      {sections.map((section, index) => (
        <div key={index} className="experience-card">
          <img
            src={section.imgSrc}
            alt={section.imgAlt}
            className="experience-image"
          />
          <div className="experience-content">
            <h2 className="experience-title">{section.title}</h2>
            <p className="experience-description">{section.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experiences;
