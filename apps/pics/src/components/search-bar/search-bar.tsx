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


  onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ term: event.target.value });
  }

  onFormSubmit = (event:  React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("term data: ", this.state.term);
  }


  override render() {
    return (
      <div className="ui segment">
        <form className="ui form"
              onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="term">Image Search</label>
            <input id="term"
                   type="text"
                   onChange={this.onInputChange}
                   value={this.state.term}  // This makes the element controlled element - controlled by react.
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
