import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      'secondary-100': string
      terciary: string
      quaternary: string
      quinaria: string
    }
    space: []

    sizes: {
      large: string
      big: number
      regular: number
      medium: number
      small: number
    }
  }
}
