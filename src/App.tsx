import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { AppContext } from './components/AppContext';
import AuthApp from './components/AuthApp/AuthApp';
import AuthRoute from './components/AuthRoute/AuthRoute';
import ConfirmEmail from './components/ConfirmEmail/ConfirmEmail';
import Login from './components/Login/Login';
import PublicRoute from './components/PublicRoute/PublicRoute';
import SignUp from './components/SignUp/SignUp';
import SignPage from './pages/SignPage';

function App() {
  return (
    <AppContext>
      <BrowserRouter>
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
            path="/app"
            element={(
              <AuthRoute>
                <AuthApp />
              </AuthRoute>
        )}
          />
        </Routes>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
