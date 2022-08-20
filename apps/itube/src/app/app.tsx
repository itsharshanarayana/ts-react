// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import React from "react";

import {AppProps} from "../types/app-types";
import {AppState} from "../types/app-types";
import SearchBar from "../components/search-bar/search-bar";

class App extends React.Component<AppProps, AppState> {

  override render() {
    return (
      <div>
        <SearchBar
          onSearchSubmit={this.onSearchSubmit}
        />
      </div>
    );
  }

  onSearchSubmit = (searchTerm: string) => {
    console.log("Search term:", searchTerm);
  }
}

export default App;
