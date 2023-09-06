import React from 'react'
import { Container, Nav, Navbar } from "react-bootstrap";


function MenuBar() {
  return (
    <Navbar expand="md" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">R&M</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/character">Characters</Nav.Link>
              <Nav.Link href="/location">Locations</Nav.Link>
              <Nav.Link href="/episode">Episodes</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default MenuBar