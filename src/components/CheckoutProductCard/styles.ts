import { styled } from "styled-components";

export const CheckoutProductCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 1.5rem;

  img {
    height: 4rem;
    width: 4rem;
  }

  .central-content {
    flex: 1;
  }

  .product-name {
    font-size: ${props => props.theme.typography.text.m};
    line-height: 130%;
    font-weight: 400;
    color: ${props => props.theme.colors['base-subtitle']};
  }

  .product-actions {
    display: flex;
  }

  .remove-product-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25em;

    padding: 0px 0.5rem;
    background: ${props => props.theme.colors['base-button']};
    border-radius: 6px;

    transition: all 0.2s;

    span {
      font-weight: 400;
      font-size: ${props => props.theme.typography.button.m};
      text-transform: uppercase;
      color: ${props => props.theme.colors['base-text']};
    }

    &:hover {
      background: ${props => props.theme.colors['base-hover']}
    }
  }

  .product-price {
    font-weight: 700;
    font-size: ${props => props.theme.typography.text.m};
    line-height: 130%;
    color: ${props => props.theme.colors['base-text']}
  }
`