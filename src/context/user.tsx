import { AxiosResponse } from 'axios'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

import { getMe, loginUser } from 'services/login'
import { getToken, setToken, clearToken } from 'utils/token'

interface Credentials {
  email: string
  password: string
}

interface UserData {
  name: string
  email: string
}

interface UserContextData {
  user: AxiosResponse | UserData | null
  isFetchingUser: boolean
  login(credentials: Credentials): Promise<void>
  logout(): void
}

interface Props {
  children: ReactNode
}

const UserContext = createContext<UserContextData>({} as UserContextData)

const UserProvider = (props: Props) => {
  const [isFetchingUser, setIsFetchingUser] = useState(true)
  const [user, setUser] = useState<AxiosResponse | UserData | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      const token = await getToken()
      try {
        if (token) {
          const userResponse = await getMe()
          return setUser(userResponse)
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

  const login = async (credentials: Credentials) => {
    try {
      const loginResponse = await loginUser(credentials)
      setToken(loginResponse.token)
      setUser(loginResponse)
    } catch (error) {
      console.log('error', error)
    }
  }

  const logout = () => {
    clearToken()
    setUser(null)
  }

  return <UserContext.Provider value={{ user, isFetchingUser, login, logout }} {...props} />
}

const useUser = () => useContext(UserContext)

export { UserProvider, useUser }
