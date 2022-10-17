import { createContext, useContext, useState } from 'react'
import { deleteNaver, naversList } from 'services/naver'

type TypeFormData = 'delete' | 'create' | 'update' | 'deleteWithButton'

export interface NaverData {
  name: string
  birthdate: string
  admission_date: string
  job_role: string
  user_id?: string
  project: string
  url: string
  id: string
}

interface NaverContextData {
  confirmForm: boolean
  confirmDeleteNaverUser(): void
  changeVisibileModal(): void
  deleteNaverUser(userId: string): void
  statusForm: TypeFormData
  getNaversList(): void
  listNavers: NaverData[]
  setStatusForm: React.Dispatch<React.SetStateAction<TypeFormData>>
  naverUserId: string
  setNaverUserId: React.Dispatch<React.SetStateAction<string>>
}

const NaverContext = createContext<NaverContextData>({} as NaverContextData)

const NaverProvider: React.FC = props => {
  const [confirmForm, setConfirmForm] = useState<boolean>(false)
  const [naverUserId, setNaverUserId] = useState<string>('')
  const [statusForm, setStatusForm] = useState<TypeFormData>('create')
  const [listNavers, setListNavers] = useState<NaverData[]>([])

  const changeVisibileModal = () => {
    setConfirmForm(oldstate => !oldstate)
  }

  const deleteNaverUser = async (naverId: string) => {
    try {
      await deleteNaver(naverId)

      setStatusForm('delete')
    } catch (error) {
      console.error(error)
    }
  }

  const confirmDeleteNaverUser = () => {
    changeVisibileModal()
    setStatusForm('deleteWithButton')
  }

  const getNaversList = async () => {
    const listResponse = await naversList()
    setListNavers(listResponse)
  }

  return (
    <NaverContext.Provider
      value={{
        confirmForm,
        confirmDeleteNaverUser,
        statusForm,
        setStatusForm,
        changeVisibileModal,
        deleteNaverUser,
        getNaversList,
        listNavers,
        naverUserId,
        setNaverUserId
      }}
      {...props}
    />
  )
}

const useNaver = () => useContext(NaverContext)

export { NaverProvider, useNaver }
