import { ShoppingCart, Package, Timer, Coffee } from '@phosphor-icons/react'

import {
  ProductsContainer,
  IntroSectionContainer,
  IconBackgroundCircle,
  InfosContainer,
  BackgroundImage,
  IntroInfosGrid,
  ProductsGrid
} from "./styles";

import CoffeeImage from '../../assets/coffee.svg'
import { defaultTheme } from "../../styles/theme";
import { COFFEES } from '../../data/coffees';
import { ProductCard } from '../../components/ProductCard';

export function Products() {
  return (
    <ProductsContainer>
      <BackgroundImage />

      <IntroSectionContainer>
        <InfosContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>

          <IntroInfosGrid>
            <div className='intro-infos-grid-item' >
              <IconBackgroundCircle color="yellow-dark" >
                <ShoppingCart
                  size={16}
                  weight="fill"
                  color={defaultTheme.colors.white}
                />
              </IconBackgroundCircle>
              <p>Compra simples e segura</p>
            </div>

            <div className='intro-infos-grid-item' >
              <IconBackgroundCircle color="yellow" >
                <Package
                  size={16}
                  weight="fill"
                  color={defaultTheme.colors.white}
                />
              </IconBackgroundCircle>
              <p>Embalagem mantém o café intacto</p>
            </div>

            <div className='intro-infos-grid-item' >
              <IconBackgroundCircle color="base-text" >
                <Timer
                  size={16}
                  weight="fill"
                  color={defaultTheme.colors.white}
                />
              </IconBackgroundCircle>
              <p>Entrega rápida e rastreada</p>
            </div>

            <div className='intro-infos-grid-item' >
              <IconBackgroundCircle color="purple" >
                <Coffee
                  size={16}
                  weight="fill"
                  color={defaultTheme.colors.white}
                />
              </IconBackgroundCircle>
              <p>O café chega fresquinho até você</p>
            </div>
          </IntroInfosGrid>
        </InfosContainer>

        <div>
          <img src={CoffeeImage} />
        </div>
      </IntroSectionContainer>

      <ProductsGrid>
        {COFFEES.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsGrid>
    </ProductsContainer>
  )
}