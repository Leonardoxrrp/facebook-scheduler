import React, { useEffect, useState } from 'react';

function DashBoard() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    FB.getLoginStatus((response) => {
      if (response.status === 'connected') {
        const uid = response.authResponse.userID;
        const { accessToken } = response.authResponse;
        console.log(response, 'responseUseEffect');
        setAuth(true);
      } else if (response.status === 'not_authorized') {
        console.log('not Authorized');
      } else {
        console.log('user is not logged in to FB');
      }
    });
  }, []);
  const login = () => {
    FB.login((response) => {
      if (response.status === 'connected') {
        console.log(response, 'response');
        setAuth(true);
      } else {
        // The person is not logged into your webpage or we are unable to tell.
      }
    }, { scope: 'public_profile,email' });
  };
  const logout = () => {
    FB.logout((response) => {
      setAuth(false);
    });
  };

  console.log(auth, 'auth');
  return (
    <>
      {!auth && <button onClick={login}>Log in with Facebook</button>}
      {auth && <button onClick={logout}>log out</button>}
    </>
  );
}

export default DashBoard;
