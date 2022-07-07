import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import {
  Link,
} from 'react-router-dom';
import { userPool, cognitoUser } from '../utils/cognitoLibrary';

function Login() {
  const login = () => {

  };

  return (
    <div className="login-container">
      <span className="login-dot">
        <FontAwesomeIcon icon={faUserAstronaut} size="3x" style={{ color: 'grey' }} />
      </span>
      <h3 className="text-secondary login-headline">Login</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email..." className="rounded-pill login-input login-pill-height" />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password..." className="rounded-pill login-input login-pill-height " />
        </Form.Group>
        <Button onClick={login} variant="primary" type="submit" className="rounded-pill login-pill-height login-btn" style={{ width: '100%' }}>
          Sign in
        </Button>
        <Form.Text className="text-muted login-signup-text">
          <span>Not a member?</span>
          {' '}
          <Link to="signup">Signup</Link>
        </Form.Text>
      </Form>
    </div>

  );
}

export default Login;
