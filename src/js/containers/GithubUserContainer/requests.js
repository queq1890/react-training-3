import axios from 'axios';

export const getUserAPI = () => axios.get('https://api.github.com/users/queq1890').then(res => res.data);
