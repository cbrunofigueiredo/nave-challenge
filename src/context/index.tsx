import { FC } from 'react'

import { UserProvider } from './user'

const AppProviders: FC = ({ children }) => <UserProvider>{children}</UserProvider>

export default AppProviders
