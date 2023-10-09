import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function CharacterCard({ character, setSingleCharacter, setDebeEjecutarEfecto}) {
  return (
    <Card className="shadow-sm rounded-3" style={{ 'flexDirection': 'row' }}>
      {/* <Card.Img src={image_url} className="img-fluid rounded-end-0" style={{ width: '30%', objectFit:'cover' }} /> */}
      <Card.Body>
        <Card.Title>
          <Link onClick={()=>{setSingleCharacter(character); setDebeEjecutarEfecto(true)}} style={{ textDecoration: "none" }}>
            {character.name}
          </Link>
        </Card.Title>
        <Card.Text>
          Status: {character.status} <br />
          Species: {character.species} <br />
          Gender: {character.gender} <br />
        </Card.Text>
      </Card.Body>

    </Card>

  );
}

export default CharacterCard;
