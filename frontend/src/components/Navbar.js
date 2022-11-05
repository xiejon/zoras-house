import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCurrUser, getCurrUserStatus } from "../redux/usersSlice";
import { Link } from 'react-router-dom'

const NavbarComponent = (props) => {
  const dispatch = useDispatch();
  const currUser = useSelector(getCurrUser);
  const currUserStatus = useSelector(getCurrUserStatus);

  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/home">Zora's House</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/home">Groups</Nav.Link>
        </Nav>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/explore">Explore</Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as:{" "}
            <a href="/home" style={{ color: "white" }}>
              {currUserStatus === "succeeded" && currUser.user_info[3]}
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
