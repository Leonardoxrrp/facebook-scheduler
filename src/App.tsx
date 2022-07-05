import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import SignPage from './pages/SignPage';

function App() {
  return (
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
  // return <SignPage />;
}

export default App;
