import axios from 'axios';

export const getUserAPI = () => axios
  .get('https://jsonplaceholder.typicode.com/users/1')
  .then(res => res.data);
