import { useCallback, useState } from "react"
import { ICoffee } from "../../interfaces/coffee"
import { ProductCounter } from "../ProductCounter"
import { Trash } from "@phosphor-icons/react"
import { defaultTheme } from "../../styles/theme"
import { currencyFormatter } from "../../utils/currencyFormatter"
import { CheckoutProductCardContainer } from "./styles"

interface ICartProduct extends ICoffee {
  quantity: number
}

interface CheckoutProductCardProps {
  product: ICartProduct
}

export function CheckoutProductCard({ product }: CheckoutProductCardProps) {
  const [quantity, setQuantity] = useState(1)

  const handleIncreaseQuantity = useCallback(() => {
    setQuantity(quantity => quantity + 1)
  }, [])

  const handleDecreaseQuantity = useCallback(() => {
    setQuantity(quantity => Math.max(quantity - 1, 0))
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
            <ProductCounter.Label>{quantity}</ProductCounter.Label>
            <ProductCounter.IncreseButton onClick={handleIncreaseQuantity} />
          </ProductCounter.Root>
          <button className="remove-product-button" >
            <Trash size={16} color={defaultTheme.colors.purple} />
            <span>Remover</span>
          </button>
        </div>
      </div>

      <p className="product-price" >{price}</p>
    </CheckoutProductCardContainer>
  )
}