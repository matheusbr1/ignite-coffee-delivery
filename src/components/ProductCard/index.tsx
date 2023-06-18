import { ICoffee } from "../../interfaces/coffee"
import { defaultTheme } from "../../styles/theme"
import { currencyFormatter } from "../../utils/currencyFormatter"
import { ProductCounter } from "../ProductCounter"
import { ProductCardContainer } from "./styles"
import { ShoppingCartSimple } from '@phosphor-icons/react'

interface ProductCardProps {
  product: ICoffee
}

export function ProductCard({ product }: ProductCardProps) {
  const price = currencyFormatter().format(product.price)

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

        <ProductCounter />

        <button className="cart-button" >
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