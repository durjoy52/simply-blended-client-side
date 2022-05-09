import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import './Login.css';
const Login = () => {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const user ={email,password}
    event.target.reset()
  }

  return (
    <div className="Login">
        <SocialLogin></SocialLogin>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            onBlur={(e) => setEmail(e.target.value)} placeholder='email' required
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            onBlur={(e) => setPassword(e.target.value)} placeholder='password' required
          />
        </Form.Group>
        <Button block size="lg" type="submit" className="my-2">
          Login
        </Button>
      <p>Don't have an account ? <Link to='/register'>Register</Link></p>
      </Form>
    </div>
  );
};

export default Login;