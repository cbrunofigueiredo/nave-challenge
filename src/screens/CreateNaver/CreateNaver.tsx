import { Column, Form, Row, Text, ConfirmModal } from 'components'
import { useNaver } from 'context/naver'
import { useHistory } from 'react-router-dom'

const CreateNaver: React.FC = () => {
  const { confirmForm } = useNaver()

  const history = useHistory()
  return (
    <>
      <Column margin={'0 auto'} width={'fit-content'}>
        <Row onClick={() => history.replace('/')} alignItems={'center'}>
          <svg
            style={{ cursor: 'pointer' }}
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M17.51 3.86998L15.73 2.09998L5.84 12L15.74 21.9L17.51 20.13L9.38 12L17.51 3.86998Z' fill='black' />
          </svg>
          <Text marginLeft={16} variant='big600'>
            Adicionar Naver
          </Text>
        </Row>
        <Row>
          <Form />
        </Row>
      </Column>
      {confirmForm && <ConfirmModal type={'create'} />}
    </>
  )
}

export default CreateNaver
