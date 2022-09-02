import { BrowserRouter as Router, Switch } from 'react-router-dom'

import { AuthenticatedApp } from './AuthenticatedApp'
import { UnauthenticatedApp } from './UnauthenticatedApp'

const Routes = () => {
  const user = null

  return (
    <Router>
      <Switch> {user ? <AuthenticatedApp /> : <UnauthenticatedApp />} </Switch>
    </Router>
  )
}

export { Routes }
