import React from "react"
import { Card } from 'react-bootstrap'

const GroupItem = ({groupId, userId, groupName}) => {
  return (
    <Card className="w-100">
        <Card.Title className="d-flex justify-content-center">{groupName}</Card.Title>
        {/* <Card.Body className="d-flex justify-content-start align-items-center">Body</Card.Body> */}
    </Card>
  )
};

export default GroupItem;
