import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbarr from './components/Navbarr';
import Home from './components/Home';
import Destinations from './components/Destinations';
import About from './components/About';
import Contact from './components/Contact';
import Details from './components/Details';

function App() {
  const [destinations, setdestinations] = useState([
    {
      id: Math.random(),
      title: "Djerba",
      country: "Tunisia",
      description: "Discover the beautiful beaches of Djerba.",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      price: 450,
      rating: 5,
      flightDuration: "1 hour",
      airline: "Tunisair",
      bestSeason: "April to October"
    },
    {
      id: Math.random(),
      title: "Paris",
      country: "France",
      description: "Discover the Eiffel Tower and the French capital.",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      price: 1200,
      rating: 4,
      flightDuration: "2 hours 30 minutes",
      airline: "Tunisair",
      bestSeason: "April to June"
    },
    {
      id: Math.random(),
      title: "Rome",
      country: "Italy",
      description: "Explore the historical monuments of Rome.",
      image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5",
      price: 950,
      rating: 5,
      flightDuration: "1 hour 30 minutes",
      airline: "Tunisair",
      bestSeason: "April to June"
    },
    {
      id: Math.random(),
      title: "Barcelona",
      country: "Spain",
      description: "Enjoy the beaches and architecture of Barcelona.",
      image: "https://images.unsplash.com/photo-1583422409516-2895a77efded",
      price: 800,
      rating: 3,
      flightDuration: "1 hour 45 minutes",
      airline: "Tunisair",
      bestSeason: "May to September"
    }
  ]);

  const [text, settext] = useState("");
  const [rating, setrating] = useState("all");

  return (
    <div>
      <Navbarr
        destinations={destinations}
        setdestinations={setdestinations}
        settext={settext}
        rating={rating}
        setrating={setrating}
      />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/destinations"
          element={
            <Destinations
              destinations={destinations}
              text={text}
              rating={rating}
            />
          }
        />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route
          path="/destinations/:id"
          element={<Details destinations={destinations} />}
        />
      </Routes>
    </div>
  );
}

export default App;
