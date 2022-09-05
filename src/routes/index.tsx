import { BrowserRouter as Router, Switch } from 'react-router-dom'

import { AppProviders } from '../context'
import { useUser } from '../context/user'
import { AuthenticatedApp } from './AuthenticatedApp'
import { UnauthenticatedApp } from './UnauthenticatedApp'

const Routes = () => {
  const { user } = useUser()

  return (
    <AppProviders>
      <Router>
        <Switch> {user ? <AuthenticatedApp /> : <UnauthenticatedApp />} </Switch>
      </Router>
    </AppProviders>
  )
}

export { Routes }
