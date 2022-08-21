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

  console.log(auth, 'auth');
  return (
    <>
      {!auth && <button onClick={login}>Facebook</button>}
      {auth && <h1>LoggedIn</h1>}
    </>
  );
}

export default DashBoard;
