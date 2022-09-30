import api from 'services/interceptors'

interface Credentials {
  email: string
  password: string
}

const getMe = () => api.get('/v1/me')

const loginUser = (credentials: Credentials) => api.post('/v1/users/login', credentials)

export { getMe, loginUser }
