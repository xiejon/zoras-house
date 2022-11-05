import React from "react";
import { ListGroup } from "react-bootstrap";

const DirectoryItem = ({ name }) => {
  return <ListGroup.Item>{name}</ListGroup.Item>;
};

export default DirectoryItem;
