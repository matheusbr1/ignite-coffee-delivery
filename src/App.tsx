import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme'
import { Products } from './pages/Products'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme} >
      <Products />

      <GlobalStyle />
    </ThemeProvider>
  )
}
