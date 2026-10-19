import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function DestinationCard({ el }) {
  return (
    <Card className="destination-card">
      <Card.Img
        variant="top"
        src={el.image}
        alt={el.title}
        className="destination-image"
      />

      <Card.Body>
        <Card.Title>{el.title}</Card.Title>

        <Card.Text>{el.description}</Card.Text>

        <div className="rating">
          {"★".repeat(el.rating)}
          <span className="empty-stars">
            {"☆".repeat(5 - el.rating)}
          </span>
        </div>

        <div className="card-bottom">
          <h5>{el.price} TND</h5>

          <Link to={`/destinations/${el.id}`}>
            <Button variant="warning">View Details</Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
}

export default DestinationCard;
