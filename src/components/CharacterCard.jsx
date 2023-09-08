import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function CharacterCard({ id, name, status, species, gender, image_url }) {
  return (
    <Card style={{ 'flexDirection': 'row' }}>
      <Card.Img src={image_url} className="img-fluid rounded-end-0" style={{ width: '30%', objectFit:'cover' }} />
      <Card.Body>
        <Card.Title>
          <Link to={`/character/${id}`} style={{ textDecoration: "none" }}>
            {name}
          </Link>
        </Card.Title>
        <Card.Text>
          Status: {status} <br />
          Species: {species} <br />
          Gender: {gender} <br />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CharacterCard;
