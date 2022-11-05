import React from "react";
import { Container, Form, Button, ListGroup } from "react-bootstrap";
import DirectoryItem from "../components/DirectoryItem";
import NavbarComponent from "../components/Navbar";

const sample = [
    {
        name: "Alexandra Mauer"
    },
    {
        name: "Jacob Miller"
    },
    {
        name: "John Smith"
    },
]

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

        <ListGroup className="mt-2">
          {sample.map(user => {
            return <DirectoryItem name={user.name} />
          })}
        </ListGroup>
      </Container>
    </>
  );
};

export default DirectoryScreen;
