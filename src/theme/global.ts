import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
    border: 0;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
  }
  img {
    object-fit: cover;
    object-position: center center;
  }
  ul,
  ol {
    list-style: none;
  }
  button {
    background: none;
    border: none;
  }
  button, a {
    cursor: pointer;
    &:disabled{
      cursor: not-allowed;
    }
  }
`

export default GlobalStyles
