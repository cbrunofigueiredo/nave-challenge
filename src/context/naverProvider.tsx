import { FC } from 'react'
import { NaverProvider } from './naver'

const NavProviders: FC = ({ children }) => <NaverProvider>{children}</NaverProvider>

export default NavProviders
