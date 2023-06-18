import { defaultTheme } from "../../styles/theme";
import { ProductCounterContainer } from "./styles";
import { Minus, Plus } from '@phosphor-icons/react'

export function ProductCounter() {
  return (
    <ProductCounterContainer>
      <button>
        <Minus color={defaultTheme.colors.purple} />
      </button>

      <span>1</span>

      <button>
        <Plus color={defaultTheme.colors.purple} />
      </button>
    </ProductCounterContainer>
  )
}