import { FC } from 'react'
import { Login } from 'pages'
import { Route, Routes } from 'react-router-dom'

const UnauthenticatedApp: FC = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default UnauthenticatedApp
