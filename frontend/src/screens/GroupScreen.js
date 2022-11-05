import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import NavbarComponent from "../components/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import CalendarComponent from "../components/CalendarComponent";
import Announcements from "../components/Announcements";
import GroupAnnouncements from "../components/GroupAnnouncements";
import GroupAbout from "../components/GroupAbout";

const GroupScreen = () => {
  const params = useParams();
  const { id: groupName } = params;
  return (
    <>
      <NavbarComponent className="fluid" />
      <Container>
        <h1 className="mt-2">{groupName}</h1>
        <Row>
            <Col className="gap-2">
            <Card className="w-100 d-flex flex-column justify-content-center align-items-center">
              <Card.Title className="mt-2">Upcoming Events</Card.Title>
              <CalendarComponent />
            </Card>
            </Col>
            <Col>
            <GroupAnnouncements />
            </Col>
        </Row>
        <Row className="mt-2">
           <Col>
            <GroupAbout/>
           </Col>
        </Row>
      </Container>
    </>
  );
};

export default GroupScreen;
