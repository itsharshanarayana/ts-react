// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import React from "react";

import {AppProps} from "../types/app-types";
import {AppState} from "../types/app-types";

class App extends React.Component<AppProps, AppState> {

  override render() {
    return (
      <>
        <h1>ITube Application</h1>
        <div/>
      </>
    );
  }
}

export default App;
