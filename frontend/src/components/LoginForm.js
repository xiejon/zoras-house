import React from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { setUser } from "../redux/usersSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://127.0.0.1:5000/login_path", {
        username: email,
        password: password,
      });
      console.log(data);
      dispatch(setUser(data));
      navigate("/home");
    } catch (err) {
      alert("Invalid email or password");
    }
  };

  return (
    <Form onSubmit={submitHandler} className="d-flex flex-column">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Sign In
      </Button>
    </Form>
  );
};

export default LoginForm;
