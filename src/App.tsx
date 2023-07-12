import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme'
import { GlobalStyle } from './styles/global'
import { Layout } from './layout'
import { Products } from './pages/Products'
import { Checkout } from './pages/Checkout'
import { ConfirmedOrder } from './pages/ConfirmedOrder'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme} >
      <Layout>
        {/* <Products /> */}
        <Checkout />
        {/* <ConfirmedOrder /> */}
      </Layout>

      <GlobalStyle />
    </ThemeProvider>
  )
}
