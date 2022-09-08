import { AppProviders } from 'context'
import { useUser } from 'context/user'
import { BrowserRouter } from 'react-router-dom'

import AuthenticatedApp from './AuthenticatedApp'
import UnauthenticatedApp from './UnauthenticatedApp'

const Routes = () => {
  const { user } = useUser()

  return (
    <AppProviders>
      <BrowserRouter> {user ? <AuthenticatedApp /> : <UnauthenticatedApp />} </BrowserRouter>
    </AppProviders>
  )
}

export { Routes }
