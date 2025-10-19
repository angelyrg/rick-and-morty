import React from 'react'
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


function MenuNavbar() {
  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Brand as={Link} to="/">
          R&M
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/character">
              Characters
            </Nav.Link>
            <Nav.Link as={Link} to="/location">
              Locations
            </Nav.Link>
            <Nav.Link as={Link} to="/episode">
              Episodes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MenuNavbar