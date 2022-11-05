import React from "react";
import { Card, Form, Button } from "react-bootstrap";

const RecommendedInput = (props) => {
  const [userInput, setUserInput] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Card className="d-flex flex-column justify-content-center align-items-center">
      <Card.Title className="mb-3">What's your story?</Card.Title>
      <Form className="d-flex mb-2" onSubmit={handleSubmit}>
        <Form.Control
          type="search"
          placeholder="Part-time cat mom..."
          className="me-2 w-100"
          aria-label="Search"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <Button variant="outline-success" type="submit">
          Save
        </Button>
      </Form>
    </Card>
  );
};

export default RecommendedInput;
