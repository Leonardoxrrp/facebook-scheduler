import React, { useContext } from 'react';
import {
  Navigate,
} from 'react-router-dom';
import { cognitoContext } from '../AppContext';

function AuthRoute({ children }) {
  const { status } = useContext(cognitoContext);
  return status ? (
    children
  ) : <Navigate to="/" />;
}
export default AuthRoute;
