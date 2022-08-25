import axios from 'axios';

const BASE_URL = 'https://en.wikipedia.org';

export default axios.create({
  baseURL: `${BASE_URL}`,
  params: {
    action: 'query',
    list: 'search',
    format: 'json',
    origin: '*'
  },
});

