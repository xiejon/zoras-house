import React from "react";
import { Card, ListGroup, Badge } from "react-bootstrap";

const Announcements = (props) => {
  return (
    <Card className="w-100 d-flex flex-column justify-content-center align-items-center">
      <Card.Title>Announcements</Card.Title>
      <Card.Body>
        <ListGroup as="ol" numbered>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Investors Meetup</div>
              Meeting on Zoom (link TBD)
            </div>
            <Badge bg="primary" pill>
              14
            </Badge>
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Physics Study Sesh</div>
              Address: 404 Local St
            </div>
            <Badge bg="primary" pill>
              14
            </Badge>
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Zora Book Club</div>
              BYOB
            </div>
            <Badge bg="primary" pill>
              14
            </Badge>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default Announcements;
