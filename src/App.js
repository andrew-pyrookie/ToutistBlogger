import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Introduction from './components/Introduction';
import Destinations from './components/Destinations';
import Experiences from './components/Experiences';
import Itinerary from './components/Itinerary';
import Blog from './components/Blog';
import AboutUs from './components/AboutUs';
import './App.css';

// Define the Home page as a composition of components
const Home = () => {
  return (
    <>
      <LandingPage />
      <Introduction />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen">
        <Navbar /> {/* Place Navbar outside of Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/itinerary" element={<Itinerary />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
// 