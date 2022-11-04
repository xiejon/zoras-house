import React from "react";
import GroupItem from "./GroupItem";
import { Card } from "react-bootstrap";

const sample = [
  {
    group_id: 0,
    user_id: 0,
    group_name: "Group1",
  },
  {
    group_id: 1,
    user_id: 1,
    group_name: "Group2",
  },
  {
    group_id: 2,
    user_id: 2,
    group_name: "Group3",
  },
];

const Groups = () => {
  return (
    <Card className="w-100 d-flex flex-column justify-content-center align-items-center">
      <Card.Title>Groups</Card.Title>
      <Card.Body>
        {sample.map((group) => {
          return (
            <GroupItem
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

export default Groups;
