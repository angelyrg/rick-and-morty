import React from "react";
import { Card } from "react-bootstrap";

function EpisodeCard({ name, episode, air_date, totalCharacters }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{episode}</Card.Title>
        <Card.Text>
          Episode: <b> { name } </b><br />
          Air date: { air_date } <br />
          Characters: { totalCharacters }
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default EpisodeCard;
