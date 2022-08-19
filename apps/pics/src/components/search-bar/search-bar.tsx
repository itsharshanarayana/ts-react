import styles from './search-bar.module.css';
import React from "react";

/* eslint-disable-next-line */
export interface SearchBarProps {
}

export interface SearchBarState {
  term: string;
}

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  override state: SearchBarState = {term: ''};


  override render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label htmlFor="term">Image Search</label>
            <input id="term" type="text"/>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
