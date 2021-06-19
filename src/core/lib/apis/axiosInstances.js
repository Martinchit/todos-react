import axios from 'axios';

export const ToDosInstance = axios.create({
  baseURL: process.env.REACT_APP_TODO_DEFAULT_ENDPOINT,
  timeout: 3000,
});
