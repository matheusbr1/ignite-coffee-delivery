import { HTMLAttributes } from 'react'
import { defaultTheme } from "../../styles/theme";
import { ProductCounterContainer } from "./styles";
import { Minus, Plus } from '@phosphor-icons/react'

const ProductCounterDecreaseButton: React.FC<HTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <button {...props} >
      <Minus color={defaultTheme.colors.purple} />
    </button>
  )
}

const ProductCounterIncreseButton: React.FC<HTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <button {...props} >
      <Plus color={defaultTheme.colors.purple} />
    </button>
  )
}

const ProductCounterLabel: React.FC<HTMLAttributes<HTMLSpanElement>> = ({ children }) => {
  return <span>{children}</span>
}

export const ProductCounter = {
  Root: ProductCounterContainer,
  DecreaseButton: ProductCounterDecreaseButton,
  IncreseButton: ProductCounterIncreseButton,
  Label: ProductCounterLabel,
}
