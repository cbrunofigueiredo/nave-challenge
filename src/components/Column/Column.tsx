import { FC } from 'react'
import { Row } from 'components'
import { RowProps } from 'components/Row'

export type ColumnProps = RowProps

const ColumnComponent: FC<ColumnProps> = props => <Row flexDirection='column' {...props} />

export default ColumnComponent
