import Routes from 'routes'

import { AppProviders } from 'providers'
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyles } from 'theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <AppProviders>
      <Routes />
    </AppProviders>
  </ThemeProvider>
)

export default App
