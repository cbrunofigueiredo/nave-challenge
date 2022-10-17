import api from 'providers/api'

interface Credentials {
  email: string
  password: string
}

export const getMe = () => api.get('/me')

export const loginUser = (credentials: Credentials) => api.post('/users/login', credentials)
