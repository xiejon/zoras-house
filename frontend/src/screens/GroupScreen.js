import React from "react";
import { Container } from "react-bootstrap"
import NavbarComponent from "../components/Navbar";
import { useNavigate, useParams } from "react-router-dom";

const GroupScreen = () => {
    const params = useParams();
    const { id: groupName } = params;
  return (
    <Container>
        <NavbarComponent className="fluid"/>
        <h1>{groupName}</h1>
    </Container>
  );
};

export default GroupScreen;
