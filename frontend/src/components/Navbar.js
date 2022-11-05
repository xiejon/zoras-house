import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";

const NavbarComponent = (props) => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/home">Zora's House</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/home">Groups</Nav.Link>
        </Nav>
        <Nav className="me-auto">
          <Nav.Link href="/explore">Explore</Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as:{" "}
            <a href="/home" style={{ color: "white" }}>
              Jane Doe
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
