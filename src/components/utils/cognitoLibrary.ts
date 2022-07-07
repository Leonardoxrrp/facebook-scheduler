import { CognitoUserPool, CognitoUser } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: process.env.cognitoUserPoolId,
  ClientId: process.env.cognitoAppClientId,
};
export const userPool = new CognitoUserPool(poolData);

const userData = (email) => ({
  Username: email,
  Pool: userPool,
});

// Email confirmation
export const cognitoUser = (email) => new CognitoUser(userData(email));
