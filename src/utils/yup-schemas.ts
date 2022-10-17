import * as yup from 'yup'

yup.setLocale({
  mixed: {
    required: 'Campo obrigatório'
  }
})

export const loginSchema = yup.object().shape({
  email: yup.string().email('Insira um e-mail válido').required(),
  password: yup.string().required()
})

export const createNaverSchema = yup.object().shape({
  name: yup.string().required(),
  birthdate: yup
    .string()
    .matches(/\d{1,2}\/\d{1,2}\/\d{4}/gm, 'A idade deve estar no formato de DD/MM/YYYY')
    .required(),
  project: yup.string().required(),
  admission_date: yup
    .string()
    .matches(/\d{1,2}\/\d{1,2}\/\d{4}/gm, 'A data de admissão deve estar no formato de DD/MM/YYYY')
    .required(),
  job_role: yup.string().required(),
  url: yup.string().min(5, 'O campo deve ter ao menos 5 caracteres').required()
})
