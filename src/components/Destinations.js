import React from 'react';
import italyMap from '../Images/italy-map.jpeg'; // Replace with the correct path to your map image

const Destinations = () => {
  const cities = [
    {
      name: 'Rome',
      description:
        'The Eternal City offers ancient wonders like the Colosseum and the Pantheon, alongside Vatican treasures.',
      mustSee: ['Colosseum', 'Vatican City', 'Trevi Fountain'],
      advice: 'Plan your visit early in the day to avoid crowds.',
    },
    {
      name: 'Venice',
      description:
        'The city of canals is a romantic getaway, offering gondola rides and picturesque views.',
      mustSee: ['Grand Canal', 'St. Mark’s Basilica', 'Rialto Bridge'],
      advice: 'Wear comfortable shoes for walking across bridges.',
    },
    {
      name: 'Florence',
      description:
        'The cradle of the Renaissance, known for its art, architecture, and culture.',
      mustSee: ['Uffizi Gallery', 'Florence Cathedral', 'Ponte Vecchio'],
      advice: 'Book museum tickets in advance to avoid long queues.',
    },
    {
      name: 'Milan',
      description:
        'A global fashion capital with impressive architecture and art.',
      mustSee: ['Duomo di Milano', 'The Last Supper', 'Galleria Vittorio Emanuele II'],
      advice: 'Check local fashion shows and events during your visit.',
    },
    {
      name: 'Naples',
      description:
        'A vibrant city offering authentic pizza, historical sites, and proximity to Pompeii.',
      mustSee: ['Mount Vesuvius', 'Naples Cathedral', 'Castel dell’Ovo'],
      advice: 'Try the local pizza at historic pizzerias.',
    },
  ];

  const recommended = [
    { category: 'Natural Beauty', sites: ['Alps', 'Lake Como'] },
    { category: 'Historical Sites', sites: ['Pompeii', 'Colosseum'] },
    { category: 'Art and Culture', sites: ['Uffizi Gallery', 'Michelangelo’s David'] },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="destinations">
      {/* Map of Italy */}
      <div className="italy-map-container">
        <img src={italyMap} alt="Map of Italy" className="italy-map" />
      </div>

      {/* Navigation Buttons */}
      <nav className="city-nav">
        {cities.map((city) => (
          <button
            key={city.name}
            onClick={() => scrollToSection(city.name.toLowerCase())}
            className="nav-button"
          >
            {city.name}
          </button>
        ))}
      </nav>

      {/* Main Cities Section */}
      {cities.map((city) => (
        <section id={city.name.toLowerCase()} className="city-section" key={city.name}>
          <h2>{city.name}</h2>
          <p>{city.description}</p>
          <h3>Must-See Attractions:</h3>
          <ul>
            {city.mustSee.map((attraction, index) => (
              <li key={index}>{attraction}</li>
            ))}
          </ul>
          <h3>Travel Advice:</h3>
          <p>{city.advice}</p>
        </section>
      ))}

      {/* Recommended Categories Section */}
      <section id="recommended-categories" className="recommended-section">
        <h2>Recommended Categories</h2>
        {recommended.map((rec, index) => (
          <div key={index} className="category">
            <h3>{rec.category}</h3>
            <ul>
              {rec.sites.map((site, idx) => (
                <li key={idx}>{site}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Destinations;
