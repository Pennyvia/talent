import axios from 'axios';

export function getCompanies() {
  return axios.get('http://127.0.0.1:8000/crud1/')
    .then(response => response.data)
}