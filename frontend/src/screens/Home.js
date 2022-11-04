import React from "react";
import { Container } from "react-bootstrap";
import NavbarComponent from "../components/Navbar";

const HomeScreen = () => {
  return (
    <>
      <NavbarComponent />
      <main style={{ minHeight: "85vh" }}>main</main>
    </>
  );
};

export default HomeScreen;
