import React from "react";
import { Card } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import GroupScreen from "../screens/GroupScreen";

const GroupItem = ({ groupId, userId, groupName }) => {
  const link = `/groups/${groupName}`;
  return (
    <Card className="w-100">
      <Card.Title className="d-flex justify-content-center align-items-center">
        <Link to={link}>{groupName}</Link>
      </Card.Title>
    </Card>
  );
};

export default GroupItem;
