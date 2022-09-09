import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
  }
  button, a {
    cursor: pointer;
    &:disabled{
      cursor: not-allowed;
    }
  }
`

export default GlobalStyles
