import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['gray-500']};
}

body {
  background-color: ${(props) => props.theme['gray-800']};
  color: ${(props) => props.theme['gray-100']};
  -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
}
`
