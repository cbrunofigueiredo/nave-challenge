import { useUser } from 'context/user'
import { BrowserRouter } from 'react-router-dom'

import AuthenticatedApp from './AuthenticatedApp'
import UnauthenticatedApp from './UnauthenticatedApp'

const RoutesComponent = () => {
  const { user } = useUser()

  return <BrowserRouter> {user ? <AuthenticatedApp /> : <UnauthenticatedApp />} </BrowserRouter>
}

export { RoutesComponent }
