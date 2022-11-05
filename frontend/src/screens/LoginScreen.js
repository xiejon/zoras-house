import React from "react";
import { Container, Card } from "react-bootstrap";
import LoginForm from "../components/LoginForm";
import "./LoginScreen.css";
import SvgComponent from "../components/Logo";

const LoginScreen = () => {
  return (
    <Container className="login-container d-flex flex-column align-items-center ">
      <SvgComponent className="logo"/>
      <LoginForm />
    </Container>
  );
};

export default LoginScreen;
