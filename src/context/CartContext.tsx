import React, { createContext } from 'react'

const CartContext = createContext({})

interface CartProviderProps {
  children: React.ReactNode
}

export const CartProvider = ({ children }: CartProviderProps) => {
  return (
    <CartContext.Provider value={{}} >
      {children}
    </CartContext.Provider>
  )
}