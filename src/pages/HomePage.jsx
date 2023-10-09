import { Container, Row, Col, Card } from "react-bootstrap";
import MenuNavbar from "../components/MenuNavbar";
import { Link } from "react-router-dom";

import { faPeopleGroup, faGlobeAmericas, faListOl } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../assets/css/home.css";

export const HomePage = () => {
  return (
    <>
      <MenuNavbar />
      <Container >
        <Row className="hero-section">
          <Col className="contenido" >
            <h1>Time without purpose is a prison</h1>
          </Col>
        </Row>
        <Row className="mt-3" style={{height:"150px"}} >
          <Col xs={12} md={6} lg={4} className="mb-3 mb-md-4" style={{height:"100%"}}>
            <CardLink link_to="/character" title="Characters" icon={<FontAwesomeIcon icon={faPeopleGroup} />} />
          </Col>

          <Col xs={12} md={6} lg={4} className="mb-3 mb-md-4" style={{height:"100%"}}>
            <CardLink link_to="/location" title="Locations" icon={<FontAwesomeIcon icon={faGlobeAmericas} />}/>
          </Col>

          <Col xs={12} md={6} lg={4} className="mb-3 mb-md-4" style={{height:"100%"}}>
            <CardLink link_to="/episode" title="Episodes" icon={<FontAwesomeIcon icon={faListOl} />}/>
          </Col>
          
        </Row>
      </Container>
    </>
  );
};


function CardLink({link_to, title, icon}) {
  return (
    <Link to={link_to} style={{ textDecoration: "none" }} >
      <Card className="shadow rounded-4" style={{height:"100%"}}>
        <Card.Body className="text-center d-flex my-auto" >          
          <Card.Title className="m-auto">
            <span>{icon}</span>
            <p>{title}</p>
            </Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
}
