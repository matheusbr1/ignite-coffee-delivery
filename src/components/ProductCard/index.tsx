import { useState, useCallback, useContext } from "react"
import { ICoffee } from "../../interfaces/coffee"
import { defaultTheme } from "../../styles/theme"
import { currencyFormatter } from "../../utils/currencyFormatter"
import { ProductCounter } from "../ProductCounter"
import { ProductCardContainer } from "./styles"
import { ShoppingCartSimple } from '@phosphor-icons/react'
import { CartContext } from '../../context/CartContext'
import toast from 'react-hot-toast'

interface ProductCardProps {
  product: ICoffee
}

const notify = (message: string) => toast.success(message)

export function ProductCard({ product }: ProductCardProps) {
  const price = currencyFormatter().format(product.price)
  const [quantity, setQuantity] = useState(1)
  const { addProduct } = useContext(CartContext)

  const handleAddProductToCart = useCallback(() => {
    addProduct({ ...product, quantity })
    notify('Produto adicionado ao carrinho!')
  }, [quantity])

  const handleIncreaseQuantity = useCallback(() => {
    setQuantity(quantity => quantity + 1)
  }, [])

  const handleDecreaseQuantity = useCallback(() => {
    setQuantity(quantity => Math.max(quantity - 1, 1))
  }, [])

  return (
    <ProductCardContainer>
      <img src={`coffees/${product.imageName}.png`} />

      <div className='chips' >
        {product.chips.map(chip => (
          <div key={chip} className="chip" >
            <span>{chip}</span>
          </div>
        ))}
      </div>

      <h3 className="product-name" >{product.name}</h3>
      <p className="product-description" >{product.description}</p>

      <footer className="footer-actions" >
        <p className="product-price" >{price}</p>

        <ProductCounter.Root>
          <ProductCounter.DecreaseButton onClick={handleDecreaseQuantity} />
          <ProductCounter.Label>{quantity}</ProductCounter.Label>
          <ProductCounter.IncreseButton onClick={handleIncreaseQuantity} />
        </ProductCounter.Root>

        <button className="cart-button" onClick={handleAddProductToCart} >
          <ShoppingCartSimple
            color={defaultTheme.colors.white}
            size={22}
            weight="fill"
          />
        </button>
      </footer>
    </ProductCardContainer>
  )
}