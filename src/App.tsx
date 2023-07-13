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
    element: <Layout><Products /></Layout>
  },
  {
    path: "/checkout",
    element: <Layout><Checkout /></Layout>
  },
  {
    path: "/order-confirmation",
    element: <Layout><ConfirmedOrder /></Layout>
  },
])

export function App() {
  return (
    <ThemeProvider theme={defaultTheme} >
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
