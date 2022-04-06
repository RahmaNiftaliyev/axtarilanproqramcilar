import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const isDisabled = [email, password].every(Boolean);
  const navigate = useNavigate();

  const setErrorController = (callback) => {
    callback("pls set all fields");
    setTimeout(() => callback(""), 2000);
  };

  const handleSubmit = (e) => {
    if (!isDisabled) {
      setErrorController(setError);
    }

    e.preventDefault();
  };

  return (
    <div className="homeBackground">
      <div className="p-1 formContainer">
        <Form onSubmit={handleSubmit} autoComplete="off">
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder={
                error && error.length > 0 ? error : "Enter your email"
              }
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder={
                error && error.length > 0 ? error : "Enter your password"
              }
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Button color="primary" block outline>
              Login
            </Button>
          </FormGroup>
        </Form>
        <FormGroup className="d-flex flex-column">
          <Link to="/recovery">Forgot Password?</Link>
          <Button
            type
            primary
            outline
            block
            onClick={() => navigate("/register")}
          >
            Sign up for Axtarılan proqramçılar
          </Button>
        </FormGroup>
      </div>
    </div>
  );
};

export default Login;
