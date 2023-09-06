import React, { useEffect, useState } from "react";
import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import MenuBar from "../components/MenuBar";

function CharacterDetailPage() {
  const { characterId } = useParams();

  const api_character = `https://rickandmortyapi.com/api/character/${characterId}`;
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      const response = await fetch(api_character);
      if (!response.ok) {
        throw new Error('La solicitud no fue exitosa');
      }
      const data = await response.json();
      setCharacter(data);
      setLoading(false);
    } catch (error) {
      console.error('Hubo un error en la solicitud:', error);
      setLoading(false); 
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <MenuBar />
      <Container>
        <Row className="mb-2">
          <Link to={`/character`}>
            <Button variant="outline-secondary" size="sm">
              Back
            </Button>{" "}
          </Link>
        </Row>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Row>
            <Col>
              <Card className="p-0" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={character.image} />
                <Card.Body>
                  <Card.Title>{character.name}</Card.Title>
                  <p className="mb-0">
                    Status:{" "}
                    {character.status === "Alive" ? (
                      <Badge bg="success">{character.status}</Badge>
                    ) : character.status === "Dead" ? (
                      <Badge bg="danger">{character.status}</Badge>
                    ) : (
                      <Badge bg="secondary">{character.status}</Badge>
                    )}
                  </p>
                  <p>
                    Origin:{" "}
                    <Link to="/">{character.origin.name}</Link>
                  </p>
                </Card.Body>
                <Card.Body>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
}

export default CharacterDetailPage;
