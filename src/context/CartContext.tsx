import React, { createContext, useState, useCallback } from 'react'
import { ICoffee } from '../interfaces/coffee'

interface ICartContext {
  products: ICartProduct[]
  cartQuantity: number
  addProduct: (product: ICartProduct) => void
  removeProduct: (id: number) => void
}

export const CartContext = createContext({} as ICartContext)

interface CartProviderProps {
  children: React.ReactNode
}

interface ICartProduct extends ICoffee {
  quantity: number
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [products, setProducts] = useState<ICartProduct[]>([])

  const addProduct = useCallback((product: ICartProduct) => {
    setProducts(currentProducts => {
      const productAlreadyExistsInCart = currentProducts
        .some(item => item.id === product.id)
      if (productAlreadyExistsInCart) return currentProducts
      return [...currentProducts, product]
    })
  }, [])

  const removeProduct = useCallback((id: number) => {
    setProducts(currentProducts => {
      return currentProducts.filter(product => product.id !== id)
    })
  }, [])

  return (
    <CartContext.Provider value={{
      products,
      addProduct,
      removeProduct,
      cartQuantity: products.length
    }} >
      {children}
    </CartContext.Provider>
  )
}