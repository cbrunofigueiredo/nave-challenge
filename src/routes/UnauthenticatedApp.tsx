import { Login } from 'screens'

import { Route } from 'react-router-dom'

const UnauthenticatedApp = () => {
  return (
    <Route exact path='/login'>
      <Login />
    </Route>
  )
}

export { UnauthenticatedApp }
