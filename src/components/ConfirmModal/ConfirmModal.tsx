import { Column, Text, Button, Row } from 'components'
import { useNaver } from 'context/naver'
import { useHistory } from 'react-router-dom'
import { deleteNaver } from 'services/naver'
import styled from 'styled-components'

interface ConfirmFormProps {
  type: 'delete' | 'create' | 'update' | 'deleteWithButton'
}

const ConfirmModalComponent: React.FC<ConfirmFormProps> = ({ type }: ConfirmFormProps) => {
  const history = useHistory()
  const { changeVisibileModal, setStatusForm, naverUserId } = useNaver()

  const handleSubmit = (naverId: string) => {
    try {
      deleteNaver(naverId)
      setStatusForm('delete')
    } catch (error) {
      console.error(error)
    }
  }

  const closeModal = () => {
    changeVisibileModal()
    history.replace('/')
  }

  const typeConfirmModal = {
    create: { title: 'Naver criado', subtitle: 'Naver criado com sucesso!' },
    delete: { title: 'Naver excluído', subtitle: 'Naver excluído com sucesso!' },
    update: { title: 'Naver atualizado', subtitle: 'Naver atualizado com sucesso!' },
    deleteWithButton: { title: 'Excluir Naver', subtitle: 'Tem certeza que deseja excluir este Naver?' }
  }

  return (
    <ConfirmModal>
      <Column
        padding={32}
        position='relative'
        width={592}
        height={type == 'deleteWithButton' ? 233 : 160}
        backgroundColor={'terciary'}
      >
        {type !== 'deleteWithButton' && (
          <svg
            onClick={closeModal}
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
        )}

        <Column>
          <Text variant='big600'>{typeConfirmModal[type].title}</Text>
          <Text marginTop={24} variant='regular400'>
            {typeConfirmModal[type].subtitle}
          </Text>
        </Column>

        {type == 'deleteWithButton' && (
          <Row marginLeft='auto' marginTop={32}>
            <Button onClick={() => changeVisibileModal()} width='medium' variant='terciary'>
              Cancelar
            </Button>
            <Button onClick={() => handleSubmit(naverUserId)} marginLeft={24} width='medium' variant='primary'>
              Excluir
            </Button>
          </Row>
        )}
      </Column>
    </ConfirmModal>
  )
}

const ConfirmModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    position: absolute;
    right: 24px;
    top: 24px;
  }
`

export default ConfirmModalComponent
