import axios from 'axios';

const url = 'http://192.168.10.196:8080';
// const url = 'http://localhost:8080';
export const request = axios.create({
  baseURL: url
});
