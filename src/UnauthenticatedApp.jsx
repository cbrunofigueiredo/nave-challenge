import { Route } from 'react-router-dom'

import { Login } from 'screens'

const UnauthenticatedApp = () => {
  return (
    <Route exact path='/login'>
      <Login />
    </Route>
  )
}

export default UnauthenticatedApp
