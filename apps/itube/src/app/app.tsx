// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import React from "react";

import {AppProps, IVideoItem} from "../types/app-types";
import {AppState} from "../types/app-types";
import SearchBar from "../components/search-bar/search-bar";

import youtube from '../api/youtube';
import VideoList from "../components/video-list/video-list";
import VideoDetail from "../components/video-detail/video-detail";
import {Box, Grid, Typography} from "@mui/material";

class App extends React.Component<AppProps, AppState> {

  override render() {
    return (
      <div>

        <Box sx={{flexGrow: 1}}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <SearchBar
                onSearchSubmit={this.onSearchSubmit}
              />
            </Grid>
          </Grid>
        </Box>

        <Box sx={{flexGrow: 1}}>
          <Grid container spacing={2}>
            <Grid item xs={8} sx={{flexGrow: 1}}>
              {this.renderVideoDetail()}
            </Grid>
            <Grid item xs={4}>
              <VideoList
                videos={this.state.videos}
                onVideoSelected={this.onVideoSelected}
              />
            </Grid>
          </Grid>
        </Box>

      </div>
    );
  }

  renderVideoDetail = () => {
    if (!this.state.selectedVideo) return <div></div>;

    return (
      <div key={this.state.selectedVideo.id.videoId}>
        <VideoDetail selectedVideo={this.state.selectedVideo}/>
      </div>
    );
  }
  // Initiate App state.
  override state: AppState = {videos: []};

  // Submit API request to Youtube.
  onSearchSubmit = async (searchTerm: string) => {
    console.log("Search term:", searchTerm);

    // Call axios instance's get method.
    const response = await youtube.get('/search', {
      params: {
        q: searchTerm
      }
    });

    // Results will be available as items list.
    console.log("Results:", response.data.items);
    const videoItems: IVideoItem[] = response.data.items;
    this.setState({videos: [...videoItems]});
  }

  onVideoSelected = (video: IVideoItem) => {
    console.log("App: Selected video:", video.snippet.title);
    this.setState({selectedVideo: video})
  }
}

export default App;
