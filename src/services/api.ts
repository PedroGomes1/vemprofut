import axios from 'axios';

const api = axios.create({
  baseURL: 'https://c50892437200.ngrok.io',
});

export default api;
