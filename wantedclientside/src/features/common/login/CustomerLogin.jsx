import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from './refreshTokenSetup';

const clientId =
  '688177021263-rmglgbgoe7v6kps1m3qjh50badrfjtns.apps.googleusercontent.com';

const CustomerLogin = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  

  const onSuccess = (res) => {
    console.log(`[login success] current user: ${res.profileObj}`);

    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log(`[login failure] res: ${res}`);
  };

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
            <GoogleLogin
              clientId={clientId}
              buttonText="Login with Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              // cookiePolicy={'single_host_origin'}
              isSignedIn={true}
              className="google-login-button"
            />
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
