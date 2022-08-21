import styles from './search-bar.module.css';
import React from "react";
import {Box, FormControl, FormLabel, InputLabel, OutlinedInput, TextField} from "@mui/material";
import {values} from "ag-grid-community/dist/lib/utils/generic";

/* eslint-disable-next-line */
interface SearchBarProps {
  onSearchSubmit: (searchTerm: string) => void;
}

interface SearchBarState {
  searchTerm: string;
}

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {

  override state: SearchBarState = {searchTerm: ''};

  override render() {
    return (
      <div className={styles['container']}>
        <form onSubmit={this.onFormSubmit}>
          <FormControl fullWidth sx={{m: 1}}>
            <InputLabel htmlFor="outlined-adornment-amount">Video Search</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              value={this.state.searchTerm}
              onChange={this.onInputChange}
              label="Video Search"
            />
          </FormControl>
        </form>
      </div>
    );
  }

  onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({searchTerm: event.target.value});
  }

  /*onTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({searchTerm: event.target.value });
  }*/

  onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Method passed as prop to SearchBar from App.
    this.props.onSearchSubmit(this.state.searchTerm);
  }

}

export default SearchBar;
