import { useCallback, useContext } from "react"
import { ICoffee } from "../../interfaces/coffee"
import { ProductCounter } from "../ProductCounter"
import { Trash } from "@phosphor-icons/react"
import { defaultTheme } from "../../styles/theme"
import { currencyFormatter } from "../../utils/currencyFormatter"
import { CheckoutProductCardContainer } from "./styles"
import { CartContext } from "../../context/CartContext"
import toast from 'react-hot-toast'

interface ICartProduct extends ICoffee {
  quantity: number
}

interface CheckoutProductCardProps {
  product: ICartProduct
}

const notify = (message: string) => toast.success(message)

export function CheckoutProductCard({ product }: CheckoutProductCardProps) {
  const {
    removeProduct,
    increaseProductQuantity,
    decreaseProductQuantity
  } = useContext(CartContext)

  const handleIncreaseQuantity = useCallback(() => {
    increaseProductQuantity(product.id)
  }, [])

  const handleDecreaseQuantity = useCallback(() => {
    decreaseProductQuantity(product.id)
  }, [])

  const hadleRemoveProductFromCart = useCallback(() => {
    removeProduct(product.id)
    notify('Produto removido do carrinho!')
  }, [])

  const price = currencyFormatter().format(product.price)

  return (
    <CheckoutProductCardContainer>
      <img src={`coffees/${product.imageName}.png`} />

      <div className="central-content" >
        <h3 className="product-name" >{product.name}</h3>
        <div className="product-actions" >
          <ProductCounter.Root>
            <ProductCounter.DecreaseButton onClick={handleDecreaseQuantity} />
            <ProductCounter.Label>{product.quantity}</ProductCounter.Label>
            <ProductCounter.IncreseButton onClick={handleIncreaseQuantity} />
          </ProductCounter.Root>
          <button className="remove-product-button" onClick={hadleRemoveProductFromCart} >
            <Trash size={16} color={defaultTheme.colors.purple} />
            <span>Remover</span>
          </button>
        </div>
      </div>

      <p className="product-price" >{price}</p>
    </CheckoutProductCardContainer>
  )
}