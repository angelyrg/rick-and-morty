import React from "react";
import { Card } from "react-bootstrap";

function EpisodeCard({ name, episode, stream_date, totalCharacters }) {
  return (
    <Card className="shadow-sm rounded-3">
      <Card.Body>
        <Card.Title>{episode}</Card.Title>
        <Card.Text>
          Episode: <b> { name } </b><br />
          Air date: { stream_date } <br />
          Characters: { totalCharacters }
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default EpisodeCard;
