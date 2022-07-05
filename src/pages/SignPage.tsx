import React from 'react';
import './sign-page.css';
import {
  Outlet,
} from 'react-router-dom';

function SignPage() {
  return (
    <div className="sign-page-container">
      <Outlet />
    </div>
  );
}

export default SignPage;
