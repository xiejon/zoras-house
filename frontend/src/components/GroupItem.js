import React from "react"
import { Card } from 'react-bootstrap'

const GroupItem = ({groupId, userId, groupName}) => {
  return (
    <Card className="w-100">
        <Card.Title>{groupName}</Card.Title>
        <Card.Body>Body</Card.Body>
    </Card>
  )
};

export default GroupItem;
