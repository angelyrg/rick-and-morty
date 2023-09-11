import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CharacterCard from "../components/CharacterCard";
import MenuNavbar from "../components/MenuNavbar";

export const CharactersListPage = () => {
  const api_characters = "https://rickandmortyapi.com/api/character";
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      const response = await fetch(api_characters);
      if (!response.ok){
        throw new Error('La solicitud no fue exitosa.');
      }
      const data = await response.json();
      setCharacters(data.results);
      setLoading(false);
    } catch (error) {
      console.log("Hubo un error: ", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <MenuNavbar />
      <Container>
        <Row>
          <Col>
            <h5>All characters</h5>
          </Col>
        </Row>
        {loading ? (
          <p>Loading...</p>
        ) : (
          characters.length > 0 && (
            <Row>
              {characters.map((character) => (
                <Col key={character.id} xs={12} md={6} lg={4} className="mb-2">
                  <CharacterCard
                    id={character.id}
                    name={character.name}
                    status={character.status}
                    species={character.species}
                    gender={character.gender}
                    image_url={character.image}
                  />
                </Col>
              ))}
            </Row>
          )
        )}
      </Container>
    </>
  );
};
