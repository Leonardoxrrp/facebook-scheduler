import React, { useContext, useState } from 'react';
import './confirm-email.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { cognitoContext } from '../AppContext';

function ConfirmEmail() {
  const [code, setCode] = useState('');
  const { codeConfirmation } = useContext(cognitoContext);
  const navigate = useNavigate();
  const sessesionEmail = sessionStorage.getItem('email');

  const onSubmit = (e) => {
    e.preventDefault();
    codeConfirmation(sessesionEmail, code, navigate);
  };
  return (
    <div className="confirm-email-container">
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control placeholder="Insert the confirmation code" className="rounded-pill sign-up-input sign-up-pill-height" value={code} onChange={(e) => setCode(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit" className="rounded-pill sign-up-pill-height sign-up-btn" style={{ width: '100%' }}>
          Confirm your email
        </Button>
        {/* <Form.Text className="text-muted sign-up-signup-text">
            <span>You will need to check your email</span>
            </Form.Text> */}
      </Form>

    </div>
  );
}

export default ConfirmEmail;
