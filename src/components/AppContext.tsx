import React, {
  createContext, useEffect, useMemo, useState,
} from 'react';
import { authenticationDetails, cognitoUser, userPool } from './utils/cognitoLibrary';

const cognitoContext = createContext(null);

function AppContext({ children }) {
  const [status, setStatus] = useState(false);

  const login = (email, password) => {
    cognitoUser(email).authenticateUser(authenticationDetails(email, password), {
      onSuccess(result) {
        const accessToken = result.getAccessToken().getJwtToken();
        console.log('Logged in !');
      },
      onFailure(err) {
        alert(err.message || JSON.stringify(err));
        setStatus(false);
      },
    });
  };

  const session = () => new Promise((resolve, reject) => {
    const sessionUser = userPool.getCurrentUser();
    if (sessionUser) {
      sessionUser.getSession((err, auth) => {
        if (err) {
          reject();
        } else {
          resolve(auth);
        }
      });
    } else {
      reject();
    }
  });

  useEffect(() => {
    session().then(() => {
      setStatus(true);
    });
  });

  const codeConfirmation = (email, code, navigate) => {
    cognitoUser(email).confirmRegistration(code, true, (err, result) => {
      if (err) {
        alert(err.message || JSON.stringify(err));
        return;
      }
      console.log(`call result: ${result}`);
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

  const value = useMemo(() => ({
    login, codeConfirmation, createUser, status, setStatus, session,
  }), [status]);
  return (
    <cognitoContext.Provider value={value}>
      {children}
    </cognitoContext.Provider>
  );
}

export { AppContext, cognitoContext };
