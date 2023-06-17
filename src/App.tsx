import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme'
import { Products } from './pages/Products'
import { GlobalStyle } from './styles/global'
import { Layout } from './layout'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme} >
      <Layout>
        <Products />
      </Layout>

      <GlobalStyle />
    </ThemeProvider>
  )
}
