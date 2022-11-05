import React, { useEffect } from "react";
import GroupItem from "./GroupItem";
import axios from "axios";
import { Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
// import {
//   fetchGroups,
//   getAllGroups,
//   getGroupsStatus,
//   getGroupsError,
// } from "../redux/groupsSlice";
import {
    fetchUsers,
    getAllUsers,
    getUsersStatus,
    getUsersError,
    getCurrUserStatus
  } from "../redux/usersSlice";
import { getCurrUser } from "../redux/usersSlice";

const Groups = () => {
    const dispatch = useDispatch();
    const currUser = useSelector(getCurrUser);
    const currUserStatus = useSelector(getCurrUserStatus);

    let userGroups;
    if (currUserStatus === "succeeded") {
        userGroups = currUser.user_groups
    }
    
  return (
    <Card className="w-100 d-flex flex-column justify-content-center align-items-center">
      <Card.Title className="mt-2 d-flex align-items-center justify-content-center">
        Groups
      </Card.Title>
      <Card.Body className="w-100 d-flex flex-column gap-1">
        {currUserStatus === "succeeded" &&
          userGroups.map((group) => {
            return (
              <GroupItem
                key={group.group_id}
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
