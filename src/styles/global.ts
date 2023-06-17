import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors['yellow-dark']}
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors['base-title']};
    -webkit-font-smoothing: antialiased;

    @media (max-width: 1024px) {
      font-size: 0.9375rem;
    }
    @media (max-width: 768px) {
      font-size: 0.875rem
    }
  }

  body, input, textarea, button {
    font: 400 1rem 'Roboto', sans-serif;
  }

  button {
    background: none;
    border: none;
  }
`