import axios from 'axios';

// DO NOT USE BELOW API KEY as it has already been deleted.
const KEY = '';
const BASE_URL = 'https://www.googleapis.com/youtube/v3'

// Create preconfigured instance of Axios.
export default axios.create({
  baseURL: `${BASE_URL}`,
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: `${KEY}`
  }
});

