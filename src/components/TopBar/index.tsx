import { TopBarContainer, LocationInfo, CartButton } from "./styles";
import Logo from '../../assets/logo.svg'
import { defaultTheme } from "../../styles/theme";
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

export function TopBar() {
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

        <CartButton>
          <ShoppingCart
            size={22}
            color={defaultTheme.colors["yellow-dark"]}
            weight="fill"
          />
        </CartButton>
      </div>
    </TopBarContainer>
  )
}