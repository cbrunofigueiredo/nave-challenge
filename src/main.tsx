import React from 'react'

import ReactDOM from 'react-dom/client'

import { Routes } from './routes'

import { GlobalStyles, theme } from 'theme'
import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>
)
