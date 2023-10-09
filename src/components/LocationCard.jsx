import React from "react";
import { Card } from "react-bootstrap";

function LocationCard({ name, type, dimension, totalResidents }) {
  return (
    <Card className="shadow-sm rounded-3">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Type: {type} <br />
          Dimension: {dimension} <br />
          Residents: { totalResidents }
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default LocationCard;
