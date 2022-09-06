import { Row, RowProps } from 'components/Row'

export type ColumnProps = RowProps

const Column = (props: ColumnProps) => {
  return (
    <Row flexDirection='column' {...props}>
      {props.children}
    </Row>
  )
}

export default Column
