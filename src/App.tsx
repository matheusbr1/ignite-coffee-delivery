import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme'
import { GlobalStyle } from './styles/global'
import { Layout } from './layout'
import { Products } from './pages/Products'
import { Checkout } from './pages/Checkout'
import { ConfirmedOrder } from './pages/ConfirmedOrder'
import { CartProvider } from './context/CartContext'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Products />
  },
  {
    path: "/checkout",
    element: <Checkout />
  },
  {
    path: "/order-confirmation",
    element: <ConfirmedOrder />
  },
])

export function App() {
  return (
    <ThemeProvider theme={defaultTheme} >
      <CartProvider>
        <Layout>
          <RouterProvider router={router} />
        </Layout>
      </CartProvider>

      <GlobalStyle />
    </ThemeProvider>
  )
}
