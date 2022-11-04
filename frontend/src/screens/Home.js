import React from "react";
import { Container } from "react-bootstrap";
import Dashboard from "../components/Dashboard";
import NavbarComponent from "../components/Navbar";

const HomeScreen = () => {
  return (
    <>
      <NavbarComponent />
    <main style={{ minHeight: "85vh" }}><Dashboard /></main>
    </>
  );
};

export default HomeScreen;
