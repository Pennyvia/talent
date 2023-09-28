import axios from 'axios';

export function getDepartment() {
  return axios.get('http://127.0.0.1:8000/crud2/')
    .then(response => response.data)
}