import { Header } from 'components'
import NavProviders from 'context/naverProvider'
import { Route } from 'react-router-dom'

import { Home, CreateNaver, EditNaver } from 'screens'

const AuthenticatedApp = () => {
  return (
    <>
      <Header />
      <NavProviders>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/create'>
          <CreateNaver />
        </Route>
        <Route path='/edit/:id'>
          <EditNaver />
        </Route>
      </NavProviders>
    </>
  )
}

export default AuthenticatedApp
