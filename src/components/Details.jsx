import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Details({ destinations }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const destination = destinations.find(
    (el) => String(el.id) === id
  );

  if (!destination) {
    return (
      <div className="details-page">
        <h2>Destination not found</h2>

        <Button
          variant="warning"
          onClick={() => navigate('/')}
        >
          Return Home
        </Button>
      </div>
    );
  }

  return (
    <div className="details-page">
      <img
        src={destination.image}
        alt={destination.title}
        className="details-image"
      />

      <h1>{destination.title}</h1>
      <p>{destination.description}</p>

      <div className="details-info">
        <p><strong>Country:</strong> {destination.country}</p>
        <p><strong>Price:</strong> {destination.price} TND</p>
        <p><strong>Rating:</strong> {"★".repeat(destination.rating)}</p>
        <p><strong>Flight Duration:</strong> {destination.flightDuration}</p>
        <p><strong>Airline:</strong> {destination.airline}</p>
        <p><strong>Best Season:</strong> {destination.bestSeason}</p>
      </div>

      <Button
        variant="warning"
        onClick={() => navigate('/')}
      >
        Return Home
      </Button>
    </div>
  );
}

export default Details;
