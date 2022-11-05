import React from "react";
import { Card } from "react-bootstrap";
import GroupItem from "./GroupItem";
import { getCurrUser, getCurrUserStatus } from "../redux/usersSlice";
import { useSelector } from "react-redux";

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
  const currUser = useSelector(getCurrUser);
  const currUserStatus = useSelector(getCurrUserStatus);

  let groups;
  if (currUserStatus === "succeeded") {
    groups = currUser.list_of_categories
  }

  return (
    <Card className="w-100 d-flex flex-column justify-content-center align-items-center">
      <Card.Title className="mt-2">Recommended</Card.Title>
      <Card.Body className="w-100 d-flex flex-column gap-1">
        {currUserStatus === "succeeded" && groups.map((group, index) => {
          console.log(group)
          return (
            <GroupItem
              key={index}
              groupName={group}
            />
          );
        })}
      </Card.Body>
    </Card>
  );
};

export default RecommendedGroups;
