import React, { useContext, useState } from 'react';
import {
  useNavigate,
  Link,
} from 'react-router-dom';

// import { CognitoUserPool } from 'amazon-cognito-identity-js';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './sign-up.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import { userPool } from '../utils/cognitoLibrary';
import { cognitoContext } from '../utils/cognitoContext';

function SignUp() {
  const navigate = useNavigate();
  const { email, setEmail } = useContext(cognitoContext);
  // const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const createUser = (e) => {
    e.preventDefault();
    userPool.signUp(email, password, [], null, (err, data) => {
      if (err) return console.error(err);

      console.log(data);
      navigate('/confirm-email');
    });
  };
  console.log(password);
  return (
    <div className="sign-up-container">
      <span className="sign-up-dot">
        <FontAwesomeIcon icon={faPuzzlePiece} size="3x" style={{ color: 'grey' }} />
      </span>
      <h3 className="text-secondary sign-up-headline">Sign Up</h3>
      <Form onSubmit={createUser}>
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
