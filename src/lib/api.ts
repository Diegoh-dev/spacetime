import axios from 'axios'
// 192.168.1.7
export const api = axios.create({
  baseURL: 'http://192.168.1.5:3333',
})