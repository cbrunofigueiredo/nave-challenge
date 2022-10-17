import { Input, Column, Row, Button } from 'components'
import { useNaver } from 'context/naver'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { createNaver, getNaverInfo, NaverData, updateNaver } from 'services/naver'

import { createNaverSchema } from 'utils/yup-schemas'

interface routeParams {
  id: string
}
const Form: React.FC = () => {
  const { changeVisibileModal } = useNaver()
  const { id } = useParams<routeParams>()
  const { register, handleSubmit, errors, formState, reset, setValue } = useForm<NaverData>({
    validationSchema: createNaverSchema
  })

  const activeUserId = id
  const isAddMode = !activeUserId

  const onSubmit = (data: NaverData) => {
    try {
      isAddMode ? createNaver(data) : updateNaver(activeUserId, data)
      isAddMode ? reset() : ''
      changeVisibileModal()
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (!isAddMode) {
      const fillInputsWithNaverInfo = (naver: NaverData) => {
        Object.keys(naver).forEach(item => {
          if (item == 'birthdate' || item == 'admission_date') {
            naver[item] = String(new Intl.DateTimeFormat('pt-BR').format(new Date(naver[item])))
          }
          setValue(item, naver[item as keyof NaverData])
        })
      }
      const getActiveNaverInfo = async () => {
        try {
          const response = await getNaverInfo(activeUserId)

          fillInputsWithNaverInfo(response)
        } catch (error) {
          console.error(error)
        }
      }

      getActiveNaverInfo()
    }
  }, [])

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: '32px' }}>
        <Column alignItems='flex-end'>
          <Row>
            <Column>
              <Input
                maxWidth={280}
                error={errors.name}
                marginBottom={32}
                name='name'
                label='Nome'
                placeholder='Nome'
                register={register}
              />
              <Input
                error={errors.birthdate}
                maxWidth={280}
                marginBottom={32}
                name='birthdate'
                label='Idade'
                placeholder='Idade'
                register={register}
              />
              <Input
                maxWidth={280}
                error={errors.project}
                name='project'
                label='Projetos que participu'
                placeholder='Projetos que participu'
                register={register}
              />
            </Column>
            <Column marginLeft={32}>
              <Input
                error={errors.job_role}
                maxWidth={280}
                marginBottom={32}
                name='job_role'
                label='Cargo'
                placeholder='Cargo'
                register={register}
              />
              <Input
                error={errors.admission_date}
                maxWidth={280}
                marginBottom={32}
                name='admission_date'
                label='Tempo de empresa'
                placeholder='Tempo de empresa'
                register={register}
              />
              <Input
                error={errors.url}
                maxWidth={280}
                name='url'
                label='URL da foto do Naver'
                placeholder='URL da foto do Naver'
                register={register}
              />
            </Column>
          </Row>
          <Button isLoading={formState.isSubmitting} marginTop={32} width='regular' variant='primary'>
            Salvar
          </Button>
        </Column>
      </form>
    </>
  )
}

export default Form
