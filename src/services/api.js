import axios from 'axios';

const api = axios.create({
  baseURL : 'https://rocketseat-node.herokuapp.com/api'
  //localhost:3001
});

export default api;