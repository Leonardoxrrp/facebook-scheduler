import React, { useContext, useState } from 'react';
import {
  Link, useNavigate,
} from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './sign-up.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import { cognitoContext } from '../AppContext';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { createUser } = useContext(cognitoContext);
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    createUser(email, password, navigate);
  };

  return (
    <div className="sign-up-container">
      <span className="sign-up-dot">
        <FontAwesomeIcon icon={faPuzzlePiece} size="3x" style={{ color: 'grey' }} />
      </span>
      <h3 className="text-secondary sign-up-headline">Sign Up</h3>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email..." className="rounded-pill sign-up-input sign-up-pill-height" value={email} onChange={(e) => setEmail(e.target.value)} />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password..." className="rounded-pill sign-up-input sign-up-pill-height" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit" className="rounded-pill sign-up-pill-height sign-up-btn" style={{ width: '100%' }}>
          Sign Up
        </Button>
        <Form.Text className="text-muted sign-up-signup-text">
          <span>Already have an account?</span>
          <Link to="/">Log in</Link>
        </Form.Text>
      </Form>
    </div>

  );
}

export default SignUp;
