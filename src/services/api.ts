import axios from 'axios';

const api = axios.create({
  baseURL: 'https://b85743e69bc0.ngrok.io',
});

export default api;
