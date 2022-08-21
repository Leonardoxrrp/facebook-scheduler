import React from 'react';
import {
  HashRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { AppContext } from './components/AppContext';
import AuthApp from './components/dashboard/DashBoard';
import AuthRoute from './components/AuthRoute/AuthRoute';
import ConfirmEmail from './components/ConfirmEmail/ConfirmEmail';
import Login from './components/Login/Login';
import PublicRoute from './components/PublicRoute/PublicRoute';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <AppContext>
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={(
              <PublicRoute />
        )}
          >
            <Route
              path="/"
              element={<Login />}
            />
            <Route
              path="signup"
              element={<SignUp />}
            />
            <Route
              path="/confirm-email"
              element={<ConfirmEmail />}
            />
          </Route>
          <Route
            path="/dashboard"
            element={(
              <AuthRoute>
                <AuthApp />
              </AuthRoute>
        )}
          />
        </Routes>
      </HashRouter>
    </AppContext>
  );
}

export default App;
