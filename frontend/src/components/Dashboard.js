import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Dashboard = (props) => {
  return (
    <Container>
      <Row>
        <Col className="d-flex flex-column h-100 justify-content-center">
          <Row>
            <Card className="w-100 d-flex flex-column justify-content-center align-items-center">
              <Card.Title>Recommended</Card.Title>
            </Card>
          </Row>
          <Row>
            <Card className="w-100 d-flex flex-column justify-content-center align-items-center">
              <Card.Title>Recommended</Card.Title>
            </Card>
          </Row>
        </Col>

        <Col className="d-flex h-100vh justify-content-center">
          <Card className="w-100 d-flex flex-column justify-content-center align-items-center">
            <Card.Title>Recommended</Card.Title>
          </Card>
        </Col>

        <Col className="d-flex flex-column justify-content-center">
        <Row>
            <Card className="w-100 d-flex flex-column justify-content-center align-items-center">
              <Card.Title>Recommended</Card.Title>
            </Card>
          </Row>
          <Row>
            <Card className="w-100 d-flex flex-column justify-content-center align-items-center">
              <Card.Title>Recommended</Card.Title>
            </Card>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
