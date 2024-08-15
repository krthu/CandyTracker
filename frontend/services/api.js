// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const getCandies = async () => {
  const response = await api.get('/candy');
  return response.data.candys;
};