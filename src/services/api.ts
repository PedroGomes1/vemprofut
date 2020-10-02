import axios from 'axios';

const api = axios.create({
  baseURL: 'https://afcb69b323dc.ngrok.io',
});

export default api;
