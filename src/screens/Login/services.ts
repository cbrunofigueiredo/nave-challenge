import { provider } from '../../providers'

interface Credentials {
  email: string
  password: string
}

const GetMe = () => provider.get('/v1/me')

const LoginUser = (credentials: Credentials) => provider.post('/v1/users/login', credentials)

export { GetMe, LoginUser }
