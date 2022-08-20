// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import React from "react";

import axios from 'axios';

import SearchBar from "../components/search-bar/search-bar";
import ImageList from "../components/image-list/image-list";
import unsplash from "../api/unsplash";


interface AppProps {
}

export interface ImageUrl {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

export interface ImageObject {
  id: string;
  description?: string;
  urls: ImageUrl
}
interface AppState {
  images: ImageObject[];
}

class App extends React.Component<AppProps, AppState> {

  override state: AppState = { images: [] };

  onSearchSubmit = async (term: string) => {
    const response = await unsplash.get(`/search/photos`, {
      params: {
        query: term
      }
    });

    const {results} = response.data;

    this.setState({ images: [...results] });
  };

  override render() {
    return (
      <div className="ui container">
        <h1>Pics Application</h1>
        <SearchBar onSearchSubmit={this.onSearchSubmit}/>
        <br/>
        <ImageList images={this.state.images}/>
        <div/>
      </div>
    );
  }
}

export default App;
