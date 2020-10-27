import axios from 'axios';

const api = axios.create({
  baseURL: 'http://e9fe2416383e.ngrok.io',
});

export default api;
