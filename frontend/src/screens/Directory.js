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
import axios from "axios";

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

  const [isFilteredSearch, setIsFilteredSearch] = React.useState(false);
  const [filteredUsers, setFilteredUsers] = React.useState([]);

  const [input, setInput] = React.useState("");

  useEffect(() => {
    if (usersStatus === "idle") {
      dispatch(fetchUsers());
    }
  }, [dispatch, usersStatus]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:5000/filteredUsers", {
        tags: [input],
      })
      .then((res) => {
        setIsFilteredSearch(true);
        setFilteredUsers(res.data);
      });
  };

  let content;
  if (isFilteredSearch) {
    content = filteredUsers.map((user) => {
      return <DirectoryItem key={user[0]} name={user[3]} />;
    });
  } else {
    content =
      usersStatus === "succeeded" &&
      users.map((user) => {
        return <DirectoryItem key={user[0]} name={user[3]} />;
      });
  }

  return (
    <>
      <NavbarComponent />
      <Container className="d-flex flex-column align-items-center justify-content-center">
        <h1 className="mt-2">Explore</h1>
        <Form className="d-flex" onSubmit={handleSubmit}>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button variant="outline-success" type="submit">
            Search
          </Button>
        </Form>

        <ListGroup className="mt-2">
          {content}
        </ListGroup>
      </Container>
    </>
  );
};

export default DirectoryScreen;
