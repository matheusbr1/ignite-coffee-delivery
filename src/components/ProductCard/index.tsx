import { ICoffee } from "../../interfaces/coffee"
import { defaultTheme } from "../../styles/theme"
import { currencyFormatter } from "../../utils/currencyFormatter"
import { ProductCardContainer } from "./styles"
import { Minus, Plus, ShoppingCartSimple } from '@phosphor-icons/react'

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

        <div className='product-counter' >
          <button>
            <Minus color={defaultTheme.colors.purple} />
          </button>

          <span>1</span>

          <button>
            <Plus color={defaultTheme.colors.purple} />
          </button>
        </div>

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