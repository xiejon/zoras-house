import React from "react";
import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";
import Groups from "./Groups";
import RecommendedGroups from "./RecommendedGroups";
import "./Dashboard.css";
import CalendarComponent from "./CalendarComponent";
import Announcements from "./Announcements";

const Dashboard = (props) => {
  const now = 10;
  return (
    <Container className="dashboard-container">
      <Row>
        <Col className="mt-3 dashboard-col d-flex flex-column h-100  gap-1">
          <Row>
            <Card className="w-100 d-flex flex-column justify-content-center align-items-center">
              <Card.Title>Upcoming Events</Card.Title>
              <CalendarComponent />
            </Card>
          </Row>
          <Row>
            <Card className="w-100 d-flex flex-column justify-content-center align-items-center">
              <Card.Title>Zora Tokens</Card.Title>
              <ProgressBar className="w-100" now={now} label={`${now} visits`} max="20"/>
            </Card>
          </Row>
        </Col>

        <Col className=" mt-3 d-flex h-100vh justify-content-center gap-1">
          <RecommendedGroups />
        </Col>

        <Col className=" mt-3 d-flex flex-column gap-1">
          <Row>
            <Groups />
          </Row>
          <Row>
            <Announcements />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
