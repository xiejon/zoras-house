import React from "react"
import { Card, Badge, ListGroup} from 'react-bootstrap'

const GroupAnnouncements = (props) => {
  return (
    <Card className="w-100 d-flex flex-column justify-content-center align-items-center">
      <Card.Title className="mt-2">Announcements</Card.Title>
      <Card.Body>
        <ListGroup as="ol" numbered>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Local Meetup</div>
              Location TBD
            </div>
            <Badge bg="primary" pill>
              9
            </Badge>
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Brainstorming</div>
              Bring pencils and paper!
            </div>
            <Badge bg="primary" pill>
              7
            </Badge>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  )
};

export default GroupAnnouncements;
