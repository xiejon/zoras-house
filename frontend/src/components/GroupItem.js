import React from "react"
import { Card } from 'react-bootstrap'

const GroupItem = ({groupId, userId, groupName}) => {
  return (
    <Card className="w-100">
        <Card.Title className="d-flex justify-content-center align-items-center">{groupName}</Card.Title>
    </Card>
  )
};

export default GroupItem;
