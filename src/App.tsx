import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { AppContext } from './components/AppContext';
import ConfirmEmail from './components/ConfirmEmail/ConfirmEmail';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import SignPage from './pages/SignPage';

function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignPage />}>
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
        </Routes>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
