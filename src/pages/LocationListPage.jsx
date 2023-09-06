import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MenuBar from "../components/MenuBar";
import Location from "../components/Location";

export const LocationListPage = () => {
  const api_locations = "https://rickandmortyapi.com/api/location";
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      const response = await fetch(api_locations);
      if (!response.ok){
        throw new Error('La solicitud no fue exitosa.');
      }
      const data = await response.json();
      setLocations(data.results);
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
            <h5>Locations</h5>
          </Col>
        </Row>
        {loading ? (
          <p>Loading...</p>
        ) : (
          locations.length > 0 && (
            <Row>
              {locations.map((location) => (
                <Col key={location.id} xs={12} md={6} lg={4} className="mb-2">
                  <Location
                    name={location.name}
                    type={location.type}
                    dimension={location.dimension}
                    totalResidents={location.residents.length}
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
