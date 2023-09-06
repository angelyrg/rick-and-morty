import { Container, Row, Col } from "react-bootstrap";
import MenuBar from "../components/MenuBar";
import { Link } from "react-router-dom";


export const HomePage = () => {
  return (
    <>
      <MenuBar />
      <Container>
        <Row>
          <Col xs={12} md={6} lg={4}>
            <Link to="/character">Characters</Link>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Link to="/location">Locations</Link>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Link to="/episode">Episodes</Link>
          </Col>
          
        </Row>
      </Container>
    </>
  );
};
