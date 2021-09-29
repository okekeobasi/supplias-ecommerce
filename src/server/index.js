import axios from 'axios';

const server = axios.create({
  baseURL: 'https://lbtybxwzknxymtxldpek.supabase.co',
  timeoutErrorMessage: 'Network Error',
});

server.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }

  return config;
});

export default server;
