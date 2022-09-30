import { ReactNode } from 'react'
import { UserProvider } from './user'

interface Props {
  children: ReactNode
}

const AppProviders = (props: Props) => <UserProvider>{props.children}</UserProvider>

export { AppProviders }
