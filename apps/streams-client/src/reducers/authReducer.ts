import {AuthAction} from "../actions/updateAuthActionCreator";

export interface ReducerState {
  isSignedIn?: boolean;
}

type AuthState = boolean;
// const INITIAL_STATE: ReducerState = { isSignedIn: null };

export default (state: AuthState = false, action: AuthAction): AuthState  => {
  console.log("authReducer:", state, action.type);
  if (action.type === 'UPDATE_AUTH') {
    switch (action.payload.authType) {
      case 'SIGN_IN':
        console.log('authReducer: sign in action ...', action.payload.isSignedIn);
        return action.payload.isSignedIn;
      case 'SIGN_OUT':
        console.log('authReducer: sign out action ...', action.payload.isSignedIn);
        return action.payload.isSignedIn;
    }
  }
  return state;
};
