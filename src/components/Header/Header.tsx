import styled from 'styled-components'

import { Row } from 'components/Row'
import { FC } from 'react'

import logo from 'assets/images/logo.png'
import { useUser } from 'context/user'
import { useHistory, Link } from 'react-router-dom'

const Header: FC = () => {
  const { logout } = useUser()
  const history = useHistory()

  const logoutUser = () => {
    logout()
    history.replace('/login')
  }
  return (
    <HeaderContainer>
      <Row alignItems={'center'} justifyContent='space-between'>
        <Link to='/'>
          <img src={logo} alt='Foguete com o nome da empresa' />
        </Link>

        <a onClick={logoutUser} href='#'>
          Sair
        </a>
      </Row>
    </HeaderContainer>
  )
}

const HeaderContainer: React.FC = styled.header`
  padding: 30px 32px;

  a {
    font-weight: 600;
    font-size: 14px;
    color: #000;
  }
`

export default Header
