
export interface Payload {
  authType: string;
  isSignedIn: boolean;
 }

export interface AuthAction {
  type: 'UPDATE_AUTH'
  payload: Payload;
}

export default (isSignedIn: boolean, authType: string): AuthAction => {
  console.log('updateAuthActionCreator: ', isSignedIn, authType);
  return {
    type: 'UPDATE_AUTH',
    payload: {
      isSignedIn,
      authType
    }
  };
};
