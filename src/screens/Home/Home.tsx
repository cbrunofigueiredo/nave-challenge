import { Button, Column, Row, Text, Card, ConfirmModal, DetailsUser } from 'components'
import { FC, useEffect, useState } from 'react'
import { useNaver } from 'context/naver'
import { useHistory } from 'react-router-dom'
import { NaverData } from 'services/naver'

const Home: FC = () => {
  const { confirmForm, statusForm, getNaversList, listNavers } = useNaver()
  const history = useHistory()
  const [showModal, setShowModal] = useState<boolean>(false)
  const [currentUser, setCurrentUser] = useState<NaverData>({
    admission_date: '',
    birthdate: '',
    job_role: '',
    name: '',
    project: '',
    url: '',
    id: ''
  })

  const handleShowDetailsModal = (naver: NaverData) => {
    setShowModal(true)
    setCurrentUser(naver)
  }

  useEffect(() => {
    getNaversList()
  })

  return (
    <>
      <Column padding={32}>
        <Row alignItems='center' justifyContent='space-between'>
          <Text variant='large'>Navers</Text>
          <Button onClick={() => history.replace('/create')} variant='primary' width='regular'>
            Adicionar Naver
          </Button>
        </Row>
        <Row marginTop={32} flexWrap={'wrap'}>
          {listNavers.length > 0 &&
            listNavers.map(naver => (
              <Card showDetailsUser={() => handleShowDetailsModal(naver)} {...naver} key={naver.id} />
            ))}
        </Row>
      </Column>
      {confirmForm && <ConfirmModal type={statusForm} />}
      {showModal && <DetailsUser closeComponent={() => setShowModal(false)} {...currentUser} />}
    </>
  )
}

export default Home
