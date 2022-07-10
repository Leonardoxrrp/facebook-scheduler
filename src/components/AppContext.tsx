import React, {
  createContext, useMemo,
} from 'react';
import { authenticationDetails, cognitoUser, userPool } from './utils/cognitoLibrary';

const cognitoContext = createContext(null);

function AppContext({ children }) {
  const login = (email, password) => {
    cognitoUser(email).authenticateUser(authenticationDetails(email, password), {
      onSuccess(result) {
        const accessToken = result.getAccessToken().getJwtToken();
        console.log(accessToken, 'token');
      },

      onFailure(err) {
        alert(err.message || JSON.stringify(err));
      },
    });
  };

  const codeConfirmation = (email, code, navigate) => {
    cognitoUser(email).confirmRegistration(code, true, (err, result) => {
      if (err) {
        alert(err.message || JSON.stringify(err));
        return;
      }
      console.log(`call result: ${result}`);
      navigate('/');
    });
  };

  const createUser = (email, password, navigate) => {
    userPool.signUp(email, password, [], null, (err, data) => {
      if (err) return console.error(err);

      console.log(data);
      sessionStorage.setItem('email', email);
      navigate('/confirm-email');
    });
  };
  const value = useMemo(() => ({ login, codeConfirmation, createUser }), []);
  return (
    <cognitoContext.Provider value={value}>
      {children}
    </cognitoContext.Provider>
  );
}

export { AppContext, cognitoContext };
