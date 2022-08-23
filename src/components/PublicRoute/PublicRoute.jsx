import React, { useContext } from 'react';
import {
  Navigate, Outlet,
} from 'react-router-dom';
import CognitoPage from '../../pages/CognitoPage';
import { cognitoContext } from '../AppContext';

function PublicRoute() {
  const { status } = useContext(cognitoContext);
  return status ? (
    <Navigate to="/dashboard" />
  ) : (
    <CognitoPage>
      <Outlet />
    </CognitoPage>
  );
}
export default PublicRoute;
