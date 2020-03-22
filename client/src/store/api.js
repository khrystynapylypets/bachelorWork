import axios from 'axios'
import { getToken } from '../helpers/token'
import history from '../history'

export const API = axios.create({
  baseURL: process.env.REACT_APP_BASE_API,
})

export const AuthAPI = axios.create({
  baseURL: process.env.REACT_APP_BASE_API,
  headers: {
    'Content-Type': 'application/json',
  },
})

AuthAPI.interceptors.request.use((config) => {
  const token = getToken()
  config.headers['access-token'] = token || ''
  return config
})

AuthAPI.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 401) {
        history.push('/logout')
      }
      return Promise.reject(error)
    })