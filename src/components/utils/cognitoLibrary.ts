import { CognitoUserPool, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: process.env.cognitoUserPoolId,
  ClientId: process.env.cognitoAppClientId,
};
export const userPool = new CognitoUserPool(poolData);

const userData = (email) => ({
  Username: email,
  Pool: userPool,
});

const authenticationData = (email, password) => ({
  Username: email,
  Password: password,
});
// Authentication
export const authenticationDetails = (email, password) => new AuthenticationDetails(
  authenticationData(email, password),
);
// Email confirmation
export const cognitoUser = (email) => new CognitoUser(userData(email));
