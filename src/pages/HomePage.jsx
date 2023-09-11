import { Container, Row, Col, Card } from "react-bootstrap";
import MenuNavbar from "../components/MenuNavbar";
import { Link } from "react-router-dom";


export const HomePage = () => {
  return (
    <>
      <MenuNavbar />
      <Container>
        <Row className="mt-3" >
          <Col xs={12} md={6} lg={4} className="mb-2">
            <CardLink link_to="/character" title="Characters" />
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-2">
            <CardLink link_to="/location" title="Locations" />
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-2">
            <CardLink link_to="/episode" title="Episodes" />
          </Col>
        </Row>
      </Container>
    </>
  );
};


function CardLink({link_to, title}) {
  return (
    <Link to={link_to} style={{ textDecoration: "none" }}>
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
}
