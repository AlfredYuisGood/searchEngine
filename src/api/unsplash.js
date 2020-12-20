import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
          'Client-ID _AyeBvQxSlkz6j5EJtA_axmbQLcE7B1S_a3GywXo7oQ',
      }
});