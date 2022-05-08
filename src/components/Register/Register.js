import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  function handleRegister(event) {
    event.preventDefault();
    const user = { email, password };
    event.target.reset();
  }

  return (
    <div className="Login">
          <SocialLogin></SocialLogin>
      <Form onSubmit={handleRegister}>
        <Form.Group size="lg" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            onBlur={(e) => setName(e.target.value)}
            placeholder="name"
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            onBlur={(e) => setEmail(e.target.value)}
            placeholder="email"
            required
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            onBlur={(e) => setPassword(e.target.value)}
            placeholder="password"
            required
          />
        </Form.Group>
        <Form.Group size="lg" controlId="confirmPassword">
          <Form.Label>confirm password</Form.Label>
          <Form.Control
            type="confirmPassword"
            onBlur={(e) => setConfirmPassword(e.target.value)}
            placeholder="confirm password"
            required
          />
        </Form.Group>
        <Button block size="lg" type="submit" className="my-2">
          SignUp
        </Button>
      <p>Already have an account ? <Link to='/login'>Sign-In</Link></p>
      </Form>
    </div>
  );
};

export default Register;
