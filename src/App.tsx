import {
  useState, useMemo,
} from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import ConfirmEmail from './components/ConfirmEmail/ConfirmEmail';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import { cognitoContext } from './components/utils/cognitoContext';
import SignPage from './pages/SignPage';

function App() {
  const [email, setEmail] = useState(null);
  // const cognitoContext = createContext(null);

  const value = useMemo(() => ({
    email, setEmail,
  }), [email]);
  return (
    <cognitoContext.Provider value={value}>
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
    </cognitoContext.Provider>
  );
  // return <SignPage />;
}

export default App;
