import React, { useEffect } from "react";
import GroupItem from "./GroupItem";
import axios from "axios";
import { Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchGroups,
  getAllGroups,
  getGroupsStatus,
  getGroupsError,
} from "../redux/groupsSlice";

const Groups = () => {
  const dispatch = useDispatch();
  const groups = useSelector(getAllGroups);
  const groupsStatus = useSelector(getGroupsStatus);
  const groupsError = useSelector(getGroupsError);

  useEffect(() => {
    if (groupsStatus === "idle") {
      dispatch(fetchGroups());
    }
  }, [dispatch, groupsStatus]);

  return (
    <Card className="w-100 d-flex flex-column justify-content-center align-items-center">
      <Card.Title className="d-flex align-items-center justify-content-center">
        Groups
      </Card.Title>
      <Card.Body className="w-100 d-flex flex-column gap-1">
        {groupsStatus === "succeeded" &&
          groups.map((group) => {
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
