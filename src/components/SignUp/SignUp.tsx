import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './sign-up.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import {
  Link,
} from 'react-router-dom';

function SignUp() {
  return (
    <div className="sign-up-container">
      <span className="sign-up-dot">
        <FontAwesomeIcon icon={faUserAstronaut} size="3x" style={{ color: 'grey' }} />
      </span>
      <h3 className="text-secondary sign-up-headline">sign-up</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email..." className="rounded-pill sign-up-input sign-up-pill-height" />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password..." className="rounded-pill sign-up-input sign-up-pill-height " />
        </Form.Group>
        <Button variant="primary" type="submit" className="rounded-pill sign-up-pill-height sign-up-btn" style={{ width: '100%' }}>
          Sign in
        </Button>
        <Form.Text className="text-muted sign-up-signup-text">
          <span>Already have an account?</span>
          {' '}
          <Link to="/">Log in</Link>
        </Form.Text>
      </Form>
    </div>

  );
}

export default SignUp;
