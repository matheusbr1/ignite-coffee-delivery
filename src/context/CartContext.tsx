import React, { createContext, useState, useCallback, useMemo } from 'react'
import { ICoffee } from '../interfaces/coffee'
import { Address } from '../pages/Checkout'

interface ICartContext {
  products: ICartProduct[]
  cartQuantity: number
  addProduct: (product: ICartProduct) => void
  removeProduct: (id: number) => void
  increaseProductQuantity: (id: number) => void
  decreaseProductQuantity: (id: number) => void
  productsTotal: number
  address: Address
  updateAddress: (address: Address) => void
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

  const increaseProductQuantity = useCallback((id: number) => {
    setProducts(currentProducts => {
      return currentProducts.map(product => {
        if (product.id === id) return {
          ...product, quantity: product.quantity + 1
        }
        return product
      })
    })
  }, [])

  const decreaseProductQuantity = useCallback((id: number) => {
    setProducts(currentProducts => {
      return currentProducts.map(product => {
        if (product.id === id) return {
          ...product, quantity: Math.max(product.quantity - 1, 1)
        }
        return product
      })
    })
  }, [])

  const productsTotal = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + product.price * product.quantity
    }, 0)
  }, [products])

  const [address, setAddress] = useState<Address>({
    CEP: '',
    city: '',
    complement: '',
    neighborhood: '',
    number: 0,
    state: '',
    street: ''
  })

  const updateAddress = useCallback((address: Address) => {
    setAddress(address)
  }, [])

  return (
    <CartContext.Provider value={{
      products,
      addProduct,
      removeProduct,
      cartQuantity: products.length,
      decreaseProductQuantity,
      increaseProductQuantity,
      productsTotal,
      address,
      updateAddress
    }} >
      {children}
    </CartContext.Provider>
  )
}