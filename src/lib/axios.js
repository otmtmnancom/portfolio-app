import axios from 'axios'

import config from '../config'

export default axios.create({
  baseURL: config.apiUrl,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
