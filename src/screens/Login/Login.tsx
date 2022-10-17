import { FC } from 'react'
import { useForm } from 'react-hook-form'

import { Column, Input, Button } from 'components'
import { loginSchema } from 'utils/yup-schemas'
import { Credentials, useUser } from 'context/user'

import logo from 'assets/images/logo.png'
import { useHistory } from 'react-router-dom'

interface LoginValues {
  email: string
  password: string
}

const Login: FC = () => {
  const { register, handleSubmit, errors, formState } = useForm<LoginValues>({ validationSchema: loginSchema })
  const { login } = useUser()
  const history = useHistory()

  const onSubmit = (data: Credentials) => {
    login(data)
    history.replace('/')
  }

  return (
    <Column bg='terciary' minHeight='100vh' alignItems='center' justifyContent='center'>
      <Column border={'1px solid #212121'} bg='terciary' p={'40px 32px'} alignItems='center'>
        <img style={{ marginBottom: '40px' }} src={logo} alt='Foguete com o nome da empresa' />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input name='email' register={register} label='E-mail' placeholder='e-mail' error={errors.email} mb={32} />
          <Input
            name='password'
            register={register}
            label='Senha'
            placeholder='******'
            type='password'
            error={errors.password}
            mb={32}
          />

          <Button variant='primary' isLoading={formState.isSubmitting}>
            Entrar
          </Button>
        </form>
      </Column>
    </Column>
  )
}

export default Login
