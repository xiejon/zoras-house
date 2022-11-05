import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import NavbarComponent from "../components/Navbar";

const DirectoryScreen = () => {
  return (
    <>
      <NavbarComponent />
      <Container className="d-flex flex-column align-items-center justify-content-center">
        <h1 className="mt-2">Explore</h1>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Container>
    </>
  );
};

export default DirectoryScreen;
