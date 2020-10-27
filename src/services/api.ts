import axios from 'axios';

const api = axios.create({
  baseURL: 'https://e9fe2416383e.ngrok.io',
});

export default api;
