import styles from './google-auth.module.css';
import React from "react";
import { connect } from 'react-redux';
import {bindActionCreators, Dispatch} from "redux";

import updateAuthActionCreator, {AuthAction} from "../../../actions/updateAuthActionCreator";

/* eslint-disable-next-line */
export interface GoogleAuthProps {
  isSignedIn?: boolean;
  updateAuth: (isSignedIn: boolean, authType: string) => AuthAction
}

export interface GoogleAuthState {
}

class GoogleAuth extends React.Component<GoogleAuthProps, GoogleAuthState> {

  override render() {
    console.log('render(): ... isSignedIn:', this.props.isSignedIn);
    return (
      <div className={styles['container']}>
        {this.renderAuthButton()}
      </div>
    );
  }

  override componentDidMount() {
    console.log("auth component mounted ...");
    this.props.updateAuth(true, 'SIGN_IN');
  }

  onSignOut = () => {
    this.props.updateAuth(false, 'SIGN_OUT');
  };

  onSignIn = () => {
    this.props.updateAuth(true, 'SIGN_IN');
  }

  renderAuthButton = () => {
    console.log("Is user signed in:", this.props.isSignedIn);
    if (this.props.isSignedIn === null) return (null);
    if (this.props.isSignedIn) {
      return (
        <button
          className="ui green google button"
          onClick={this.onSignOut}
        >
          <i className="google icon"/>
          Sign out
        </button>
      );
    } else {
      return (
        <div
          className="ui red google button"
          onClick={this.onSignIn}
        >
          <i className="google icon"/>
          Sign In
        </div>
      );
    }
  };
}

const mapStateToProps = (state: any) => {
  return {
    isSignedIn: state.auth
  }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    updateAuth: updateAuthActionCreator
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth);
