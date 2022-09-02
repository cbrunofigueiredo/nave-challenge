import { Home } from '../screens'

import { Route } from 'react-router-dom'

const AuthenticatedApp = () => {
  return (
    <Route exact path='/'>
      <Home />
    </Route>
  )
}

export { AuthenticatedApp }
