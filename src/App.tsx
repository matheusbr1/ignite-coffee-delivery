import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme'
import { Products } from './pages/Products'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme} >
      <Products />
    </ThemeProvider>
  )
}
