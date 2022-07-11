import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import {
  Link, useNavigate,
} from 'react-router-dom';
import { cognitoContext } from '../AppContext';

function Login() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const { login } = useContext(cognitoContext);
  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password, navigate);
  };
  return (
    <div className="login-container">
      <span className="login-dot">
        <FontAwesomeIcon icon={faUserAstronaut} size="3x" style={{ color: 'grey' }} />
      </span>
      <h3 className="text-secondary login-headline">Login</h3>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email..." className="rounded-pill login-input login-pill-height" value={email} onChange={(e) => setEmail(e.target.value)} />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password..." className="rounded-pill login-input login-pill-height" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit" className="rounded-pill login-pill-height login-btn" style={{ width: '100%' }}>
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
