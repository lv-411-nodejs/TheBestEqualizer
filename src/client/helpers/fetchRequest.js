import axios from 'axios';

const getTokens = () => localStorage.getItem('_token') || false;

const fetchRequest = axios.create({
  headers: { 'Content-Type': 'application/json' },
});

fetchRequest.interceptors.request.use((config) => {
  const token = getTokens();
  if (token) config.headers['X-Access-Token'] = token;

  return config;
}, error => Promise.reject(error));

export default fetchRequest;
