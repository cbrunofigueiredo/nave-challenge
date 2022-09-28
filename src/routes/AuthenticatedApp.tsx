import { FC } from 'react'
import { Home } from 'pages'
import { Route, Routes } from 'react-router-dom'

const AuthenticatedApp: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default AuthenticatedApp
