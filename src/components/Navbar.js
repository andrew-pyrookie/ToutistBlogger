import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Italy Travel</div>
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        <span className="burger-bar"></span>
        <span className="burger-bar"></span>
        <span className="burger-bar"></span>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          <NavLink
            to="/"
            className="nav-link"
            onClick={() => setIsOpen(false)} // Close menu after clicking
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/destinations"
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            Destinations
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/experiences"
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            Experiences
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/itinerary"
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            Itinerary
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
