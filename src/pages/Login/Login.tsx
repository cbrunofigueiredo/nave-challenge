import { Column } from 'components'
import { FC } from 'react'

const Login: FC = () => {
  return (
    <Column minHeight='100vh' alignItems='center' justifyContent='center'>
      <Column mb={20}>
        <label>* Email: </label>
        <input />
      </Column>
      <Column mb={20}>
        <label>* Password: </label>
        <input />
      </Column>
      <button>Entrar</button>
    </Column>
  )
}

export default Login
