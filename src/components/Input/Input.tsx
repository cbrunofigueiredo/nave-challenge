import { FieldError } from 'react-hook-form'
import styled, { css } from 'styled-components'

import { Column, Text } from 'components'
import { ColumnProps } from 'components/Column'

interface InputProps {
  name: string
  placeholder?: string
  error?: FieldError
  type?: string
}

interface InputComponentProps extends InputProps, ColumnProps {
  register(): void
  label?: string
  value?: string
}

const InputComponent: React.FC<InputComponentProps> = ({
  name,
  register,
  label,
  placeholder,
  error,
  type,
  ...props
}) => {
  return (
    <Column height={62} {...props}>
      {label && (
        <Text marginBottom={4} variant='regular'>
          {label}
        </Text>
      )}
      <Input name={name} ref={register} placeholder={placeholder} error={error} type={type} />
      {error?.message && (
        <Text variant='tiny' color='red'>
          {error?.message}
        </Text>
      )}
    </Column>
  )
}

const Input = styled.input<InputProps>`
  height: 40px;
  padding: 8px;
  border: 1px solid ${props => props.theme.colors['secondary-100']};
  width: 100%;
  ${({ error }) => {
    if (error?.message) {
      return css`
        border-color: red;
      `
    }
  }}
`

InputComponent.defaultProps = {
  width: 'big'
}

export default InputComponent
