import axios from 'axios';


export const API = axios.create({
  baseURL: "https://randomuser.me/api/"
})


export default API;