import React, { useEffect } from "react";
import { Container, Form, Button, ListGroup } from "react-bootstrap";
import DirectoryItem from "../components/DirectoryItem";
import NavbarComponent from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUsers,
  getAllUsers,
  getUsersStatus,
  getUsersError,
} from "../redux/usersSlice";

const sample = [
  {
    id: 0,
    name: "Alexandra Mauer",
  },
  {
    id: 1,
    name: "Jacob Miller",
  },
  {
    id: 2,
    name: "John Smith",
  },
];

const DirectoryScreen = () => {
  const dispatch = useDispatch();
  const users = useSelector(getAllUsers);
  const usersStatus = useSelector(getUsersStatus);
  const usersError = useSelector(getUsersError);

  useEffect(() => {
    if (usersStatus === "idle") {
      dispatch(fetchUsers());
    }
  }, [dispatch, usersStatus]);

//   user(id, isAdmin, location, name, email, tags, count_of_event)"
  return (
    <>
      <NavbarComponent />
      <Container className="d-flex flex-column align-items-center justify-content-center">
        <h1 className="mt-2">Explore</h1>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>

        <ListGroup className="mt-2">
          {usersStatus === "succeeded" && users.map((user) => {
            return <DirectoryItem key={user[0]} name={user[3]} />;
          })}
        </ListGroup>
      </Container>
    </>
  );
};

export default DirectoryScreen;
