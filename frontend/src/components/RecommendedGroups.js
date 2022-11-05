import React from "react";
import { Card } from "react-bootstrap";
import GroupItem from "./GroupItem";

const sample = [
  {
    group_id: 0,
    user_id: 0,
    group_name: "Entrepreneurs",
  },
  {
    group_id: 1,
    user_id: 1,
    group_name: "Business Owners",
  },
  {
    group_id: 2,
    user_id: 2,
    group_name: "Doctors",
  },
];

const RecommendedGroups = (props) => {
  return (
    <Card className="w-100 d-flex flex-column justify-content-center align-items-center">
      <Card.Title>Recommended</Card.Title>
      <Card.Body className="w-100 d-flex flex-column gap-1">
        {sample.map((group) => {
          return (
            <GroupItem
              key={group.group_id}
              userId={group.user_id}
              groupId={group.group_id}
              groupName={group.group_name}
            />
          );
        })}
      </Card.Body>
    </Card>
  );
};

export default RecommendedGroups;
