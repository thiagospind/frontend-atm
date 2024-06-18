import axios from 'axios';

const SERVER_URL: string = 'http://localhost:8080' ;

const api = axios.create({
  baseURL: SERVER_URL,
});

export default api;