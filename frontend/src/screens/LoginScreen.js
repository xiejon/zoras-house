import React from "react";
import { Container } from "react-bootstrap";
import LoginForm from "../components/LoginForm";
import './LoginScreen.css'

const LoginScreen = () => {
  return (
    <Container className="container d-flex justify-content-center align-items-center ">
      <LoginForm />
    </Container>
  );
};


export default LoginScreen;
