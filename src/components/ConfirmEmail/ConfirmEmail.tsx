import React, { useContext, useState } from 'react';
import './confirm-email.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { cognitoUser } from '../utils/cognitoLibrary';
import { cognitoContext } from '../utils/cognitoContext';

function ConfirmEmail() {
  const [code, setCode] = useState('');
  const { email } = useContext(cognitoContext);
  const confirmEmail = (e) => {
    e.preventDefault();
    cognitoUser(email).confirmRegistration(code, true, (err, result) => {
      if (err) {
        alert(err.message || JSON.stringify(err));
        return;
      }
      console.log(`call result: ${result}`);
    });
  };
  return (
    <div className="confirm-email-container">
      <Form onSubmit={confirmEmail}>
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
