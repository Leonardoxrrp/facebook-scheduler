import React, { useContext } from 'react';
import {
  Navigate, Outlet,
} from 'react-router-dom';
import SignPage from '../../pages/SignPage';
import { cognitoContext } from '../AppContext';

function PublicRoute() {
  const { status } = useContext(cognitoContext);
  return status ? (
    <Navigate to="/dashboard" />
  ) : (
    <SignPage>
      <Outlet />
    </SignPage>
  );
}
export default PublicRoute;
