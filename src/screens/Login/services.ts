import { provider } from 'providers'

interface Credentials {
  email: string
  password: string
}

const getMe = () => provider.get('/v1/me')

const loginUser = (credentials: Credentials) => provider.post('/v1/users/login', credentials)

export { getMe, loginUser }
