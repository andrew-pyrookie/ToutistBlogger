import React, { useState } from 'react';
import sandroUffizi from '../Images/sandro uffizi.jpeg';
import leaningTower from '../Images/Leaning Tower of Pisa.jpeg';
import foodImage from '../Images/food.webp';
import piazzaDelDuomo from '../Images/Piazza del Duomo.jpeg';
import veniceCanal from '../Images/Venice canal.jpeg';
import paintedRocks from '../Images/paintedrocks.jpeg';

const Introduction = () => {
  const rows = [
    { title: 'History', content: "The image showcases a collection of Sandro Botticelli's masterpieces, including 'Primavera,' 'The Birth of Venus,' and 'Medusa,' all housed in the Uffizi Gallery in Florence, Italy.", image: sandroUffizi },
    { title: 'Art', content: 'The whimsical illustration, featuring a leaning tower adorned with arches and a smaller "cake" tower, strongly suggests a stylized depiction of the Leaning Tower of Pisa in Italy.', image: leaningTower },
    { title: 'Food', content: 'Sicily is blessed with both the sea and a North African influence. Couscous al pesce is a famous example of the meeting of these two cultures, as is pasta con le sarde – sardine pasta with saffron, pine nuts, and raisins.', image: foodImage },
    { title: 'Architectural styles', content: "The distinctive red-tiled dome, the slender Giotto's Campanile, and the surrounding cityscape with red-tiled roofs all point to the image depicting the Florence Cathedral in Florence, Italy.", image: piazzaDelDuomo },
    { title: 'Natural Beauty', content: 'The presence of canals, distinctive Venetian architecture, gondolas, and a twilight sky strongly suggests that the image depicts a romantic and picturesque scene in Venice, Italy.', image: veniceCanal },
    { title: 'Festivals', content: 'The image depicts a vibrant staircase adorned with folk art-style painted rocks, suggesting a cultural celebration or festival where community involvement and playful expression are valued, likely outside of Italy given the color palette and whimsical aesthetic.', image: paintedRocks },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="introduction">
      {rows.map((row, index) => (
        <div className="card" key={index}>
          <img src={row.image} alt={row.title} className="card-image" />
          <h2>{row.title}</h2>
          <p>
            {expandedIndex === index ? row.content : row.content.slice(0, 100) + '...'}
          </p>
          <button onClick={() => handleReadMore(index)}>
            {expandedIndex === index ? 'Show Less' : 'Read More'}
          </button>
        </div>
      ))}
    </section>
  );
};

export default Introduction;
