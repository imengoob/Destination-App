import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Home() {
  return (
    <div className="home-page">
      <h1>Find your next trip</h1>
      <p>
        Browse destinations, compare prices and ratings, and add your own favorites.
      </p>

      <Link to="/destinations">
        <Button variant="warning" size="lg">See destinations</Button>
      </Link>
    </div>
  );
}

export default Home;
