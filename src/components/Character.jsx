import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Character({ id, name, status, species, gender }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Status: {status} <br />
          Species: {species} <br />
          Gender: {gender} <br />
        </Card.Text>
        <Link to={`/character/${id}`}>
          <Button variant="outline-secondary" size="sm">More...</Button>{" "}
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Character;
