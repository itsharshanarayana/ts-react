
export interface Payload {
  isSignedIn: boolean
}
export interface AuthAction {
  type: string;
  payload: Payload
};

export const signIn = (): AuthAction => {
  console.log('actions-index.js: signing in ...');
  return {
    type: 'SIGN_IN',
    payload: {isSignedIn: true}
  };
};

export const signOut = (): AuthAction => {
  console.log('actions-index.js: signing out ...');
  return {
    type: 'SIGN_OUT',
    payload: {isSignedIn: false}
  };
};
