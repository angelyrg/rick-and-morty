import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MenuBar from "../components/MenuBar";
import Episode from "../components/Episode";

export const EpisodesListPage = () => {
  const api_episodes = "https://rickandmortyapi.com/api/episode";
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      const response = await fetch(api_episodes);
      if (!response.ok){
        throw new Error('La solicitud no fue exitosa.');
      }
      const data = await response.json();
      setEpisodes(data.results);
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
      <MenuBar />
      <Container>
        <Row>
          <Col>
            <h5>Episodes</h5>
          </Col>
        </Row>
        {loading ? (
          <p>Loading...</p>
        ) : (
          episodes.length > 0 && (
            <Row>
              {episodes.map((episode) => (
                <Col key={episode.id} xs={12} md={6} lg={4} className="mb-2">
                  <Episode
                    name={episode.name}
                    episode={episode.episode}
                    air_date={episode.air_date}
                    totalCharacters={episode.characters.length}
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
