import React, { useEffect } from "react";
import GroupItem from "./GroupItem";
import axios from "axios";
import { Card } from "react-bootstrap";

const sample = [
  {
    group_id: 0,
    user_id: 0,
    group_name: "Women In Tech",
  },
  {
    group_id: 1,
    user_id: 1,
    group_name: "Engineers",
  },
  {
    group_id: 2,
    user_id: 2,
    group_name: "React Devs",
  },
];

const Groups = () => {
  const [groups, setGroups] = [];

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("http://127.0.0.1:5000/data");
      return data.data;
    };

    const result = fetchData()
    .catch((err) => console.log(err.message));
   
  }, []);

  return (
    <Card className="w-100 d-flex flex-column justify-content-center align-items-center">
      <Card.Title className="d-flex align-items-center justify-content-center">
        Groups
      </Card.Title>
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

export default Groups;
