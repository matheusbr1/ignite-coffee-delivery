import { TopBarContainer, LocationInfo, CartButton } from "./styles";
import Logo from '../../assets/logo.svg'
import { defaultTheme } from "../../styles/theme";
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { useCallback, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

export function TopBar() {
  const { cartQuantity } = useContext(CartContext)

  const navigate = useNavigate()

  const handleNavigateToCart = useCallback(() => {
    navigate('/checkout')
  }, [])

  return (
    <TopBarContainer>
      <img src={Logo} alt="Coffee Delivery" />

      <div className="infos-wrapper" >
        <LocationInfo>
          <MapPin
            size={22}
            color={defaultTheme.colors["purple"]}
            weight="fill"
          />
          <p> Porto Alegre, RS </p>
        </LocationInfo>

        <CartButton onClick={handleNavigateToCart} >
          <ShoppingCart
            size={22}
            color={defaultTheme.colors["yellow-dark"]}
            weight="fill"
          />
          <div>
            {cartQuantity}
          </div>
        </CartButton>
      </div>
    </TopBarContainer>
  )
}