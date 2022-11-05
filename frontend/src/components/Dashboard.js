import React from "react";
import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";
import Groups from "./Groups";
import RecommendedGroups from "./RecommendedGroups";
import "./Dashboard.css";

const Dashboard = (props) => {
  const now = 10;
  return (
    <Container className="dashboard-container">
      <Row>
        <Col className="mt-3 dashboard-col d-flex flex-column h-100 justify-content-center gap-1">
          <Row>
            <Card className="w-100 d-flex flex-column justify-content-center align-items-center">
              <Card.Title>Upcoming Events</Card.Title>
              
            </Card>
          </Row>
          <Row>
            <Card className="w-100 d-flex flex-column justify-content-center align-items-center">
              <Card.Title>Rewards</Card.Title>
              <ProgressBar className="w-100" now={now} label={`${now} visits`} max="20"/>
            </Card>
          </Row>
        </Col>

        <Col className=" mt-3 d-flex h-100vh justify-content-center gap-1">
          <RecommendedGroups />
        </Col>

        <Col className=" mt-3 d-flex flex-column justify-content-center gap-1">
          <Row>
            <Groups />
          </Row>
          <Row>
            <Card className="w-100 d-flex flex-column justify-content-center align-items-center">
              <Card.Title>Chats</Card.Title>
            </Card>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
