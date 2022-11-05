import React from "react";
import { Container, Row, Col, Card, Button, Alert } from "react-bootstrap";
import NavbarComponent from "../components/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import CalendarComponent from "../components/CalendarComponent";
import Announcements from "../components/Announcements";
import GroupAnnouncements from "../components/GroupAnnouncements";
import GroupAbout from "../components/GroupAbout";

const GroupScreen = () => {
  const params = useParams();
  const { id: groupName } = params;

  const [isAlertVisible, setIsAlertVisible] = React.useState(false)

  const onJoinClick = (e) => {
    setIsAlertVisible(true)
  };
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
            <GroupAbout />
          </Col>
        </Row>
        <Row className="d-flex mt-2 justify-content-center align-items-center">
          <Alert className="d-flex justify-content-center align-items-center" show={isAlertVisible} variant="primary">
            <strong>Thanks for joining! Look out for an email confirmation soon.</strong>
          </Alert>
          <Button className="w-50" onClick={onJoinClick}>
            Join Now
          </Button>
        </Row>
      </Container>
    </>
  );
};

export default GroupScreen;
