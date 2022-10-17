import { Text, Row, Column } from 'components'
import { NaverData, useNaver } from 'context/naver'
import { useHistory } from 'react-router-dom'

import styled from 'styled-components'

interface CardComponentProps extends NaverData {
  showDetailsUser: () => void
}

const CardComponent: React.FC<CardComponentProps> = ({
  id,
  url,
  name,
  job_role,
  showDetailsUser
}: CardComponentProps) => {
  const { confirmDeleteNaverUser, setNaverUserId } = useNaver()
  const history = useHistory()

  function handleDeleteNaver(naverId: string) {
    confirmDeleteNaverUser()
    setNaverUserId(naverId)
  }

  return (
    <Card>
      <Column marginRight={32}>
        <img onClick={showDetailsUser} src={url} alt={name} />
        <Text margin='16px 0px 4px' variant='regular'>
          {name}
        </Text>
        <Text marginBottom={13} variant='small'>
          {job_role}
        </Text>
        <Row>
          <svg
            onClick={() => handleDeleteNaver(id)}
            style={{ marginRight: '6px', cursor: 'pointer' }}
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M6 21H18V7H6V21ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z' fill='#212121' />
          </svg>
          <svg
            onClick={() => history.replace(`/edit/${id}`)}
            style={{ cursor: 'pointer' }}
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM21.41 6.34L17.66 2.59L15.13 5.13L18.88 8.88L21.41 6.34Z'
              fill='#212121'
            />
          </svg>
        </Row>
      </Column>
    </Card>
  )
}

const Card: React.FC = styled.div`
  height: 376px;
  cursor: pointer;

  img {
    width: 280px;
    height: 280px;
  }
`

export default CardComponent
