import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme'
// import { Products } from './pages/Products'
import { GlobalStyle } from './styles/global'
import { Layout } from './layout'
import { Checkout } from './pages/Checkout'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme} >
      <Layout>
        {/* <Products /> */}
        <Checkout />
      </Layout>

      <GlobalStyle />
    </ThemeProvider>
  )
}
