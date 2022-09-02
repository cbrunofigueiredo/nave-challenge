import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

import { GetMe, LoginUser } from '../screens/Login/services'
import { GetToken, SetToken, ClearToken } from '../utils/token'

interface Credentials {
  email: string
  password: string
}

interface UserData {
  name: string
  email: string
}

interface UserContextData {
  user: UserData | null
  isFetchingUser: boolean
  Login(credentials: Credentials): Promise<void>
  Logout(): void
}

interface Props {
  children: ReactNode
}

const UserContext = createContext<UserContextData>({} as UserContextData)

const UserProvider = (props: Props) => {
  const [isFetchingUser, setIsFetchingUser] = useState(true)
  const [user, setUser] = useState<UserData | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      const token = await GetToken()
      try {
        if (token) {
          // const userResponse = await GetMe()
          // return setUser(userResponse)
        }
        if (['/login'].includes(window.location.pathname)) {
          return
        }
        window.location.href = '/login'
      } catch (error) {
        console.log('error', error)
      } finally {
        setIsFetchingUser(false)
      }
    }
    fetchUser()
  }, [])

  const Login = async (credentials: Credentials) => {
    try {
      // const loginResponse = await LoginUser(credentials)
      // SetToken(loginResponse.token)
      // setUser(loginResponse)
    } catch (error) {
      console.log('error', error)
    }
  }

  const Logout = () => {
    ClearToken()
    setUser(null)
  }

  return <UserContext.Provider value={{ user, isFetchingUser, Login, Logout }} {...props} />
}

const useUser = () => useContext(UserContext)

export { UserProvider, useUser }
