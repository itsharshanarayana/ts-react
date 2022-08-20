import styles from './search-bar.module.css';
import React from "react";
import {Box, FormControl, FormLabel, TextField} from "@mui/material";

/* eslint-disable-next-line */
interface SearchBarProps {
  onSearchSubmit: (searchTerm: string) => void;
}

interface SearchBarState {
  searchTerm: string;
}

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {

  override state: SearchBarState = { searchTerm: '' };
  override render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <FormControl>
          <Box sx={{ width: 500, maxWidth: '100%', }}>
            <TextField fullWidth
                       label="Video Search"
                       id="fullWidth"
                       onChange={this.onTextFieldChange}
                       value={this.state.searchTerm}
            />
          </Box>
        </FormControl>
      </form>
    );
  }

  onTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({searchTerm: event.target.value });
  }

  onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.searchTerm);
  }

}

export default SearchBar;
