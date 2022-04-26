import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { GoogleLoginButton } from 'react-social-login-buttons';


const CustomerLogin = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const isDisabled = [email, password].every(Boolean);
  const navigate = useNavigate();

  const setErrorController = (callback) => {
    callback('pls set all fields');
    setTimeout(() => callback(''), 2000);
  };

  const handleSubmit = (e) => {
    if (!isDisabled) {
      setErrorController(setError);
    }

    e.preventDefault();
  };

  return (
    <div className="homeBackground border border-1">
      <div className="p-1 formContainer w-50 px-4 py-3 login-button-logic-margin-container">
        <Form onSubmit={handleSubmit} autoComplete="off">
          <FormGroup>
            <Label htmlFor="email" className="text-erotica">
              Email
            </Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder={
                error && error.length > 0 ? error : 'Enter your email'
              }
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password" className="text-erotica">
              Password
            </Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder={
                error && error.length > 0 ? error : 'Enter your password'
              }
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Button color="primary" block outline>
              Login
            </Button>
            <GoogleLoginButton />
            <Link to="/recovery">Forgot Password?</Link>
          </FormGroup>
        </Form>
        <FormGroup className="d-flex flex-column">
          <Button
            type
            primary
            outline
            block
            color="success"
            onClick={() => navigate('/register')}
          >
            Sign up for Axtarılan proqramçılar
          </Button>
        </FormGroup>
      </div>
    </div>
  );
};

export default CustomerLogin;
