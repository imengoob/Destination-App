import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const emptyDestination = {
  title: "",
  country: "",
  description: "",
  image: "",
  price: "",
  rating: "5",
  flightDuration: "",
  airline: "",
  bestSeason: ""
};

function AddDestination({ destinations, setdestinations }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newdestination, setnewdestination] = useState(emptyDestination);

  const handleadd = (e) => {
    e.preventDefault();

    const destination = {
      ...newdestination,
      id: Math.random(),
      price: Number(newdestination.price),
      rating: Number(newdestination.rating)
    };

    setdestinations([...destinations, destination]);
    setnewdestination(emptyDestination);
    handleClose();
  };

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        + Add Destination
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Destination</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleadd}>
            <Form.Group className="mb-3" controlId="destinationTitle">
              <Form.Label>Name Destination</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter destination name"
                value={newdestination.title}
                onChange={(e) =>
                  setnewdestination({ ...newdestination, title: e.target.value })
                }
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="destinationCountry">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter country"
                value={newdestination.country}
                onChange={(e) =>
                  setnewdestination({ ...newdestination, country: e.target.value })
                }
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="destinationImage">
              <Form.Label>Image Destination (URL)</Form.Label>
              <Form.Control
                type="url"
                placeholder="Enter image URL"
                value={newdestination.image}
                onChange={(e) =>
                  setnewdestination({ ...newdestination, image: e.target.value })
                }
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="destinationDescription">
              <Form.Label>Description Destination</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter description"
                value={newdestination.description}
                onChange={(e) =>
                  setnewdestination({ ...newdestination, description: e.target.value })
                }
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="destinationPrice">
              <Form.Label>Price (TND)</Form.Label>
              <Form.Control
                type="number"
                min="0"
                placeholder="Enter price"
                value={newdestination.price}
                onChange={(e) =>
                  setnewdestination({ ...newdestination, price: e.target.value })
                }
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="destinationFlight">
              <Form.Label>Flight Duration</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex: 2 hours 30 minutes"
                value={newdestination.flightDuration}
                onChange={(e) =>
                  setnewdestination({ ...newdestination, flightDuration: e.target.value })
                }
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="destinationAirline">
              <Form.Label>Airline</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex: Tunisair"
                value={newdestination.airline}
                onChange={(e) =>
                  setnewdestination({ ...newdestination, airline: e.target.value })
                }
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="destinationSeason">
              <Form.Label>Best Season</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex: April to June"
                value={newdestination.bestSeason}
                onChange={(e) =>
                  setnewdestination({ ...newdestination, bestSeason: e.target.value })
                }
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="destinationRating">
              <Form.Label>Rating</Form.Label>
              <Form.Select
                value={newdestination.rating}
                onChange={(e) =>
                  setnewdestination({ ...newdestination, rating: e.target.value })
                }
              >
                <option value="5">★★★★★</option>
                <option value="4">★★★★</option>
                <option value="3">★★★</option>
                <option value="2">★★</option>
                <option value="1">★</option>
              </Form.Select>
            </Form.Group>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>

              <Button variant="warning" type="submit">
                Add
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddDestination;
