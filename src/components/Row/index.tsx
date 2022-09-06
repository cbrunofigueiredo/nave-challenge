import { ReactNode } from 'react'
import styled from 'styled-components'
import {
  space,
  layout,
  color,
  border,
  position,
  flexbox,
  SpaceProps,
  LayoutProps,
  ColorProps,
  BorderProps,
  PositionProps,
  FlexboxProps
} from 'styled-system'

export interface RowProps extends SpaceProps, LayoutProps, ColorProps, BorderProps, PositionProps, FlexboxProps {
  children?: ReactNode
}

const Row = styled.div<RowProps>({ display: 'flex' }, space, layout, color, border, position, flexbox)

export { Row }
