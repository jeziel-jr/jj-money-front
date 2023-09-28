import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://jj-money-api-production.up.railway.app',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
})
