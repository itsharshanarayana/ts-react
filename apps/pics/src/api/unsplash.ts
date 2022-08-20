import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
      Authorization: 'Client-ID 6_s3vY00GqZsb1D_4mYqFUgKJ62zvH8'
    }
  }
);
