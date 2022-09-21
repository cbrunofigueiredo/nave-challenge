import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { useUser } from 'context/user'
import { AppProviders } from 'context'

import { theme, GlobalStyles } from 'theme'

import AuthenticatedApp from './AuthenticatedApp'
import UnauthenticatedApp from './UnauthenticatedApp'

const App: FC = () => {
  const { user } = useUser()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppProviders>
        <BrowserRouter> {user ? <AuthenticatedApp /> : <UnauthenticatedApp />} </BrowserRouter>
      </AppProviders>
    </ThemeProvider>
  )
}

export default App
