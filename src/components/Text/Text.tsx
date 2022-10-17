import { FC } from 'react'
import styled from 'styled-components'
import {
  space,
  layout,
  typography,
  color,
  variant,
  position,
  SpaceProps,
  LayoutProps,
  TypographyProps,
  ColorProps,
  PositionProps
} from 'styled-system'

type TextVariants = {
  big: 'big'
  big600: 'big600'
  medium: 'medium'
  regular: 'regular'
  regular400: 'regular400'
  small: 'small'
  tiny: 'tiny'
  large: 'large'
}

interface TextProps extends SpaceProps, LayoutProps, TypographyProps, ColorProps, PositionProps {
  variant: keyof TextVariants
}

const TextComponent: FC<TextProps> = styled.p(
  variant({
    variants: {
      large: {
        fontSize: 40,
        fontWeight: 600
      },
      big: {
        fontSize: 24,
        lineHeight: '29px'
      },
      big600: {
        fontSize: 24,
        fontWeight: 600,
        lineHeight: '29px'
      },
      medium: {
        fontSize: 20,
        lineHeight: '24px'
      },
      regular: {
        fontSize: 16,
        fontWeight: '600'
      },
      regular400: {
        fontSize: 16,
        fontWeight: '400'
      },
      small: {
        fontSize: 14,
        lineHeight: '17px'
      },
      tiny: {
        fontSize: 12,
        lineHeight: '17px'
      }
    }
  }),
  space,
  layout,
  typography,
  color,
  position
)

export default TextComponent
