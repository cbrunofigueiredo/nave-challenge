import { Column, Row, Text } from 'components'
import { useNaver } from 'context/naver'
import { useHistory } from 'react-router-dom'
import { NaverData } from 'services/naver'

import styled from 'styled-components'

interface DetailsUserComponentProps extends NaverData {
  closeComponent: () => void
}

const DetailsUserComponent: React.FC<DetailsUserComponentProps> = ({
  name,
  url,
  admission_date,
  birthdate,
  job_role,
  project,
  id,
  closeComponent
}: DetailsUserComponentProps) => {
  const history = useHistory()
  const { confirmDeleteNaverUser, setNaverUserId } = useNaver()
  const handleDeleteNaver = (naverId: string) => {
    closeComponent()
    confirmDeleteNaverUser()
    setNaverUserId(naverId)
  }
  return (
    <DetailsUser>
      <Row position='relative' width={1006} height={503}>
        <svg
          onClick={closeComponent}
          className='closeButton'
          style={{ cursor: 'pointer' }}
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z'
            fill='#212121'
          />
        </svg>
        <Column width={'50%'} height={503}>
          <img src={url} alt={name} />
        </Column>

        <Column padding={32} width={'50%'} backgroundColor={'#fff'}>
          <Column>
            <Text variant='big600'>{name}</Text>
            <Text marginTop={10} variant='regular400'>
              {job_role}
            </Text>
          </Column>

          <Column marginTop={24}>
            <Text variant='regular'>Idade</Text>
            <Text marginTop={10} variant='regular400'>
              {new Intl.DateTimeFormat('pt-BR').format(new Date(birthdate))}
            </Text>
          </Column>

          <Column marginTop={24}>
            <Text variant='regular'>Tempo de empresa</Text>
            <Text marginTop={10} variant='regular400'>
              {new Intl.DateTimeFormat('pt-BR').format(new Date(admission_date))}
            </Text>
          </Column>

          <Column marginTop={24}>
            <Text variant='regular'>Projetos que participou</Text>
            <Text marginTop={10} variant='regular400'>
              {project}
            </Text>
          </Column>

          <Row marginTop={'auto'}>
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
      </Row>
    </DetailsUser>
  )
}

const DetailsUser = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  .closeButton {
    position: absolute;
    top: 16px;
    right: 16px;
  }
`

export default DetailsUserComponent
