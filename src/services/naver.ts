import api from 'providers/api'

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

export const naversList = () => api.get('/navers')

export const getNaverInfo = (naverId: string) => api.get(`/navers/${naverId}`)

export const createNaver = (newUser: NaverData) => api.post('/navers', newUser)

export const deleteNaver = (naverId: string) => api.delete(`/navers/${naverId}`)

export const updateNaver = (naverId: string, naver: NaverData) => api.put(`/navers/${naverId}`, naver)
