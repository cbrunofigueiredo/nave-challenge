import React from 'react'

import ReactDOM from 'react-dom/client'

import { RoutesComponent } from './routes'
import { GlobalStyle } from 'theme/global'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RoutesComponent />
    <GlobalStyle />
  </React.StrictMode>
)
