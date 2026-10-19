import React from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import AddDestination from './AddDestination';

function Navbarr({
  destinations,
  setdestinations,
  settext,
  rating,
  setrating
}) {
  return (
    <nav className="mynav">
      <Link to="/" className="logo">
        🌍 DestinationApp
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/destinations">Destinations</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="nav-filters">
        <Form.Control
          type="text"
          placeholder="Search destination..."
          onChange={(e) => settext(e.target.value)}
        />

        <Form.Select
          value={rating}
          onChange={(e) => setrating(e.target.value)}
        >
          <option value="all">All ratings</option>
          <option value="5">★★★★★</option>
          <option value="4">★★★★</option>
          <option value="3">★★★</option>
          <option value="2">★★</option>
          <option value="1">★</option>
        </Form.Select>

        <AddDestination
          destinations={destinations}
          setdestinations={setdestinations}
        />
      </div>
    </nav>
  );
}

export default Navbarr;
